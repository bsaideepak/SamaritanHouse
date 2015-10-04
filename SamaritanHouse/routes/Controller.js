var db = require('../util/userAccountsDB');

exports.homepage = function(req, res){
	console.log("here.");
	res.send("Welcome to my NodeJS App. We're going Old School!!");
}

exports.registerWorker = function(req, res){
	json = [];
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

	db.insertUserAccountDetails(json);
}