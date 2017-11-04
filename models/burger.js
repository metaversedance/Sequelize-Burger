var orm = require("../config/orm.js");

var burger = {
	all: function(callback){
		orm.selectAll("burgers", callback)
	},
	create: function(burger_name,callback) {

		orm.insertOne("burgers",
			["burger_name","devoured"],
			[burger_name,false],
			callback);
	},
	update: function(id,objColVals,callback) {
		var condition = "id = " + id;
		orm.updateOne("burgers",objColVals, condition, callback);
	}

}

module.exports = burger;
//do burger specific SQL stuff w orm here

  // `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  // `burger_name` VARCHAR( 255) NOT NULL,
  // `devoured` BOOLEAN NOT NULL,
  // `date` DATETIME NOT NULL,

  // table, cols,vals, callback
  // VALUES ("Godzilla",FALSE,CURRENT_TIMESTAMP);

  // table, objColVals, condition, callback
