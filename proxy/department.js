var conn = require('../modals/db.js');

exports.addNewDepartment = function(dno, dname, describe, callback) {
	var sql = "insert into department values ('"+dno+"', '"+dname+"', '"+describe+"')";
	conn.query(sql, callback);
};

exports.getAllDept = function(callback) {
	var sql = "select * from department";
	conn.query(sql, callback);
};

exports.deleteDept = function(dno, callback) {
	var sql = "delete from department where d_no='"+dno+"'";
	conn.query(sql, callback);
};

exports.rewriteDept = function(dno, data, callback) {
	var sql = "update department set d_name='"+data.dname+"', d_describe='"+data.describe+"' where d_no='"+dno+"'";
	conn.query(sql, callback);
};

exports.getOneDept = function(dno, callback) {
	var sql = "select student.*, department.d_name from student, department where student.d_no='"+dno+"' and department.d_no=student.d_no";
	conn.query(sql, callback);
};