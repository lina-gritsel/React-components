import { FC } from 'react'

export const Search: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" role='searchIcon'>
    <g fill="#134563">
      <path d="M27.7 47.1C17 47.1 8.2 38.4 8.2 27.6c0-10.7 8.7-19.5 19.5-19.5s19.5 8.7 19.5 19.5c-.1 10.8-8.8 19.5-19.5 19.5zm0-36.1C18.5 11 11 18.5 11 27.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7C44.3 18.5 36.8 11 27.7 11z" />
      <path d="M53.7 55.8 40.1 42.3l2.2-2.2 13.5 13.6-2.1 2.1" />
    </g>
  </svg>
)
