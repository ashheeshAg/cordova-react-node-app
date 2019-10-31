import jwtDecode from 'jwt-decode'

const getUser = function(req, res, next) {
  const token = req.header('Authorization')
  if (!token) return res.status(401).send('Access denied. No token provided.')
  try {
    const decoded = jwtDecode(token)
    req.user = decoded.name
    req.oid = decoded.oid
    next()
  } catch (ex) {
    res.status(400).send('Invalid token.')
  }
}
export default getUser
