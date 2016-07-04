app.controller('IndexCtrl', ['$scope', function($scope) {

}]);

app.controller('LeaderCtrl', ['$scope', 'StudentService', '$state', '$rootScope', function($scope, StudentService, $state, $rootScope) {
    $scope.doLogin = function() {
        var sno = $scope.sno;
        if (sno === 'admin') {
            sessionStorage.setItem('user', 'admin');
            $scope.user = sno;
            $state.go('index', {}, {
                reload: true
            });
        } else {
            StudentService.getOneStu(sno)
                .success(function(data, status) {
                    if (data.stu.length) {
                        sessionStorage.setItem('user', sno);
                        $state.go('search.student', {
                            sno: sno
                        });
                        $scope.user = sno;
                    } else {
                        alert('登录失败');
                        return false;
                    }
                });
        }
    };

    $scope.doLogout = function() {
        sessionStorage.removeItem('user');
        $scope.user = null;
        $state.go('index.login');
    };

    $rootScope.$on('$stateChangeStart', function() {
        updateLoginState();
    });
    var updateLoginState = function() {
        $scope.user = sessionStorage.user;
    };
    $scope.user = sessionStorage.user;
}]);

app.controller('DepartmentCtrl', ['$scope', 'DeptService', 'DeptData', '$state', '$stateParams', function($scope, DeptService, DeptData, $state, $stateParams) {
    DeptService.getAllDept()
        .success(function(data, status) {
            $scope.depts = data.depts;
        });
    $scope.user = sessionStorage.user;
    $scope.addNewDept = function() {
        var data = {
            dno: $scope.dno,
            dname: $scope.dname,
            describe: $scope.describe
        };
        DeptService.addNewDept(data)
            .success(function(data, status) {
                if (!data.err) {
                    alert('添加成功');
                    $state.go('department.list');
                } else {
                    alert('添加失败');
                }
            });
    };

    if ($stateParams.dno) {
        DeptService.getOneDept($stateParams.dno)
            .success(function(data, status) {
                $scope.stus = data.stus;
            });
    }

    $scope.deleteDept = function(dept) {
        if (confirm('确定要删除吗？')) {
            DeptService.deleteDept(dept)
                .success(function(data, status) {
                    if (!data.err) {
                        alert('删除成功');
                        $state.go('department.list', {}, {
                            reload: true
                        });
                    } else {
                        alert('删除失败');
                    }
                });
        } else {
            return false;
        }
    };

    $scope.rewriteDept = function(dept) {
        DeptData.dno = dept.d_no;
        DeptData.dname = dept.d_name;
        DeptData.describe = dept.d_describe;
        $state.go('department.rewrite');
    };
}]);

app.controller('RewriteDeptCtrl', ['$scope', 'DeptData', 'DeptService', '$state', function($scope, DeptData, DeptService, $state) {
    $scope.dno = DeptData.dno;
    $scope.dname = DeptData.dname;
    $scope.describe = DeptData.describe;
    $scope.rewriteDept = function() {
        var data = {
            dno: $scope.dno,
            dname: $scope.dname,
            describe: $scope.describe
        };
        DeptService.rewriteDept(data)
            .success(function(data, status) {
                if (!data.err) {
                    alert('修改成功');
                    $state.go('department.list');
                } else {
                    alert('修改失败');
                }
            });
    };
}]);

