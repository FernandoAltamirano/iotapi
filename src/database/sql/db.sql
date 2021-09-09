/*MAKING THE DATABASE*/
CREATE DATABASE iot_database;

/*CREATE TABLE 'ATTENTIONS'*/
DROP TABLE IF EXISTS ATTENTIONS;

CREATE TABLE ATTENTIONS (
    id INT NOT NULL AUTO_INCREMENT,
    attention_date DATE NOT NULL,  
    hour TIME NOT NULL,
    environment_id INT NOT NULL,
    temperature INT(3) NOT NULL,
    smoke TINYINT(1) NOT NULL,
    CO INT(3) NOT NULL,
    PRIMARY KEY(id),
    KEY fk_environment_environments_id (environment_id),
    CONSTRAINT fk_environment_environments FOREIGN KEY (environment_id) REFERENCES ENVIRONMENTS(id) ON DELETE CASCADE ON UPDATE CASCADE
);

/*CREATE TABLE 'BUILDINGS'*/
DROP TABLE IF EXISTS BUILDINGS;

CREATE TABLE BUILDINGS (
    id INT NOT NULL AUTO_INCREMENT,
    district VARCHAR(100) NOT NULL,
    urbanization VARCHAR(100) NOT NULL,
    street VARCHAR(50) NOT NULL,
    lot INT(3) NOT NULL,
    PRIMARY KEY(id)
);

/*CREATE TABLE 'ENVIRONMENTS'*/
DROP TABLE IF EXISTS ENVIRONMENTS;

CREATE TABLE ENVIRONMENTS (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_number INT(3) NOT NULL,
    floor_number INT(2) NOT NULL, 
    building_id INT NOT NULL,
    PRIMARY KEY(id),
    KEY fk_building_buildings_id (building_id),
    CONSTRAINT fk_building_buildings FOREIGN KEY (building_id) REFERENCES BUILDINGS(id) ON DELETE CASCADE ON UPDATE CASCADE
);

/*CREATE TABLE 'IOT_DEVICES'*/
DROP TABLE IF EXISTS DEVICES;

CREATE TABLE DEVICES (
    id INT NOT NULL AUTO_INCREMENT,
    instalation_date DATE NOT NULL,
    status TINYINT(1) NOT NULL,
    model TINYINT(1) NOT NULL,
    serial_number VARCHAR(6) NOT NULL UNIQUE,
    user_id INT NOT NULL,
    environment_id INT NOT NULL,
    PRIMARY KEY(id),
    KEY fk_user_users_id (user_id),
    KEY fk_environment_environments_id (environment_id),
    CONSTRAINT fk_environment_environments FOREIGN KEY (environment_id) REFERENCES ENVIRONMENTS(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_user_users FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE ON UPDATE CASCADE
);

/*CREATE TABLE 'USERS'*/
DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    cellphone INT(9) NOT NULL UNIQUE, 
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);