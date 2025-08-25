-- Tạo database và các bảng
DROP DATABASE IF EXISTS food_ordering;
CREATE DATABASE food_ordering;
USE food_ordering;

-- Bảng người dùng
CREATE TABLE `user` (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Bảng nhà hàng
CREATE TABLE restaurant (
    res_id INT AUTO_INCREMENT PRIMARY KEY,
    res_name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    `desc` TEXT
);

-- Bảng loại món ăn
CREATE TABLE food_type (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(255) NOT NULL
);

-- Bảng món ăn
CREATE TABLE food (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    price FLOAT NOT NULL,
    `desc` TEXT,
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

-- Bảng món ăn kèm
CREATE TABLE sub_food (
    sub_id VARCHAR(255) PRIMARY KEY,
    sub_name VARCHAR(255) NOT NULL,
    sub_price FLOAT NOT NULL,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

-- Bảng đơn hàng
CREATE TABLE `order` (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    food_id INT,
    amount INT NOT NULL,
    code VARCHAR(255),
    art_sub_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES `user`(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id),
    FOREIGN KEY (art_sub_id) REFERENCES sub_food(sub_id)
);

-- Bảng like nhà hàng 
CREATE TABLE like_res (
    user_id INT,
    res_id INT,
    date_like DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, res_id),
    FOREIGN KEY (user_id) REFERENCES `user`(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

-- Bảng đánh giá nhà hàng 
CREATE TABLE rate_res (
    user_id INT,
    res_id INT,
    amount INT,
    date_rate DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, res_id),
    FOREIGN KEY (user_id) REFERENCES `user`(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

-- Chèn dữ liệu mẫu 
INSERT INTO `user` (full_name, email, password) VALUES
('Nguyễn Văn A', 'a@example.com', 'pass1'),
('Trần Thị B', 'b@example.com', 'pass2'),
('Lê Văn C', 'c@example.com', 'pass3'),
('Phạm Thị D', 'd@example.com', 'pass4'),
('Hoàng Văn E', 'e@example.com', 'pass5'),
('Người không hoạt động', 'inactive@example.com', 'pass6');

INSERT INTO restaurant (res_name, image, `desc`) VALUES
('Nhà hàng A', 'img_a.jpg', 'Mô tả nhà hàng A'),
('Nhà hàng B', 'img_b.jpg', 'Mô tả nhà hàng B'),
('Nhà hàng C', 'img_c.jpg', 'Mô tả nhà hàng C');

INSERT INTO food_type (type_name) VALUES
('Món chính'), ('Món phụ'), ('Đồ uống');

INSERT INTO food (food_name, image, price, `desc`, type_id) VALUES
('Phở', 'pho.jpg', 50000, 'Phở bò', 1),
('Bún chả', 'buncha.jpg', 45000, 'Bún chả Hà Nội', 1),
('Trà đào', 'tra_dao.jpg', 25000, 'Trà đào cam sả', 3);

INSERT INTO sub_food (sub_id, sub_name, sub_price, food_id) VALUES
('sub1', 'Thêm bánh quẩy', 10000, 1),
('sub2', 'Thêm trứng', 15000, 2);

INSERT INTO `order` (user_id, food_id, amount, code, art_sub_id) VALUES
(1, 1, 2, 'ORDER001', 'sub1'),
(1, 2, 1, 'ORDER002', NULL),
(2, 1, 3, 'ORDER003', 'sub1'),
(2, 3, 2, 'ORDER004', NULL),
(3, 2, 5, 'ORDER005', 'sub2'),
(4, 1, 4, 'ORDER006', NULL);

-- Sửa dữ liệu like_res: mỗi user chỉ like 1 lần cho mỗi nhà hàng
INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 1, '2023-01-01'),
(1, 2, '2023-01-02'),
(1, 3, '2023-01-03'),
(2, 1, '2023-01-04'),
(2, 3, '2023-01-05'),
(3, 2, '2023-01-06'),
(4, 3, '2023-01-07'),
(5, 1, '2023-01-08'),
(5, 2, '2023-01-09');

INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 5, '2023-01-01'),
(1, 2, 4, '2023-01-02'),
(2, 1, 4, '2023-01-03'),
(3, 2, 5, '2023-01-04'),
(4, 3, 3, '2023-01-05');

-- Tạo các stored procedure
DELIMITER $$

-- 1. Tìm 5 người đã like nhà hàng nhiều nhất
CREATE PROCEDURE GetTop5UsersWithMostLikes()
BEGIN
    SELECT 
        u.user_id,
        u.full_name,
        COUNT(lr.res_id) AS total_likes
    FROM `user` u
    JOIN like_res lr ON u.user_id = lr.user_id
    GROUP BY u.user_id, u.full_name
    ORDER BY total_likes DESC
    LIMIT 5;
END$$

-- 2. Tìm 2 nhà hàng có lượt like nhiều nhất
CREATE PROCEDURE GetTop2RestaurantsWithMostLikes()
BEGIN
    SELECT 
        r.res_id,
        r.res_name,
        COUNT(lr.user_id) AS total_likes
    FROM restaurant r
    JOIN like_res lr ON r.res_id = lr.res_id
    GROUP BY r.res_id, r.res_name
    ORDER BY total_likes DESC
    LIMIT 2;
END$$

-- 3. Tìm người đã đặt hàng nhiều nhất
CREATE PROCEDURE GetUserWithMostOrders()
BEGIN
    SELECT 
        u.user_id,
        u.full_name,
        SUM(o.amount) AS total_ordered
    FROM `user` u
    JOIN `order` o ON u.user_id = o.user_id
    GROUP BY u.user_id, u.full_name
    ORDER BY total_ordered DESC
    LIMIT 1;
END$$

-- 4. Tìm người dùng không hoạt động trong hệ thống
CREATE PROCEDURE GetInactiveUsers()
BEGIN
    SELECT 
        u.user_id,
        u.full_name,
        u.email
    FROM `user` u
    LEFT JOIN `order` o ON u.user_id = o.user_id
    LEFT JOIN like_res lr ON u.user_id = lr.user_id
    LEFT JOIN rate_res rr ON u.user_id = rr.user_id
    WHERE o.user_id IS NULL 
      AND lr.user_id IS NULL 
      AND rr.user_id IS NULL;
END$$

DELIMITER ;

-- Gọi các stored procedure để kiểm tra
CALL GetTop5UsersWithMostLikes();
CALL GetTop2RestaurantsWithMostLikes();
CALL GetUserWithMostOrders();
CALL GetInactiveUsers();