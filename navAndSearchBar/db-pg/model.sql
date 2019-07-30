\connect test
DROP TABLE IF EXISTS test3
CREATE TABLE test3(
  id serial PRIMARY KEY,
  name VARCHAR,
  price VARCHAR,
  category VARCHAR,
  gender VARCHAR,
  image VARCHAR,
  rating int,
  numRatings VARCHAR,
  colors TEXT [],
  activities TEXT [],
  materials TEXT []
);

COPY test3 FROM '/Users/jjlee/Desktop/nav-bar-jj/navAndSearchBar/db-pg/productstest.txt' (DELIMITER('|'));