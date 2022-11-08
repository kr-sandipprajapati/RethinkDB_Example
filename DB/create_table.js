const createTable = (r,dbName,tableName,connection) => {
    return r.db(dbName).tableCreate(tableName).run(connection,(err,result)=>{
        if (err) throw console.log("🚀 ~ file: create_table.js ~ line 4 ~ returnr.db.tableCreate ~ err", err);
        console.log(JSON.stringify(result,null,2))
    })
}

module.exports = createTable;