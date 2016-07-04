var app = angular.module('STU', ['ui.router', 'ngMaterial', 'ngMessages']);


app.config(function($stateProvider, $urlRouterProvider) {
    //默认指向 index
    $urlRouterProvider.otherwise("/index/login");
    //配置状态路由
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: "/views/Index/index.html",
            controller: 'IndexCtrl',
        })
        .state('index.login', {
            url: '/login',
            templateUrl: '/views/Index/login.html',
            controller: 'LeaderCtrl'
        })
        .state('student', {
            url: '/student',
            templateUrl: '/views/Student/index.html',
            controller: 'StudentCtrl'
        })
        .state('student.list', {
            url: '/student',
            templateUrl: '/views/Student/student.html',
            controller: 'StudentCtrl'
        })
        .state('student.add', {
            url: '/add',
            templateUrl: '/views/Student/addstu.html',
            controller: 'StudentCtrl'
        })
        .state('student.rewrite', {
            url: '/rewrite',
            templateUrl: '/views/Student/rewrite.html',
            controller: 'RewriteStuCtrl'
        })
        .state('department', {
            url: '/department',
            templateUrl: '/views/Department/index.html'
        })
        .state('department.list', {
            url: '/list',
            templateUrl: '/views/Department/department.html',
            controller: 'DepartmentCtrl'
        })
        .state('department.add', {
            url: '/add',
            templateUrl: '/views/Department/newdept.html',
            controller: 'DepartmentCtrl'
        })
        .state('department.rewrite', {
            url: '/rewrite',
            templateUrl: '/views/Department/rewrite.html',
            controller: 'RewriteDeptCtrl'
        })
        .state('teacher', {
            url: '/teacher',
            templateUrl: '/views/Teacher/index.html'
        })
        .state('teacher.list', {
            url: '/list',
            templateUrl: '/views/Teacher/list.html',
            controller: 'TeacherCtrl'
        })
        .state('teacher.add', {
            url: '/add',
            templateUrl: '/views/Teacher/add.html',
            controller: 'TeacherCtrl'
        })
        .state('teacher.rewrite', {
            url: '/rewrite',
            templateUrl: '/views/Teacher/rewrite.html',
            controller: 'RewriteTeacherCtrl'
        })
        .state('course', {
            url: '/course',
            templateUrl: '/views/Course/index.html'
        })
        .state('course.list', {
            url: '/list',
            templateUrl: '/views/Course/list.html',
            controller: 'CourseCtrl'
        })
        .state('course.add', {
            url: '/add',
            templateUrl: '/views/Course/add.html',
            controller: 'CourseCtrl'
        })
        .state('course.rewrite', {
            url: '/rewrite',
            templateUrl: '/views/Course/rewrite.html',
            controller: 'RewriteCourseCtrl'
        })
        .state('sc', {
            url: '/sc',
            templateUrl: '/views/SC/index.html'
        })
        .state('sc.list', {
            url: '/list',
            templateUrl: '/views/SC/list.html',
            controller: 'SCCtrl'
        })
        .state('sc.stulist', {
            url: '/stu/:s_no',
            templateUrl: '/views/SC/list.html',
            controller: 'SCCtrl'
        })
        .state('sc.add', {
            url: '/add',
            templateUrl: '/views/SC/add.html',
            controller: 'SCCtrl'
        })
        .state('sc.rewrite', {
            url: '/rewrite/:sno/:cno',
            templateUrl: '/views/SC/rewrite.html',
            controller: 'SCCtrl'
        })
        .state('grade', {
            url: '/grade',
            templateUrl: '/views/Grade/index.html'
        })
        .state('grade.list', {
            url: '/list',
            templateUrl: '/views/Grade/list.html',
            controller: 'GradeCtrl'
        })
        .state('grade.add', {
            url: '/add',
            templateUrl: '/views/Grade/add.html',
            controller: 'GradeCtrl'
        })
        .state('grade.rewrite', {
            url: '/rewrite/:sno/:cno/:cgrade/:egrade/:fgrade',
            templateUrl: '/views/Grade/rewrite.html',
            controller: 'GradeCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: '/views/Search/index.html'
        })
        .state('search.search', {
            url: '/search',
            templateUrl: '/views/Search/search.html'
        })
        .state('search.department', {
            url: '/department/:dno',
            templateUrl: '/views/Search/department.html',
            controller: 'DepartmentCtrl'
        })
        .state('search.student', {
            url: '/student/:sno',
            templateUrl: '/views/Search/student.html',
            controller: 'StudentCtrl'
        })
        .state('search.teacher', {
            url: '/teacher/:tno',
            templateUrl: '/views/Search/teacher.html',
            controller: 'TeacherCtrl'
        });
});