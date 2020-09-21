USE golfersrus;
CREATE TABLE products (
  id INT PRIMARY KEY NOT NULL,
  pname VARCHAR(255) NOT NULL,
  category VARCHAR(45) NOT NULL,
  price FLOAT NOT NULL,
  img VARCHAR(255) NOT NULL
);

INSERT INTO products (
  id,pname,category,price,img
)

VALUES 
(1, 'Calaway Mavrik Driver', 'driver', 399.99, 'img/mavd.jpg'),
(2, 'Taylormade M4 Driver', 'driver', 299.99, 'img/m4d.jpg'),
(3, 'Titliest ProV1 Golf Balls', 'balls', 39.99, 'img/prov1.jpg'),
(4, 'Calaway Toursoft Golf Balls', 'balls', 29.99, 'img/toursoft.jpg'),
(5, 'Odyssey Stroke Labs Putter', 'putter', 299.99, 'img/slp.jpg'),
(6, 'Scotty Cameron Select Newport Putter', 'putter', 399.99, 'img/scp.jpg');