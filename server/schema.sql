CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int,
  Username char(20),
  content char(200),
  roomname char(20),
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  ID int,
  Username char(20),
  PRIMARY KEY (ID)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

