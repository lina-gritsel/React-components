import { createServer as createViteServer } from 'vite'
import { fileURLToPath } from 'url'
import express from 'express'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const indexHTML = path.resolve(__dirname, 'index.html')

const PORT = process.env.PORT || 3000

const createServer = async () => {
  const app = express()
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use('*', async (request, res, next) => {
    const url = request.originalUrl

    try {
      const template = fs.readFileSync(indexHTML, 'utf-8')
      const transformHTML = await vite.transformIndexHtml(url, template)
      const html = transformHTML.split(`<!--ssr-outlet-->`)

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
      const { pipe } = await render(url, {
        onShellReady() {
          res.write(html[0])
          pipe(res)
        },
        onAllReady() {
          res.write(html[0] + html[1])
          res.end()
        },
      })
    } catch (error) {
      vite.ssrFixStacktrace(error as Error)
      next(error)
    }
  })

  // eslint-disable-next-line no-console
  console.log(`Server is running >>> http://localhost:${PORT}`)
  app.listen(PORT)
}

createServer()
