var conn = require('../modals/db.js');

exports.addNewTeacher = function(tno, tname, sex, birthday, dno, title, direction, callback) {
	var sql = "insert into teacher values ('"+tno+"', '"+tname+"', '"+sex+"', '"+birthday+"', '"+dno+"', '"+title+"', '"+direction+"')";
	conn.query(sql, callback);
};

exports.getAllTeacher = function(callback) {
	var sql = "select teacher.*, department.d_name from teacher, department where department.d_no=teacher.d_no";
	conn.query(sql, callback);
};

exports.getOneTeacher = function(tno, callback) {
	var sql = "select teacher.*, department.d_name from teacher, department where teacher.t_no='"+tno+"' and department.d_no=teacher.d_no";
	conn.query(sql, callback);
};

exports.deleteTeacher = function(tno, callback) {
	var sql = "delete from teacher where t_no='"+tno+"'";
	conn.query(sql, callback);
};

exports.rewriteTeacher = function(tno, data, callback) {
	var sql = "update teacher set t_name='"+data.tname+"', t_sex='"+data.sex+"', t_birthday='"+data.birthday+"', d_no='"+data.dno+"', t_title='"+data.title+"', t_direction='"+data.direction+"' where t_no='"+tno+"'";
	conn.query(sql, callback);
};