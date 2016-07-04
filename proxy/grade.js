var conn = require('../modals/db.js');

exports.addNewGrade = function(sno, cno, data, callback) {
	var sql = "insert into grade values ('"+sno+"', '"+cno+"', '"+data.cgrade+"', '"+data.egrade+"', '"+data.fgrade+"')";
	conn.query(sql, callback);
};

exports.getAllGrade = function(callback) {
	var sql = "select grade.*, student.s_name, course.c_name from grade, student, course where student.s_no=grade.s_no and course.c_no=grade.c_no";
	conn.query(sql, callback);
};

exports.deleteGrade = function(sno, cno, callback) {
	var sql = "delete from grade where s_no='"+sno+"' and c_no='"+cno+"'";
	conn.query(sql, callback);
};

exports.rewriteGrade = function(sno, cno, data, callback) {
	var sql = "update grade set common_grade='"+data.cgrade+"', exam_grade='"+data.egrade+"', final_grade='"+data.fgrade+"' where s_no='"+sno+"' and c_no='"+cno+"'";
	conn.query(sql, callback);
};