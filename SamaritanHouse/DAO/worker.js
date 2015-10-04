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
	
	var query = connection.query("INSERT INTO WorkerInfo set ? ", json , function(err, r){
		if (err) {
			console.log(json);
			console.log("dadad");									
		} 
		else {
			console.log("SUCCESS******************");		
			console.log(json);
		}
		connection.end();	
	});
};
 