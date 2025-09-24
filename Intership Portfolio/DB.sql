create database internbridge;
use internbridge;

alter table hr_email_entity add column admin_ boolean;
alter table user_table rename column hr_email_id to business_email_id ;
ALTER TABLE user_table ADD COLUMN company_id INT REFERENCES company_profile(id);
alter table user_table add column role enum('ADMIN', 'CO_ADMIN') Default Null;
alter table user_table add column status enum('PENDING', 'APPROVED', 'REJECTED') Default 'PENDING';
delete from user_table where is_verified = 0;
alter table user_table drop column admin_;

select * from user_table;
truncate user_table;

CREATE TABLE demo_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    business_email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    company_name VARCHAR(255),
    company_size VARCHAR(50),
    job_title VARCHAR(100)
);

select * from demo_requests;

alter table company_profile add column company_domain varchar(100);
alter table company_profile drop column co_admin;
select * from company_profile;
