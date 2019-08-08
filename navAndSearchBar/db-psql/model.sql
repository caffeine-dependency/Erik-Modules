DROP DATABASE IF EXISTS SDC;
CREATE DATABASE SDC;

CREATE TABLE search(
  id serial PRIMARY KEY,
  name VARCHAR,
  price VARCHAR,
  category VARCHAR,
  gender VARCHAR,
  image VARCHAR,
  rating int,
  numRatings VARCHAR,
  color VARCHAR,
  activities TEXT [],
  materials TEXT []
);

COPY search FROM 'dataGen/products.txt' (DELIMITER('|'));