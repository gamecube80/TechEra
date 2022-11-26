create table employees
(
   id integer not null,
   first_name varchar(255) not null, 
   last_name varchar(255) not null,
   age integer not null,
   email_address varchar(255) not null,
   days_worked integer not null,
   salary integer not null,
   bonus integer not null,
   primary key(id)
);