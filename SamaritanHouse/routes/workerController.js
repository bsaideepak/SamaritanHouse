// var mysql = require('../DAO/dbConnectionsController');
var worker = require('../DAO/worker');

exports.homepage = function(req, res){
	console.log("here.");
	res.render('index');
	// res.send("Welcome to my NodeJS App. We're going Old School!!");
}

exports.workerRegister = function(req, res){
	console.log("here.");
	res.render('wRegister');
	// res.send("Welcome to my NodeJS App. We're going Old School!!");
}
exports.employeeRegister = function(req, res){
	console.log("here.");
	res.render('eRegister');
	// res.send("Welcome to my NodeJS App. We're going Old School!!");
}
exports.eLogin = function(req, res){
	console.log("here.");
	res.render('eLogin');
	// res.send("Welcome to my NodeJS App. We're going Old School!!");
}


exports.newWorker = function(req, res){
	json = {};
	json.FirstName = req.body.FirstName;
	json.MiddleName = req.body.MiddleName;
	json.LastName = req.body.LastName;
	json.DOB = req.body.DOB;	
	json.SSN = req.body.SSN;
	json.Address1 = req.body.Address1;
	json.Address2 = req.body.Address2;
	json.City = req.body.City;
	json.State = req.body.State;
	json.Zip = req.body.Zip;
	json.Phone = req.body.Phone;
	json.Email = req.body.Email;
	json.Ethnicity = req.body.Ethnicity;
	json.JobSeeker = req.body.JobSeeker;
	json.WorkerStatus = req.body.WorkerStatus;
	//json.SkillID = 1;//req.body.SkillID;
	skID = 1;

	worker.newWorker(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res, json, skID);
}

exports.getWorker = function(req,res){
	if(req.body.WorkerID!= null){
		worker.getWorkerDetails(function(err, result){
			if(err){
				console.log("Error: "+ err);
			}else{
				console.log("Success!!");
				res.render('someWebPage');
			}
		},req.body.WorkerID);
	}else{
		res.send("Invalid WorkerID.")
	}
}
exports.getDashboard = function(req,res){
	res.render("dashboard");
}

exports.getWorkers = function(req, res){
	worker.getWorkers(req, res, function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("Success!!");
			res.render('someWebpage');
		}
	});
}