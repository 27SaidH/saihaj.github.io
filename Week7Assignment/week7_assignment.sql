CREATE TABLE Customers (
    id INTEGER PRIMARY KEY,
    name TEXT,
    membership_level TEXT
);

CREATE TABLE Rentals (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    movie_title TEXT,
    rental_price INTEGER,
    FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

INSERT INTO Customers(id, name, membership_level)
VALUES
(00, 'Jake', 'one'),
(01, 'Emma', 'two'),
(10, 'Mike', 'one'),
(11, 'Tom', 'three'),
(001, 'Jenny', 'two');

INSERT INTO Rentals (id, customer_id, movie_title, rental_price)
VALUES 
(111, 00, 'Inception', 5),
(112, 01, 'The Dark Knight', 6),
(113, 10, 'Interstellar', 4),
(114, 11, 'Tenet', 8),
(115, 001, 'Dunkirk', 10);


SELECT * FROM Customers;
SELECT * FROM Rentals;

SELECT name, membership_level FROM Customers; 
SELECT movie_title, rental_price FROM Rentals;

SELECT *
FROM Customers
JOIN Rentals
ON Customers.id = Rentals.customer_id;
