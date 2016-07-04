/*学院表*/
CREATE TABLE department (
	d_no VARCHAR(6) PRIMARY KEY NOT NULL,
	d_name VARCHAR(10),
	d_describe VARCHAR(50) 
);

/*学生表*/
CREATE TABLE student (
	s_no VARCHAR(10) PRIMARY KEY NOT NULL,
	s_name VARCHAR(16) NOT NULL,
	s_sex VARCHAR(4) NOT NULL,
	s_birthday DATE,
	grade INT,
	d_no VARCHAR(6),
	FOREIGN KEY (d_no) REFERENCES department(d_no) 
);

/*教职工表*/
CREATE TABLE teacher (
	t_no VARCHAR(10) PRIMARY KEY NOT NULL,
	t_name VARCHAR(16) NOT NULL,
	t_sex VARCHAR(4) NOT NULL,
	t_birthday DATE,
	d_no VARCHAR(6),
	t_title VARCHAR(16),
	t_direction VARCHAR(16),
	FOREIGN KEY (d_no) REFERENCES department(d_no)
);



/*课程表*/
CREATE TABLE course (
	c_no VARCHAR(6) PRIMARY KEY NOT NULL,
	c_name VARCHAR(10) NOT NULL,
	t_no VARCHAR(10) NOT NULL,
	c_hour INT,
	c_score INT,
	c_time DATE,
	c_place VARCHAR(10),
	c_examtime DATE,
	FOREIGN KEY (t_no) REFERENCES teacher(t_no)
);

/*成绩表*/
CREATE TABLE grade(
	s_no VARCHAR(10),
	c_no VARCHAR(6),
	common_grade INT,
	exam_grade INT,
	final_grade INT,
	PRIMARY KEY (s_no, c_no),
	FOREIGN KEY (s_no) REFERENCES student(s_no),
	FOREIGN KEY (c_no) REFERENCES course(c_no)
);

/*学生选课表*/
CREATE TABLE student_course (
	s_no VARCHAR(10),
	c_no VARCHAR(6),
	PRIMARY KEY (s_no, c_no),
	FOREIGN KEY (s_no) REFERENCES student(s_no),
	FOREIGN KEY (c_no) REFERENCES course(c_no)
);