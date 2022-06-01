const db = require("../mysql-con");



module.exports = {
    createDep: (req,res) => {
         
        const sqlStatment = `INSERT INTO dep(name) VALUES (?)`
        db.query(sqlStatment, req.body.name, (err,result) => {
            if (err) {
                return res.status(400).json(err);
            }
            res.status(201).json(result)
        })
        
        
    }
    
}