app.controller('StudentCtrl', ['$scope', 'StudentService', '$state', 'StuData', 'DeptService', '$stateParams',
    function($scope, StudentService, $state, StuData, DeptService, $stateParams) {
        $scope.user = sessionStorage.user;
        StudentService.getAllStu()
            .success(function(data, status) {
                $scope.stus = data.stus;
            });
        DeptService.getAllDept()
            .success(function(data, status) {
                $scope.depts = data.depts;
            });

        if ($stateParams.sno) {
            StudentService.getOneStu($stateParams.sno)
                .success(function(data, status) {
                    $scope.onestus = data.stu;
                });
        }

        $scope.addNewStu = function() {
            var data = {
                sno: $scope.sno,
                sname: $scope.sname,
                sex: $scope.sex,
                birthday: $scope.birthday,
                score: $scope.grade,
                dno: $scope.dno
            };
            console.log(data);
            StudentService.addNewStu(data)
                .success(function(data, status) {
                    if (!data.err) {
                        alert('添加成功');
                        $state.go('student.list');
                    } else {
                        alert('添加失败');
                    }
                });
        };

        $scope.deleteStu = function(dept) {
            if (confirm('确定要删除吗？')) {
                StudentService.deleteStu(dept)
                    .success(function(data, status) {
                        if (!data.err) {
                            alert('删除成功');
                            $state.go('student.list', {}, {
                                reload: true
                            });
                        } else {
                            alert('删除失败');
                        }
                    });
            } else {
                return false;
            }
        };

        $scope.rewriteStu = function(stu) {
            StuData.sno = stu.s_no;
            StuData.sname = stu.s_name;
            StuData.sex = stu.s_sex;
            StuData.birthday = stu.s_birthday;
            StuData.score = stu.grade;
            StuData.dno = stu.d_no;
            $state.go('student.rewrite');
        };
    }
]);

app.controller('RewriteStuCtrl', ['$scope', 'StuData', 'StudentService', '$state', 'DeptService', function($scope, StuData, StudentService, $state, DeptService) {
    $scope.sno = StuData.sno;
    $scope.sname = StuData.sname;
    $scope.sex = StuData.sex;
    $scope.birthday = new Date(StuData.birthday);
    $scope.score = StuData.score;
    $scope.dno = StuData.dno;
    DeptService.getAllDept()
        .success(function(data, status) {
            $scope.depts = data.depts;
        });
    $scope.rewriteStu = function() {
        var data = {
            sno: $scope.sno,
            sname: $scope.sname,
            sex: $scope.sex,
            birthday: $scope.birthday,
            score: $scope.score,
            dno: $scope.dno
        };
        StudentService.rewriteStu(data)
            .success(function(data, status) {
                if (!data.err) {
                    alert('修改成功');
                    $state.go('student.list');
                } else {
                    alert('修改失败');
                }
            });
    };
}]);

app.controller('TeacherCtrl', ['$scope', 'TeacherService', '$state', 'TechData', 'DeptService', '$stateParams',
    function($scope, TeacherService, $state, TechData, DeptService, $stateParams) {
        $scope.user = sessionStorage.user;
        TeacherService.getAllTech()
            .success(function(data, status) {
                $scope.teachers = data.teachers;
            });
        DeptService.getAllDept()
            .success(function(data, status) {
                $scope.depts = data.depts;
            });

        if ($stateParams.tno) {
            TeacherService.getOneTech($stateParams.tno)
                .success(function(data, status) {
                    $scope.oneteachers = data.teacher;
                });
        }

        $scope.addNewTech = function() {
            var data = {
                tno: $scope.tno,
                tname: $scope.tname,
                sex: $scope.sex,
                birthday: $scope.birthday,
                dno: $scope.dno,
                title: $scope.title,
                direction: $scope.direction
            };
            TeacherService.addNewTech(data)
                .success(function(data, status) {
                    if (!data.err) {
                        alert('添加成功');
                        $state.go('teacher.list');
                    } else {
                        alert('添加失败');
                    }
                });
        };

        $scope.deleteTech = function(dept) {
            if (confirm('确定要删除吗？')) {
                TeacherService.deleteTech(dept)
                    .success(function(data, status) {
                        if (!data.err) {
                            alert('删除成功');
                            $state.go('teacher.list', {}, {
                                reload: true
                            });
                        } else {
                            alert('删除失败');
                        }
                    });
            } else {
                return false;
            }
        };

        $scope.rewriteTech = function(teacher) {
            TechData.tno = teacher.t_no;
            TechData.tname = teacher.t_name;
            TechData.sex = teacher.t_sex;
            TechData.birthday = teacher.t_birthday;
            TechData.dno = teacher.d_no;
            TechData.title = teacher.t_title;
            TechData.direction = teacher.t_direction;

            $state.go('teacher.rewrite');
        };
    }
]);

