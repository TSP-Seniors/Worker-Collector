export const expiryTime = (expiryDate) => {
  const current = new Date()
  current.getFullYear()
  current.getMonth()
  current.getDate()
  current.setHours(0, 0, 0, 0)
  const expiry = new Date(expiryDate)
  const timeMS = expiry - current
  const days = Math.ceil(timeMS / (1000 * 60 * 60 * 24))
  return days
}
