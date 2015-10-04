var db = require('../util/userAccountsDB');

exports.homepage = function(req, res){
	res.send("Welcome to my NodeJS App. We're going Old School!!");
}
	console.log("here.");


exports.register = function(req, res){
	json = [];
	json.username = req.body.username;
	json.password = req.body.password;
	db.insertUserAccountDetails(json);
}