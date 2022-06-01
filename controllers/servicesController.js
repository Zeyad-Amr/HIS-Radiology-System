const db = require("../mysql-con");



module.exports = {
    createservice: (req,res) => {
         
        const sqlStatment = `INSERT INTO services SET ?`
        db.query(sqlStatment, req.body, (err,result) => {
            if (err) {
                return res.status(400).json(err);
            }
            res.status(201).json(result)
        })
        
        
    }
    
}