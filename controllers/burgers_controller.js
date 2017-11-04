const express = require("express");

var Burger = require("../models/").Burger;


module.exports = function(app) {
	app.get("/", function(req,res){
		Burger.allBurgers(function(result){
			res.render("index",{burgers:result.reverse() });

		})


	})

	app.get("/api/devour/:id", function(req,res){
		var id = req.params.id;
		Burger.updateBurger(id, {devoured: true}, function(){
				console.log("render")
				res.redirect("/")
		})
	})

	app.post("/api/new/", function(req,res){
		var burger_name = req.body.name;
		console.log(burger_name)
		Burger.createBurger(burger_name, function(result){
			res.redirect("/")
		})
	})

}

// id,objColVals,callback