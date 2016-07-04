var conn = require('../modals/db.js');

exports.addNewCourse = function(cno, cname, tno, hour, score, time, place, examtime, callback) {
	var sql = "insert into course values ('"+cno+"', '"+cname+"', '"+tno+"', '"+hour+"', '"+score+"', '"+time+"', '"+place+"', '"+examtime+"')";
	conn.query(sql, callback);
};

exports.getOneCourse = function(cno, callback) {
	var sql = "select course.* from course where course.c_no='"+cno+"'";
	conn.query(sql, callback);
};

exports.getAllCourse = function(callback) {
	var sql = "select course.*, teacher.t_name from course, teacher where teacher.t_no=course.t_no";
	conn.query(sql, callback);
};

exports.deleteCourse = function(cno, callback) {
	var sql = "delete from course where c_no='"+cno+"'";
	conn.query(sql, callback);
};

exports.rewriteCourse = function(cno, data, callback) {
	var sql = "update course set c_name='"+data.cname+"', t_no='"+data.tno+"', c_hour='"+data.hour+"', c_score='"+data.score+"', c_time='"+data.time+"', c_place='"+data.place+"', c_examtime='"+data.examtime+"' where c_no='"+cno+"'";
	conn.query(sql, callback);
};