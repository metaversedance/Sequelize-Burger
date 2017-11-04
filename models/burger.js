// var orm = require("../config/orm.js");

// var burger = {
// 	all: function(callback){
// 		orm.selectAll("burgers", callback)
// 	},
// 	create: function(burger_name,callback) {

// 		orm.insertOne("burgers",
// 			["burger_name","devoured"],
// 			[burger_name,false],
// 			callback);
// 	},
// 	update: function(id,objColVals,callback) {
// 		var condition = "id = " + id;
// 		orm.updateOne("burgers",objColVals, condition, callback);
// 	}

// }
// DROP DATABASE IF EXISTS `burgers_db`;
// CREATE DATABASE `burgers_db`;
// USE `burgers_db`

// CREATE TABLE `burgers` (
//   `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
//   `burger_name` VARCHAR( 255) NOT NULL,
//   `devoured` BOOLEAN NOT NULL,
//   `date` DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,

//   PRIMARY KEY ( `id` ) );

module.exports = function(sequelize, DataTypes) {

var Burger = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: {
    	type: DataTypes.DATE,
    	defaultValue: sequelize.NOW
    }

  });

Burger.allBurgers = function(callback) {
	Burger.findAll({})
			.then(function(dbPost) {
				  callback(dbPost);
			});

}

Burger.createBurger = function(burger_name,callback) {
    Burger.create({
    	burger_name: burger_name
    }).then(function(dbPost) {
    	callback(dbPost);

    });
}

Burger.updateBurger = function(id, updateObj,  callback) {

	Burger.update(updateObj, {
	  where: { id: id  }
	}).then(function(){
		callback()
	})

}
return Burger;
};


