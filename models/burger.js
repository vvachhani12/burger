// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
        console.log("burger.js res: "+res)
        console.log(res);
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  Add: function(cols, vals, cb) {
    orm.Add("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

//   Update: function(vals1, cb) {
//     orm.Update("burgers", "devoured", false, "id", vals1, function(res) {
//         console.log(res);
//       cb(res);
//     });
//   }
Update: function(vals1, cb) {
    orm.Update(vals1, function(res) {
        console.log(res);
      cb(res);
    });
  }
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller (catsController.js).
// console.log(burgers.selectAll(function(data){ console.log(data)}));
console.log(burgers.Update(1,function(data){console.log(data)}));
module.exports = burgers;
