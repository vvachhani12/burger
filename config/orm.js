var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    // console.log(queryString)
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log("orm.js result: "+result);
      cb(result);
    });
  },

  Add: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
//   Update: function(tableInput, colToReplace, replaceVal, idCol, valOfCol, cb) {
//     var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
//     console.log(queryString);
//     connection.query(queryString,[tableInput,colToReplace,replaceVal,idCol,valOfCol],function(err,result){
//       if (err) throw err;
//       console.log(result);
//       cb(result);
//     });
//   },
  Update: function(valOfCol, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString,[{devoured:true},{id:valOfCol}],function(err,result){
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
//   leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
//     var queryString = "SELECT ?? FROM ?? AS tOne";
//     queryString += " LEFT JOIN ?? AS tTwo";
//     queryString += " ON tOne.?? = tTwo.??";

//     console.log(queryString);

//     connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
//       err,
//       result
//     ) {
//       if (err) throw err;
//       console.log(result);
//     });
//   }
};

// orm.selectAll("burgers");

module.exports = orm;