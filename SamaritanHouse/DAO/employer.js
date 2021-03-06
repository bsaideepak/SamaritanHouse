var mysql = require('./dbConnectionsController');
var bcrypt = require('./bCrypt');
function encryptPassword(pwd)
{
	//var bcrypt = require('bcryptjs');
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(pwd, salt);	
	return hash;
}
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

exports.newEmployer = function (callback, res, json,UserName,Password) {	
	var connection=mysql.getConnection();	
	var encpassword=encryptPassword(Password);
	var query = connection.query("INSERT INTO LoginInfo set ? ",{UserName:UserName,Password:encpassword,RolesID:2}, function(err, r){
		if (err) {
			console.log("Error: " + r);		
			connection.end();								
		} 
		else {		
			console.log("Level 1");			//connection.end();
			var conn = mysql.getConnection();
			conn.query("select MAX(UserId) as id from LoginInfo", function(error, results){
				if(error){
					console.log("Sleep!!! "+error);
					conn.end();	
				}else{									
					json.EmployerID=results[0].id;
							var query = connection.query("INSERT INTO EmployerInfo set ? ",json, function(err, r){
								if (err) {
									console.log("Error: " + r);		
									connection.end();								
								} 
								else {
									connection.end();
								}				
							});
				}
			});
		}
	});
};

exports.editEmployer = function(callback, json){
	var connection=mysql.getConnection();
	//Change Query.
	var query = connection.query("UPDATE EmployerInfo set ? where EmployerID= ? ",[json,json.EmployerID], function(err, r){
		if (err) {
			console.log("Error: " + r);		
			connection.end();								
		} 
		else {		
			console.log("Level 1");
		}
	});	
};
 
exports.deleteEmployer = function(callback, EmployerID){
	var connection=mysql.getConnection();
	//Change Query.
	var query = connection.query("DELETE from EmployerInfo where EmployerID=? ",EmployerID, function(err, r){
		if (err) {
			console.log("Error: " + r);		
			connection.end();								
		} 
		else {		
			connection.end();
		}
	});	
};


 