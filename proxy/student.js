var conn = require('../modals/db.js');

exports.addNewStudent = function(sno, sname, sex, birthday, score, dno, callback) {
	var sql = "insert into student values ('"+sno+"', '"+sname+"', '"+sex+"', '"+birthday+"', '"+score+"', '"+dno+"')";
	conn.query(sql, callback);
};

exports.getAllStudent = function(callback) {
	var sql = "SELECT student.*,department.d_name FROM student,department WHERE department.d_no = student.d_no";
	conn.query(sql, callback);
};

exports.getOneStu = function(sno, callback) {
	var sql = "select student.*, department.d_name from student, department where student.s_no='"+sno+"' and department.d_no=student.d_no";
	conn.query(sql, callback);
};

exports.deleteStudent = function(sno, callback) {
	var sql = "delete from student where s_no='"+sno+"'";
	conn.query(sql, callback);
};

exports.rewriteStudent = function(sno, data, callback) {
	var sql = "update student set s_name='"+data.sname+"', s_sex='"+data.sex+"', s_birthday='"+data.birthday+"', grade='"+data.score+"', d_no='"+data.dno+"' where s_no='"+sno+"'";
	conn.query(sql, callback);
};