/*CREATING THE STORED PROCEDURE THAT ADDS NEW DATA IN THE TABLES BUILDINGS, ENVIRONMENTS AND DEVICES*/
USE iot_database;

DELIMITER //
CREATE PROCEDURE ADD_DATA_IN_B_E_D ( 
    IN b_district VARCHAR(100), 
    IN b_urbanization VARCHAR(100), 
    IN b_street VARCHAR(50), 
    IN b_lot TINYINT(2), 
    IN e_name VARCHAR(100), 
    IN e_department_number TINYINT(3), 
    IN e_floor_number TINYINT(2), 
    IN e_building_id INT(11), 
    IN d_instalation_date DATE, 
    IN d_model TINYINT(1), 
    IN d_serial_number VARCHAR(6), 
    IN d_user_id INT(11), 
    IN d_environment_id INT(11) ) 

    BEGIN 
        INSERT INTO buildings VALUES (b_district, b_urbanization, b_street, b_lot); 
        INSERT INTO environments VALUES (e_name, e_department_number, e_floor_number, e_building_id); 
        INSERT INTO devices VALUES (d_instalation_date, d_model, d_serial_number, d_user_id, d_environment_id); 
    END
//

/*CREATING THE STORED PROCEDURE THAT ADDS NEW DATA IN THE TABLES ENVIRONMENTS AND DEVICES*/
USE iot_database;

DELIMITER //
CREATE PROCEDURE ADD_DATA_IN_E_D ( 
    IN e_name VARCHAR(100), 
    IN e_department_number TINYINT(3), 
    IN e_floor_number TINYINT(2), 
    IN e_building_id INT(11), 
    IN d_instalation_date DATE, 
    IN d_model TINYINT(1), 
    IN d_serial_number VARCHAR(6), 
    IN d_user_id INT(11), 
    IN d_environment_id INT(11) ) 

    BEGIN 
        INSERT INTO environments VALUES (e_name, e_department_number, e_floor_number, e_building_id); 
        INSERT INTO devices VALUES (d_instalation_date, d_model, d_serial_number, d_user_id, d_environment_id); 
    END
//

/*CREATING THE STORED PROCEDURE THAT ADDS OR UPDATES DATA IN THE TABLE ATTENTIONS*/
USE iot_database;

DELIMITER //
CREATE PROCEDURE ADD_OR_UPDATE_NEW_ATTENTION ( 
    IN a_id INT(11), 
    IN a_attention_date DATE, 
    IN a_status TINYINT(1), 
    IN a_environment_id INT(11), 
    IN a_temperature TINYINT(3), 
    IN a_smoke TINYINT(1), 
    IN a_CO TINYINT(3) )

    BEGIN 
        IF a_id = 0 THEN 
            INSERT INTO attentions VALUES (a_attention_date, a_status, a_environment_id, a_temperature, a_smoke, a_CO); 
        ELSE
            UPDATE attentions SET status = a_status, temperature = a_temperature, smoke = a_smoke, CO = a_CO WHERE id = a_id;  
        END IF;
    END
//





































































