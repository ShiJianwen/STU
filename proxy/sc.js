var conn = require('../modals/db.js');

exports.addNewSC = function(sno, cno, callback) {
	var sql = "insert into student_course values ('"+sno+"', '"+cno+"')";
	conn.query(sql, callback);
};

exports.checkSC = function(sno, callback) {
	var sql = "select student_course.*, course.c_score from student_course, course where student_course.s_no='"+sno+"' and course.c_no=student_course.c_no";
	conn.query(sql, callback);
};

exports.getAllSC = function(callback) {
	var sql = "select student_course.*, student.s_name, course.c_name from student_course, student, course where student.s_no=student_course.s_no and course.c_no=student_course.c_no";
	conn.query(sql, callback);
};

exports.getOneSC = function(sno, callback) {
	var sql = "select student_course.*, student.s_name, course.c_name from student_course, student, course where student.s_no=student_course.s_no and course.c_no=student_course.c_no and student_course.s_no='"+sno+"'";
	conn.query(sql, callback);
};

exports.deleteSC = function(sno, cno, callback) {
	var sql = "delete from student_course where c_no='"+cno+"' AND s_no='"+sno+"'";
	conn.query(sql, callback);
};

exports.rewriteSC = function(sno, cno, callback) {
	var sql = "update student_course set c_no='"+cno+"', s_no='"+sno+"' where c_no='"+cno+"' AND s_no='"+sno+"'";
	conn.query(sql, callback);
};