app.controller('RewriteTeacherCtrl', ['$scope', 'TechData', 'TeacherService', '$state', 'DeptService', function($scope, TechData, TeacherService, $state, DeptService) {
    $scope.tno = TechData.tno;
    $scope.tname = TechData.tname;
    $scope.sex = TechData.sex;
    $scope.birthday = new Date(TechData.birthday);
    $scope.dno = TechData.dno;
    $scope.title = TechData.title;
    $scope.direction = TechData.direction;
    DeptService.getAllDept()
        .success(function(data, status) {
            $scope.depts = data.depts;
        });
    $scope.rewriteTech = function() {
        var data = {
            tno: $scope.tno,
            tname: $scope.tname,
            sex: $scope.sex,
            birthday: $scope.birthday,
            dno: $scope.dno,
            title: $scope.title,
            direction: $scope.direction
        };
        TeacherService.rewriteTech(data)
            .success(function(data, status) {
                if (!data.err) {
                    alert('修改成功');
                    $state.go('teacher.list');
                } else {
                    alert('修改失败');
                }
            });
    };
}]);

app.controller('CourseCtrl', ['$scope', 'CourseService', '$state', 'CourseData', 'TeacherService', function($scope, CourseService, $state, CourseData, TeacherService) {
    CourseService.getAllCourse()
        .success(function(data, status) {
            $scope.courses = data.courses;
        });
    TeacherService.getAllTech()
        .success(function(data, status) {
            $scope.teachers = data.teachers;
        });
    $scope.user = sessionStorage.user;
    $scope.addNewCourse = function() {
        var data = {
            cno: $scope.cno,
            cname: $scope.cname,
            tno: $scope.tno,
            hour: $scope.hour,
            score: $scope.score,
            time: $scope.time,
            place: $scope.place,
            examtime: $scope.examtime
        };
        console.log(data);
        CourseService.addNewCourse(data)
            .success(function(data, status) {
                if (!data.err) {
                    alert('添加成功');
                    $state.go('course.list');
                } else {
                    alert('添加失败');
                }
            });
    };

    $scope.deleteCourse = function(dept) {
        if (confirm('确定要删除吗？')) {
            CourseService.deleteCourse(dept)
                .success(function(data, status) {
                    if (!data.err) {
                        alert('删除成功');
                        $state.go('course.list', {}, {
                            reload: true
                        });
                    } else {
                        alert('删除失败');
                    }
                });
        } else {
            return false;
        }
    };

    $scope.rewriteCourse = function(course) {
        CourseData.cno = course.c_no;
        CourseData.cname = course.c_name;
        CourseData.tno = course.t_no;
        CourseData.hour = course.c_hour;
        CourseData.score = course.c_score;
        CourseData.time = course.c_time;
        CourseData.place = course.c_place;
        CourseData.examtime = course.c_examtime;
        $state.go('course.rewrite');
    };
}]);

app.controller('RewriteCourseCtrl', ['$scope', 'CourseData', 'CourseService', '$state', 'TeacherService', function($scope, CourseData, CourseService, $state, TeacherService) {
    $scope.cno = CourseData.cno;
    $scope.cname = CourseData.cname;
    $scope.tno = CourseData.tno;
    $scope.hour = CourseData.hour;
    $scope.score = CourseData.score;
    $scope.time = new Date(CourseData.time);
    $scope.place = CourseData.place;
    $scope.examtime = new Date(CourseData.examtime);
    TeacherService.getAllTech()
        .success(function(data, status) {
            $scope.teachers = data.teachers;
        });
    $scope.rewriteCourse = function() {
        var data = {
            cno: $scope.cno,
            cname: $scope.cname,
            tno: $scope.tno,
            hour: $scope.hour,
            score: $scope.score,
            time: $scope.time,
            place: $scope.place,
            examtime: $scope.examtime
        };
        CourseService.rewriteCourse(data)
            .success(function(data, status) {
                if (!data.err) {
                    alert('修改成功');
                    $state.go('course.list');
                } else {
                    alert('修改失败');
                }
            });
    };
}]);

