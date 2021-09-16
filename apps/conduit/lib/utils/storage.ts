const storage = async (key) => {
  const value = localStorage.getItem(key)
  // eslint-disable-next-line no-extra-boolean-cast
  return !!value ? JSON.parse(value) : undefined
}

export default storage
