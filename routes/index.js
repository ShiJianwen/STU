var Proxy = require('../proxy/index.js');
/* GET home page. */
exports.index = function(req, res) {
    res.sendfile('app/index.html');
};

exports.addDept = function(req, res) {
    Proxy.department.addNewDepartment(req.body.dno, req.body.dname, req.body.describe, function(err, response) {
        if (err) {
            console.log('数据库错误：' + err);
            res.send({
                err: err
            });
        } else {
            res.send({
                res: response
            });
        }
    });
};

exports.getDept = function(req, res) {
    Proxy.department.getAllDept(function(err, response) {
        res.send({
            depts: response
        });
    });
};

exports.getOneDept = function(req, res) {
    Proxy.department.getOneDept(req.params.dno, function(err, response) {
        res.send({
            stus: response
        });
    });
};

exports.deleteDept = function(req, res) {
    Proxy.department.deleteDept(req.params.dno, function(err, response) {
        if (!err) {
            res.send({
                res: response
            });
        } else {
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.rewriteDept = function(req, res) {
    Proxy.department.rewriteDept(req.params.dno, req.body, function(err, result) {
        if (!err) {
            res.send({
                res: result
            });
        } else {
            console.log(err);
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.addStu = function(req, res) {
    Proxy.student.addNewStudent(req.body.sno, req.body.sname, req.body.sex, req.body.birthday, req.body.score, req.body.dno, function(err, response) {
        if (err) {
            console.log('数据库错误：' + err);
            res.send({
                err: err
            });
        } else {
            res.send({
                res: response
            });
        }
    });
};

exports.getStu = function(req, res) {
    Proxy.student.getAllStudent(function(err, response) {
        res.send({
            stus: response
        });
    });
};

exports.getOneStu = function(req, res) {
    Proxy.student.getOneStu(req.params.sno, function(err, response) {
        res.send({
            stu: response
        });
    });
};

exports.deleteStu = function(req, res) {
    Proxy.student.deleteStudent(req.params.sno, function(err, response) {
        if (!err) {
            res.send({
                res: response
            });
        } else {
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.rewriteStu = function(req, res) {
    Proxy.student.rewriteStudent(req.params.sno, req.body, function(err, result) {
        if (!err) {
            res.send({
                res: result
            });
        } else {
            console.log(err);
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.addTech = function(req, res) {
    Proxy.teacher.addNewTeacher(req.body.tno, req.body.tname, req.body.sex, req.body.birthday, req.body.dno, req.body.title, req.body.direction, function(err, response) {
        if (err) {
            console.log('数据库错误：' + err);
            res.send({
                err: err
            });
        } else {
            res.send({
                res: response
            });
        }
    });
};

exports.getTech = function(req, res) {
    Proxy.teacher.getAllTeacher(function(err, response) {
        res.send({
            teachers: response
        });
    });
};

exports.getOneTech = function(req, res) {
    Proxy.teacher.getOneTeacher(req.params.tno, function(err, response) {
        res.send({
            teacher: response
        });
    });
};

exports.deleteTech = function(req, res) {
    Proxy.teacher.deleteTeacher(req.params.tno, function(err, response) {
        if (!err) {
            res.send({
                res: response
            });
        } else {
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.rewriteTech = function(req, res) {
    Proxy.teacher.rewriteTeacher(req.params.tno, req.body, function(err, result) {
        if (!err) {
            res.send({
                res: result
            });
        } else {
            console.log(err);
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.addCourse = function(req, res) {
    Proxy.course.addNewCourse(req.body.cno, req.body.cname, req.body.tno, req.body.hour, req.body.score, req.body.time, req.body.place, req.body.examtime, function(err, response) {
        if (err) {
            console.log('数据库错误：' + err);
            res.send({
                err: err
            });
        } else {
            res.send({
                res: response
            });
        }
    });
};

exports.getCourse = function(req, res) {
    Proxy.course.getAllCourse(function(err, response) {
        res.send({
            courses: response
        });
    });
};

exports.deleteCourse = function(req, res) {
    Proxy.course.deleteCourse(req.params.cno, function(err, response) {
        if (!err) {
            res.send({
                res: response
            });
        } else {
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.rewriteCourse = function(req, res) {
    Proxy.course.rewriteCourse(req.params.cno, req.body, function(err, result) {
        if (!err) {
            res.send({
                res: result
            });
        } else {
            console.log(err);
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.addSC = function(req, res) {
    Proxy.sc.checkSC(req.body.sno, function(err, response) {
        var courses = response;
        var score = 0;
        for (var i = 0; i < courses.length; i++) {
            score = score + courses[i].c_score;
        }
        Proxy.course.getOneCourse(req.body.cno, function(err, response) {
            score = score + response[0].c_score;
            if (score > 15) {
                res.send({
                    err: '超过15学分'
                });
            } else {
                Proxy.sc.addNewSC(req.body.sno, req.body.cno, function(err, response) {
                    if (err) {
                        console.log('数据库错误：' + err);
                        res.send({
                            err: err
                        });
                    } else {
                        res.send({
                            res: response
                        });
                    }
                });
            }
        });
    });
};

exports.getSC = function(req, res) {
    Proxy.sc.getAllSC(function(err, response) {
        res.send({
            scs: response
        });
    });
};

exports.getOneSC = function(req, res) {
    Proxy.sc.getOneSC(req.params.sno, function(err, response) {
        res.send({
            scs: response
        });
    });
};

exports.deleteSC = function(req, res) {
    Proxy.sc.deleteSC(req.params.sno, req.params.cno, function(err, response) {
        if (!err) {
            res.send({
                res: response
            });
        } else {
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.rewriteSC = function(req, res) {
    Proxy.sc.rewriteSC(req.params.sno, req.params.cno, function(err, result) {
        if (!err) {
            res.send({
                res: result
            });
        } else {
            console.log(err);
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.addGrade = function(req, res) {
    Proxy.grade.addNewGrade(req.body.sno, req.body.cno, req.body, function(err, response) {
        if (err) {
            console.log('数据库错误：' + err);
            res.send({
                err: err
            });
        } else {
            res.send({
                res: response
            });
        }
    });
};

exports.getGrade = function(req, res) {
    Proxy.grade.getAllGrade(function(err, response) {
        res.send({
            grades: response
        });
    });
};

exports.deleteGrade = function(req, res) {
    Proxy.grade.deleteGrade(req.params.sno, req.params.cno, function(err, response) {
        if (!err) {
            res.send({
                res: response
            });
        } else {
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};

exports.rewriteGrade = function(req, res) {
    Proxy.grade.rewriteGrade(req.params.sno, req.params.cno, req.body, function(err, result) {
        if (!err) {
            res.send({
                res: result
            });
        } else {
            console.log(err);
            res.send({
                err: 'error',
                msg: err
            });
        }
    });
};