app.controller('SCCtrl', ['$scope', 'SCService', 'CourseService', 'StudentService', '$state', '$stateParams', function($scope, SCService, CourseService, StudentService, $state, $stateParams) {


    if ($stateParams.s_no) {
        SCService.getOneSC($stateParams.s_no)
            .success(function(data, status) {
                $scope.scs = data.scs;
            });
    } else {
        SCService.getAllSC()
            .success(function(data, status) {
                $scope.scs = data.scs;
            });
    }
    CourseService.getAllCourse()
        .success(function(data, status) {
            $scope.courses = data.courses;
        });
    StudentService.getAllStu()
        .success(function(data, status) {
            $scope.stus = data.stus;
        });
    $scope.user = sessionStorage.user;
    if ($stateParams.cno) {
        $scope.sno = $stateParams.sno;
        $scope.cno = $stateParams.cno;
        $scope.rewriteSC = function() {
            var data = {
                sno: $scope.sno,
                cno: $scope.cno
            };
            SCService.rewriteSC(data)
                .success(function(data, status) {
                    if (!data.err) {
                        alert('修改成功');
                        $state.go('sc.list', {}, {
                            reload: true
                        });
                    } else {
                        alert('修改失败');
                    }
                });
        };
    }
    $scope.addNewSC = function() {
        var data = {
            sno: $scope.sno,
            cno: $scope.cno
        };
        SCService.addNewSC(data)
            .success(function(data, status) {
                if (!data.err) {
                    alert('添加成功');
                    $state.go('sc.list', {}, {
                        reload: true
                    });
                } else {
                    alert(data.err);
                }
            });
    };
    $scope.deleteSC = function(sc) {
        if (confirm('确定要删除吗？')) {
            SCService.deleteSC(sc)
                .success(function(data, status) {
                    if (!data.err) {
                        alert('删除成功');
                        $state.go('sc.list', {}, {reload: true});
                    } else {
                        alert('删除失败');
                    }
                });
        }
    };
}]);

app.controller('GradeCtrl', ['$scope', 'StudentService', 'CourseService', 'GradeService', '$state', 'SCService', '$stateParams',
    function($scope, StudentService, CourseService, GradeService, $state, SCService, $stateParams) {
        CourseService.getAllCourse()
            .success(function(data, status) {
                $scope.courses = data.courses;
            });
        SCService.getAllSC()
            .success(function(data, status) {
                $scope.scs = data.scs;
            });
        StudentService.getAllStu()
            .success(function(data, status) {
                $scope.stus = data.stus;
            });
        GradeService.getAllGrade()
            .success(function(data, status) {
                $scope.grades = data.grades;
            });
        $scope.user = sessionStorage.user;
        if ($stateParams.sno) {
            $scope.sno = $stateParams.sno;
            $scope.cno = $stateParams.cno;
            $scope.cgrade = $stateParams.cgrade;
            $scope.egrade = $stateParams.egrade;
            $scope.fgrade = $stateParams.fgrade;
            $scope.rewriteGrade = function() {
                var data = {
                    sno: $scope.sno,
                    cno: $scope.cno,
                    cgrade: $scope.cgrade,
                    egrade: $scope.egrade,
                    fgrade: $scope.fgrade
                };
                GradeService.rewriteGrade(data)
                    .success(function(data, status) {
                        if (!data.err) {
                            alert('修改成功');
                            $state.go('grade.list');
                        } else {
                            alert('修改失败');
                        }
                    });
            };
        }
        $scope.addNewGrade = function() {
            var data = {
                sno: $scope.sno,
                cno: $scope.cno,
                cgrade: $scope.cgrade,
                egrade: $scope.egrade,
                fgrade: $scope.fgrade
            };
            GradeService.addNewGrade(data)
                .success(function(data, status) {
                    if (!data.err) {
                        alert('添加成功');
                        $state.go('grade.list');
                    } else {
                        alert('添加失败');
                    }
                });
        };

        $scope.deleteGrade = function(grade) {
            if (confirm('确定要删除吗？')) {
                GradeService.deleteGrade(grade)
                    .success(function(data, status) {
                        if (!data.err) {
                            alert('删除成功');
                            $state.go('grade.list', {}, {
                                reload: true
                            });
                        } else {
                            alert('删除失败');
                        }
                    });
            }

        };
    }
]);