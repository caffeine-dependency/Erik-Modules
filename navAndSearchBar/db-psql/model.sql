DROP DATABASE IF EXISTS SDC;
CREATE DATABSE SDC;

CREATE TABLE search(
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

COPY search FROM '/Users/jjlee/Desktop/nav-bar-jj/navAndSearchBar/db-psql/dataGen/products.txt' (DELIMITER('|'));