BEGIN;

INSERT INTO CLIENT(USERNAME, PASSWORD)
 VALUES ('FADEZAK100', '$2a$12$JfAC2rit./pFO4uOkwZAGOFjH8OVQozOyG9ecNT9yoBk8VpvtzQoS'),
  ('saif', '$2a$12$JfAC2rit./pFO4uOkwZAGOFjH8OVQozOyG9ecNT9yoBk8VpvtzQoS'),
  ('salsabeel', '$2a$12$JfAC2rit./pFO4uOkwZAGOFjH8OVQozOyG9ecNT9yoBk8VpvtzQoS'),
  ('nader', '$2a$12$JfAC2rit./pFO4uOkwZAGOFjH8OVQozOyG9ecNT9yoBk8VpvtzQoS');



INSERT INTO PRODUCTS(NAME, DESCRIPTION, PRICE, STOCK, CATEGORY, IMAGE, GALARY) VALUES 
('IPHONE 9', 'THIS IS IPHONE 9', 99.99, 10, 'SMART PHONES', 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
ARRAY[
'https://dummyjson.com/image/i/products/1/1.jpg',
'https://dummyjson.com/image/i/products/1/2.jpg']
),
('IPHONE X', 'THIS IS IPHONE X ', 55.99, 10, 'SMART PHONES', 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
ARRAY[
'https://dummyjson.com/image/i/products/1/1.jpg',
'https://dummyjson.com/image/i/products/1/2.jpg']
),
('Samsung', 'THIS IS smasung', 150, 11, 'smart watch', 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
ARRAY[
'https://dummyjson.com/image/i/products/1/1.jpg',
'https://dummyjson.com/image/i/products/1/2.jpg']
),
('Xiamoi', 'THIS IS xiaomi', 20, 9, 'laptops', 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
ARRAY[
'https://dummyjson.com/image/i/products/1/1.jpg',
'https://dummyjson.com/image/i/products/1/2.jpg']
); 



INSERT INTO CARTS(PRODUCT_ID, CLIENT_ID, QUANTITY) VALUES
(1, 1, 10),
(2, 1, 10),
(1, 2, 5),
(3, 2, 10),
(3, 4, 10);







COMMIT;