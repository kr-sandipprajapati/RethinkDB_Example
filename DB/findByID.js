const findByID = (r, tableName, primaryKey,connection) => {
    r.table(tableName).get(primaryKey).run(connection,(err, result) => {
        if(err) throw err;
        console.log(JSON.stringify(result,null,2))
    })
}

module.exports = findByID;