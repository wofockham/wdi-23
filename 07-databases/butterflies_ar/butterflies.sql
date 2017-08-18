CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT -- url to a photo a butterfly
);

INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nymphalidae');
