drop table user;
drop table post;


create table user (
  id bigint primary key auto_increment,
  account varchar(100) not null unique,
  password varchar(100),
  username varchar(30),
  email varchar(50) not null unique,
  created datetime default current_timestamp,
  updated datetime default current_timestamp on update current_timestamp
) engine=InnodB default charset=utf8mb4;

create table post (
  id bigint primary key auto_increment,
  user_id bigint,
  title varchar(255),
  content text,
  created datetime default current_timestamp,
  updated datetime default current_timestamp on update current_timestamp
) engine=InnodB default charset=utf8mb4;