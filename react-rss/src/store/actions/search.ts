export const searchActions = {
  CHANGE_SEARCH_VALUE: 'CHANGE_SEARCH_VALUE',
}

export const changeSearchValue = (payload: string) => {
  return { type: 'CHANGE_SEARCH_VALUE', payload }
}
