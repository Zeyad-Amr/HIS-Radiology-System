const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    const token = req.header("auth-token")
    if(!token) return res.status(401).send("Access denied")

    try {
      const decoded = jwt.verify(token,"temporary secret for testing")
      req.user = decoded
      next()
    } catch (ex) {
    res.status(400).send("invalid token");
    }
}