var mysql = require('./dbConnectionsController');

exports.employers = function(json) {
		
		var connection=mysql.getConnection();
		var query = connection.query("select * from EmployerInfo ",
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

exports.empRegister = function(callback, json) {	
	var connection=mysql.getConnection();
	
	var query = connection.query("INSERT INTO connections set ? ", json , function(err, r){
		if (err) {
			res.error=err;									
		} 
		else {		

			connection.query("select MAX(id) as id from WorkerInfo "), function(err, results){
				if(err){
					console.log("Sleep!!!");

				}else{

					connection.query("INSERT INTO UserSkills set ? ", {WorkerID: results, SkillID: json.SkillID} , function(err, rows){
						if (err) {
							res.error=err;									
						} 
						else {
							res.send({"msg":"successfully inserted"});	
						}
					});
				}
			}	
		}
		connection.end();	
	});
}; 