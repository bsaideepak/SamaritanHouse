var mysql = require('./dbConnectionsController');

exports.employerLogin = function(req, res){
	var connection=mysql.getConnection();
	var query = connection.query("Select * from LoginInfo where username = ? and Password=< ",[req.body.UserName, req.body.Password] , function(err, result){
		if (err) {
			res.error=err;									
		} 
		else{
			if((result[0].UserName == json.UserName) && (result[0].Password == json.Password)){
				req.session.id = login[0].id;
				if(result[0].Role == "Employee"){
					res.render('e'); 
				}else if(result[0].Role == "Employee"){
					res.render('e'); 
				}else{
					res.render('');
				}
			}
			else{
				res.render('/home');  //Change the URL.
			}
		}
	});
}