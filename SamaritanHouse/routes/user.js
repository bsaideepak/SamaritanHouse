var mysql = require('./dbConnectionsController');
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

function loadExperience(req, res,summary) {	
		var connection=mysql.getConnection();
		var query = connection.query("select * from experience where userid=?",
				[ userid ], function(err, rows) {
			connection.end();
			if (err) {
				console.log(err);
				cstmError.mySqlException(err, res);					
				cstmError.throwException('Something went wrong.',res);
			} else {
				//res.set({});
				//res.render('profile',{session:req.session,"experience":rows,"summary":summary});	
				loadEducation(req, res, summary,rows);
			}
		});

}
