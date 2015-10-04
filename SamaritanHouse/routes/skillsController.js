var mysql = require('./dbConnectionsController');

exports.getSkills = function getAllSkils(req, res) {	
		var connection=mysql.getConnection();
		var query = connection.query("select * from SkillsList",
				function(err, rows) {
			
			if (err) {
				console.log(err);
				//cstmError.mySqlException(err, res);					
				//cstmError.throwException('Something went wrong.',res);
			} else {
				res.send({res:rows});
			}
			connection.end();
		});

};

exports.getSkill = function getSkill(req, res) {	
		var connection=mysql.getConnection();
		skillId = req.params.id;
		var query = connection.query("select * from SkillsList where SkillID = " + skillId,
				function(err, rows) {
			
			if (err) {
				console.log(err);
				//cstmError.mySqlException(err, res);					
				//cstmError.throwException('Something went wrong.',res);
			} else {
				res.send({res:rows});
			}
			connection.end();
		});

};

exports.addSkill = function addSkill(req, res) {	
		var connection=mysql.getConnection();
		values = {SkillType:req.body.skillType};
		var query = connection.query("Insert into SkillsList Set ?", values,
				function(err, result) {
			
			if (err) {
				console.log(err);
				//cstmError.mySqlException(err, res);					
				//cstmError.throwException('Something went wrong.',res);
			} else {
				res.send({res:result});
			}
			connection.end();
		});

};

exports.updateSkill = function updateSkill(req, res) {	
		var connection=mysql.getConnection();
		console.log(req.body.skillType);
		var query = connection.query("Update SkillsList SET SkillType = ? where SkillID = ?" ,[req.body.skillType, req.params.id], function(err, result){
			if(err){
				console.log(err);
			}else{
				console.log("Success");
			}

		});
		connection.end();

};

exports.deleteSkill = function deleteSkill(req, res) {	
		var connection=mysql.getConnection();
		skillId = req.params.id;
		var query = connection.query("delete from SkillsList where SkillId = "+skillId,
				function(err, rows) {
			
			if (err) {
				console.log(err);
				//cstmError.mySqlException(err, res);					
				//cstmError.throwException('Something went wrong.',res);
			} else {
				res.send({res:"Success"});
			}
			connection.end();
		});

};