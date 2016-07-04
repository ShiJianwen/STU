use student
/*院系表*/
create table department
(	dno char(6) primary key,
	dept_name char(20) not null,
	header char(8),
);

/*专业信息表*/
create table speciality
(	spno char(8) primary key,
	dno char(6) not null,
	spname char(20) not null,
	foreign key (dno) references department(dno)
);

/*学生信息表*/
create table student
(	s_no char(8) primary key,
	sname char(8) not null,
	sex char(2),
	sbirthday smalldatetime,
	dno char(6),
	spno char(8),
	class_no char(4),
	foreign key (dno) references department(dno),
	foreign key (spno) references speciality(spno)
);
/*课程类型表*/
create table coursetype
(
	ct_no tinyint primary key,
	ct_name char(15) not null
);
/*课程信息表*/
create table course
(	cno char(10) primary key,
	cname char(20) not null,
	spno char(8),
	ctno tinyint,
	lecture tinyint,
	experiment tinyint,
	semester tinyint,
	credit tinyint,
	foreign key (spno) references speciality(spno),
	foreign key (ctno) references coursetype(ct_no)
);

/*学生选课成绩表*/
create table student_course
(	s_no char(8),
	tcid smallint,
	score tinyint,
	primary key
	(s_no,
	tcid),
	foreign key (s_no) references student(s_no)
);



/*教师职称表*/
create table profession
(
	p_no char(2) primary key,
	title char(10)
);


/*教师信息表*/
create table teacher
(	t_no char(8) primary key,
	t_name char(8) not null,
	t_sex char(2),
	t_birthday smalldatetime,
	dno char(6),
	tech_title char(2),
	foreign key (dno) references department(dno),
	foreign key (tech_title) references profession(p_no)
);

/*教师上课课表*/
create table teacher_course
(	tcid smallint primary key,
	t_no char(8),
	spno char(8),
	class_no char(4),
	cno char(10) not null,
	semester char(6),
	schoolyear char(10),
	foreign key (t_no) references teacher(t_no),
	foreign key (spno) references speciality(spno),
	foreign key (cno) references course(cno),
	
);

/*班级表*/
create table class
(	spno char(8),
	class_no char(4),
	header char(8),
	primary key
	(spno,class_no),
	foreign key (spno) references speciality(spno)
);

/*奖励记录信息表*/
create table reward
(
	reward_id char(10) primary key,
	reward_sno char(8),
	reward_time datetime,
	reward_reason char(100),
	foreign key (reward_sno) references student(s_no),
);

/*处罚记录信息表*/
create table punishment
(
	punishment_id char(10) primary key,
	punnishmen_sno char(8),
	punishment_time datetime,
	punishment_reason char(100),
	foreign key (punnishmen_sno) references student(s_no),
);



