create database utez;
use utez;

create table position (
    id bigint primary key auto_increment,
    position varchar(50) not null,
    description varchar(50) null
);

create table personal (
    id bigint primary key auto_increment,
    name varchar(40) not null,
    lastname varchar(40) null,
    salary double not null,
    birthday date not null,
    position_id bigint not null,
    constraint fk_personal_position foreign key (position_id) references position (id)
);

create table users (
    id bigint primary key auto_increment,
    email varchar(50) not null,
    password text null,
    role varchar(20) not null,
    status int not null,
    personal_id bigint not null,
    constraint fk_users_personal foreign key (personal_id) references personal (id)
);

insert into position (position, description) values ('director', 'director of the company');
insert into position (position, description) values ('manager', 'manager of the company');  
insert into position (position, description) values ('developer', 'developer of the company');
insert into position (position, description) values ('tester', 'tester of the company');
insert into position (position, description) values ('designer', 'designer of the company');

insert into personal (name, lastname, salary, birthday, position_id) values ('juan', 'perez', 10000, '1990-01-01', 1);
insert into personal (name, lastname, salary, birthday, position_id) values ('pedro', 'perez', 10000, '1990-01-01', 2);
insert into personal (name, lastname, salary, birthday, position_id) values ('juan', 'perez', 10000, '1990-01-01', 3);
insert into personal (name, lastname, salary, birthday, position_id) values ('juan', 'perez', 10000, '1990-01-01', 4);

insert into users (email, password, role, status, personal_id) values ('example1@domain.com', '123456', 'admin', 1, 1);
insert into users (email, password, role, status, personal_id) values ('example2@domain.com', '123456', 'admin', 1, 1);
insert into users (email, password, role, status, personal_id) values ('example3@domain.com', '123456', 'user', 1, 1);
insert into users (email, password, role, status, personal_id) values ('example4@domain.com', '123456', 'user', 1, 1);
