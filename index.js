let r = require("rethinkdb");
const createTable = require("./DB/create_table");
const insertData = require("./DB/insert_data");
const authorData = require("./DB/authorData");
const fetchData = require("./DB/fetchData");
const { filterData1, filterData2 } = require("./DB/filterData");
const findByID = require("./DB/findByID");
const { updateData, updateByName, changeData } = require("./DB/updateData");
const deleteData = require("./DB/deleteData")
r.connect({ host: "localhost", port: 28015 }, (err, conn) => {
    if (err) throw console.log("🚀 ~ file: index.js ~ line 5 ~ r.connect ~ err", err);
    // createTable(r,"test","writer",conn)
    // insertData(r, "authors",conn,authorData)
    // fetchData(r,"authors",conn)
    // filterData1(r,"authors",conn)
    // filterData2(r,"authors",conn)
    // findByID(r,"authors","789b3ecb-2e49-4924-890f-74abc528bd7b", conn)
    // updateData(r,"authors",conn,{ type:"fictional"})
    // updateByName(r,"authors",conn,"William Adama",{rank: "Admiral"})
    // changeData(r, "authors", { name: "Jean-Luc Picard" }, {
    //     title: "Shakespeare",
    //     content: "What a piece of work is man..."
    // }, conn)
    // deleteData(r,"authors","posts",conn)
})
