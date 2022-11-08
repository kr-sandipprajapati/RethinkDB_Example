const updateData = (r, tableName, connection, data) => {
    r.table(tableName).update(data).run(connection, (err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2))
    })
}
const updateByName = (r, tableName, connection, filterData, updateData) => {
    r.table(tableName)
        .filter(r.row("name").eq(filterData))
        .update(updateData)
        .run(connection, (err, result) => {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2))
        })
}
const changeData = (r, tableName, filterData, updateData, connection) => {
    r.table(tableName).filter(r.row(Object.keys(filterData)[0]).eq(Object.values(filterData)[0]))
        .update({
            posts: r.row("posts").append(updateData)
        })
        .run(connection, (err, result) => {
            if (err) throw result;
            console.log(JSON.stringify(result, null, 2))
        })
}
module.exports = { updateData, updateByName, changeData };