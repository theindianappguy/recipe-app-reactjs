/* 
 - Tạo database nếu nó không tồn tại
 - Nếu nó tồn tại rồi thì tự động xóa rồi tạo mới
*/ 
DROP DATABASE LinuxTeamDB;
CREATE DATABASE IF NOT EXISTS LinuxTeamDB;

-- `USE` trước khi CREATE TABLE
USE LinuxTeamDB;

-- Bảng USER - dành cho người dùng
CREATE TABLE IF NOT EXISTS `user` (
	ID 				INT 			NOT NULL 	PRIMARY KEY AUTO_INCREMENT, 
    email 			VARCHAR(50) 	NOT NULL 	UNIQUE,
    username 		VARCHAR(50) 	NOT NULL, 
    `password`		VARCHAR(30) 	NOT NULL,
	avatar			LONGBLOB 		NULL, -- không bắt buộc
    phone 			VARCHAR(20) 	NULL, -- -- không bắt buộc
    birth_date 		DATE 			NULL, -- không bắt buộc
    gender 			ENUM('MALE','FEMALE') NULL  -- không bắt buộc
);

-- Bảng Công thức Món ăn (Lấy từ màn hình Tạo Thực đơn)
CREATE TABLE IF NOT EXISTS `recipe` (
	ID 				INT 			NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` 			VARCHAR(50) 	NOT NULL,
    `description` 	LONGTEXT 		NOT NULL,
    `image` 		LONGBLOB 		NOT NULL,
    `formula` 		LONGTEXT 		NOT NULL,
    `note`  		LONGTEXT 		NOT NULL,
    creator 		INT NOT NULL,
    `price` 		INT NOT NULL,
		vote 		INT NOT NULL,
    views   		INT NOT NULL,
    FOREIGN KEY (creator) REFERENCES `user`(ID)
);


-- Bảng Nguyên liệu (lấy từ trên FE)
CREATE TABLE IF NOT EXISTS `raw_material` (
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL, 
    `unit` VARCHAR(30) NOT NULL
);


-- Bảng chung giữa Thực đơn - Nguyên liệu
CREATE TABLE IF NOT EXISTS recipe_raw_material (
	ID 					INT NOT NULL,
    recipe_id 			INT NOT NULL,
    raw_material_id 	INT NOT NULL,
    amount 				INT NOT NULL,
    PRIMARY KEY (recipe_id, raw_material_id),
    FOREIGN KEY (recipe_id) REFERENCES `recipe`(ID),
    FOREIGN KEY (raw_material_id)  REFERENCES `raw_material`(ID)
);

-- Bảng vote (đánh giá)
CREATE TABLE IF NOT EXISTS `voting` (
	ID 			INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    recipe_id 	INT NOT NULL, 
    user_id 	INT NOT NULL,
    amount_star INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES `recipe`(ID),
    FOREIGN KEY (user_id) 	REFERENCES `user`(ID)
);

