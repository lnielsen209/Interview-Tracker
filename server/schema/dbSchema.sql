DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS job_seekers CASCADE;
DROP TABLE IF EXISTS steps CASCADE;
DROP TABLE IF EXISTS app_statuses CASCADE;


CREATE TABLE app_statuses (
  	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	app_status varchar(255) NOT NULL
);

CREATE TABLE job_seekers (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	cur_salary integer,
	dob DATE
);

CREATE TABLE applications (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	job_seeker_id INT REFERENCES job_seekers(id) ON DELETE CASCADE,
	company varchar(255) NOT NULL,
	job_title varchar(255) NOT NULL,
	how_applied varchar(255),
	date_applied DATE,
	"location" varchar(255),
	found_by varchar(255) NOT NULL,
	notes varchar(255),
	app_status INT REFERENCES app_statuses(id) ON DELETE CASCADE
); 


CREATE TABLE steps (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	app_id INT REFERENCES applications(id) ON DELETE CASCADE,
	date DATE NOT NULL,
	step_type varchar(255) NOT NULL,
	contact_name varchar(255) NOT NULL,
	contact_role varchar(255) NOT NULL,
	contact varchar(255) NOT NULL,
	notes varchar(255)
);


INSERT INTO app_statuses (app_status) VALUES ('Not Applied');
INSERT INTO app_statuses (app_status) VALUES ('Applied');
INSERT INTO app_statuses (app_status) VALUES ('Phone Screening');
INSERT INTO app_statuses (app_status) VALUES ('Technical Interview');


