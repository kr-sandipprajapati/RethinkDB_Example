const filterData1 = (r,tableName, connection) => {
    r.table(tableName)
    .filter(r.row("name").eq("William Adama"))
    .run(connection, (err, cursor) => {
        if(err) throw err;
        cursor.toArray((err,result)=>{
            if(err) throw err;
            console.log(JSON.stringify(result,null,2));
        })
    })
}

const filterData2 = (r,tableName, connection) => {
    r.table(tableName)
    .filter(r.row("posts").count().gt(2))
    .run(connection, (err, cursor) => {
        if(err) throw err;
        cursor.toArray((err,result)=>{
            if(err) throw err;
            console.log(JSON.stringify(result,null,2));
        })
    })
}

module.exports = {filterData1, filterData2}