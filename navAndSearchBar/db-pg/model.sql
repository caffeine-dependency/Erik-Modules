\connect sdc
DROP TABLE IF EXISTS search
CREATE TABLE search(
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

COPY search FROM '/Users/jjlee/Desktop/nav-bar-jj/navAndSearchBar/db-pg/productstest.txt' (DELIMITER('|'));