const authz = (permission) => {
    return (req,res,next) => {
        console.log(req.user);
        const userRole = req.user.role
    if(!permission.includes(userRole)) return res.status(403).send("Acceess denied")
    next()
}
}

module.exports = authz