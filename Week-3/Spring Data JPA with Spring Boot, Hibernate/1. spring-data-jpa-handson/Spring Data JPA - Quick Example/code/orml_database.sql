-- creating ormlearn database
create database ormlearn;
-- seeing is it created 
show databases;
-- using ormlearn
use ormlearn;
-- create country table
CREATE TABLE country (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(100)
);
-- inserting values into table
INSERT INTO country VALUES ('IN', 'India'), ('US', 'United States of America');
