CREATE DATABASE UTEZ;
USE UTEZ;

CREATE TABLE POSITION (
    ID BIGINT PRIMARY KEY AUTO_INCREMENT,
    POSITION VARCHAR(50) NOT NULL,
    DESCRIPTION VARCHAR(50) NULL
);

CREATE TABLE PERSONAL (
    ID BIGINT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(40) NOT NULL,
    LASTNAME VARCHAR(40) NULL,
    SALARY DOUBLE NOT NULL,
    BIRTHDAY DATE NOT NULL,
    POSITION_ID BIGINT NOT NULL,
    CONSTRAINT FK_PERSONAL_POSITION FOREIGN KEY (POSITION_ID) REFERENCES POSITION (ID)
);

CREATE TABLE USERS (
    ID BIGINT PRIMARY KEY AUTO_INCREMENT,
    EMAIL VARCHAR(50) NOT NULL,
    PASSWORD TEXT NULL,
    ROLE VARCHAR(20) NOT NULL,
    STATUS INT NOT NULL,
    PERSONAL_ID BIGINT NOT NULL,
    CONSTRAINT FK_USERS_PERSONAL FOREIGN KEY (PERSONAL_ID) REFERENCES PERSONAL (ID)
);

INSERT INTO POSITION (POSITION, DESCRIPTION) VALUES ('DIRECTOR', 'DIRECTOR OF THE COMPANY');
INSERT INTO POSITION (POSITION, DESCRIPTION) VALUES ('MANAGER', 'MANAGER OF THE COMPANY');  
INSERT INTO POSITION (POSITION, DESCRIPTION) VALUES ('DEVELOPER', 'DEVELOPER OF THE COMPANY');
INSERT INTO POSITION (POSITION, DESCRIPTION) VALUES ('TESTER', 'TESTER OF THE COMPANY');
INSERT INTO POSITION (POSITION, DESCRIPTION) VALUES ('DESIGNER', 'DESIGNER OF THE COMPANY');

INSERT INTO PERSONAL (NAME, LASTNAME, SALARY, BIRTHDAY, POSITION_ID) VALUES ('JUAN', 'PEREZ', 10000, '1990-01-01', 1);
INSERT INTO PERSONAL (NAME, LASTNAME, SALARY, BIRTHDAY, POSITION_ID) VALUES ('PEDRO', 'PEREZ', 10000, '1990-01-01', 2);
INSERT INTO PERSONAL (NAME, LASTNAME, SALARY, BIRTHDAY, POSITION_ID) VALUES ('JUAN', 'PEREZ', 10000, '1990-01-01', 3);
INSERT INTO PERSONAL (NAME, LASTNAME, SALARY, BIRTHDAY, POSITION_ID) VALUES ('JUAN', 'PEREZ', 10000, '1990-01-01', 4);

INSERT INTO USERS (EMAIL, PASSWORD, ROLE, STATUS, PERSONAL_ID) VALUES ('example1@domain.com', '123456', 'ADMIN', 1, 1);
INSERT INTO USERS (EMAIL, PASSWORD, ROLE, STATUS, PERSONAL_ID) VALUES ('example2@domain.com', '123456', 'ADMIN', 1, 1);
INSERT INTO USERS (EMAIL, PASSWORD, ROLE, STATUS, PERSONAL_ID) VALUES ('example3@domain.com', '123456', 'USER', 1, 1);
INSERT INTO USERS (EMAIL, PASSWORD, ROLE, STATUS, PERSONAL_ID) VALUES ('example4@domain.com', '123456', 'USER', 1, 1);