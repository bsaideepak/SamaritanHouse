var mysql = require('./dbConnectionsController');

exports.employers=function getEmployerDetails(req, res,summary) {	
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
exports.empRegister=function insertEmployer(req, res) {	
	var connection=mysql.getConnection();
	
	var query = connection.query("INSERT INTO connections set ? ",data, function(err, rows){
		if (err) {
			res.error=err;									
		} 
		else {					
			res.send({"msg":"successfully inserted"});
		}
		connection.end();	
	});
};



 