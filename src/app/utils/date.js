const formattedDate = (date) => {
  const d = new Date(date)
  return ('0' + d.getDate().toString()).slice(-2) + '.' + ('0' + (d.getMonth() + 1).toString()).slice(-2) + '.' + d.getFullYear()
}

export default formattedDate
