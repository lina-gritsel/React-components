export const searchActions = {
  CHANGE_SEARCH_VALUE: 'CHANGE_SEARCH_VALUE',
}

export const changeSearchValue = (searchString: string) => {
  return { type: 'CHANGE_SEARCH_VALUE', searchString }
}
