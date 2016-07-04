var Host = 'http://127.0.0.1:18080';

app.factory('DeptService', ['$http', function($http) {
	return {
		addNewDept: function(data) {
			return $http({
				method: 'POST',
				url: Host + '/department',
				data: data
			});
		},
		getAllDept: function() {
			return $http({
				method: 'GET',
				url: Host + '/departments'
			});
		},
		getOneDept: function(dno) {
			return $http({
				method: 'GET',
				url: Host + '/department/' + dno
			});
		},
		deleteDept: function(dept) {
			return $http({
				method: 'DELETE',
				url: Host + '/department/' + dept.d_no
			});
		},
		rewriteDept: function(data) {
			return $http({
				method: 'PUT',
				url: Host + '/department/' + data.dno,
				data: data
			});
		}
	};
}]);

app.factory('StudentService', ['$http', function($http) {
	return {
		addNewStu: function(data) {
			return $http({
				method: 'POST',
				url: Host + '/student',
				data: data
			});
		},
		getAllStu: function() {
			return $http({
				method: 'GET',
				url: Host + '/students'
			});
		},
		getOneStu: function(sno) {
			return $http({
				method: 'GET',
				url: Host + '/student/' + sno
			});
		},
		deleteStu: function(dept) {
			return $http({
				method: 'DELETE',
				url: Host + '/student/' + dept.s_no
			});
		},
		rewriteStu: function(data) {
			return $http({
				method: 'PUT',
				url: Host + '/student/' + data.sno,
				data: data
			});
		}
	};
}]);

app.factory('TeacherService', ['$http', function($http) {
	return {
		addNewTech: function(data) {
			return $http({
				method: 'POST',
				url: Host + '/teacher',
				data: data
			});
		},
		getAllTech: function() {
			return $http({
				method: 'GET',
				url: Host + '/teachers'
			});
		},
		getOneTech: function(tno) {
			return $http({
				method: 'GET',
				url: Host + '/teacher/' + tno
			});
		},
		deleteTech: function(data) {
			return $http({
				method: 'DELETE',
				url: Host + '/teacher/' + data.t_no
			});
		},
		rewriteTech: function(data) {
			return $http({
				method: 'PUT',
				url: Host + '/teacher/' + data.tno,
				data: data
			});
		}
	};
}]);

app.factory('CourseService', ['$http', function($http) {
	return {
		addNewCourse: function(data) {
			return $http({
				method: 'POST',
				url: Host + '/course',
				data: data
			});
		},
		getAllCourse: function() {
			return $http({
				method: 'GET',
				url: Host + '/courses'
			});
		},
		deleteCourse: function(data) {
			return $http({
				method: 'DELETE',
				url: Host + '/course/' + data.c_no
			});
		},
		rewriteCourse: function(data) {
			return $http({
				method: 'PUT',
				url: Host + '/course/' + data.cno,
				data: data
			});
		}
	};
}]);

app.factory('SCService', ['$http', function($http) {
	return {
		addNewSC: function(data) {
			return $http({
				method: 'POST',
				url: Host + '/sc',
				data: data
			});
		},
		getAllSC: function() {
			return $http({
				method: 'GET',
				url: Host + '/sc'
			});
		},
		getOneSC: function(sno) {
			return $http({
				method: 'GET',
				url: Host + '/onesc/' + sno
			});
		},
		deleteSC: function(data) {
			return $http({
				method: 'DELETE',
				url: Host + '/sc/' + data.s_no + '/' + data.c_no
			});
		},
		rewriteSC: function(data) {
			return $http({
				method: 'PUT',
				url: Host + '/sc/' + data.sno + '/' + data.cno
			});
		}
	};
}]);

app.factory('GradeService', ['$http', function($http) {
	return {
		addNewGrade: function(data) {
			return $http({
				method: 'POST',
				url: Host + '/grade',
				data: data
			});
		},
		getAllGrade: function() {
			return $http({
				method: 'GET',
				url: Host + '/grade'
			});
		},
		deleteGrade: function(data) {
			return $http({
				method: 'DELETE',
				url: Host + '/grade/' + data.s_no + '/' + data.c_no
			});
		},
		rewriteGrade: function(data) {
			return $http({
				method: 'PUT',
				url: Host + '/grade/' + data.sno + '/' + data.cno,
				data: data
			});
		}
	};
}]);

app.factory('DeptData', ['$http', function($http) {
	return {

	};
}]);

app.factory('StuData', ['$http', function($http) {
	return {

	};
}]);

app.factory('TechData', ['$http', function($http) {
	return {

	};
}]);

app.factory('CourseData', ['$http', function($http) {
	return {

	};
}]);