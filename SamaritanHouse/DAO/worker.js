var mysql = require('./dbConnectionsController');

exports.getWorkerDetails = function(json) {	
		var connection=mysql.getConnection();
		var query = connection.query("select * from WorkerInfo ",
				function(err, rows) {
			connection.end();
			if (err) {
				console.log(err);
				//cstmError.mySqlException(err, res);					
				//cstmError.throwException('Something went wrong.',res);
			} else {
				res.send({res:rows});
			}
		});
};	

exports.newWorker = function (callback, json) {	
	var connection=mysql.getConnection();
	
	var query = connection.query("INSERT INTO WorkerInfo set ? ",json, function(err, r){
		if (err) {
			console.log("Error: " + r);									
		} 
		else {		
			console.log("Level 1");

			connection.query("select MAX(WorkerID) as id from WorkerInfo ;"), function(error, results){
				if(error){
					console.log("Sleep!!! "+error);
				}else{
					console.log("Level 2");
					connection.query("INSERT INTO UserSkills set ? ", {WorkerID: results, SkillID: json.SkillID} , function(errors, rows){
						if (errors) {
							console.log("sdsd "+ errors);
						} 
						else {
							console.log("Level 3");
							res.send({"msg":"successfully inserted"});
							connection.end();	
						}
					});
				}
			}
		//	console.log(json);
		}
		//connection.end();	
	});
};
 