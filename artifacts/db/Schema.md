# DB Schema

```
//// -- LEVEL 1
//// -- Schemas, Tables and References

// Creating tables
// You can define the tables with full schema names
// Table schemaname.table_name {
// }

// If schema name is omitted, it will default to "public" schema.
Table users as U {
  id int [pk, increment] // auto-increment
  user_name varchar
  password varchar
}

Table roles as R {
  id int [pk, increment]
  name varchar
}

Table user_in_roles {
  id int [pk, increment]
  user_id int [ref: > U.id]
  role_id int [ref: > R.id]
}

Table posts as P {
  id int [pk, increment]
  user_id int [ref: > U.id]
  care_taker_id int [ref: > U.id ]
  park_area_id int [ref: > park_area.id]
  area_ride_id int [ref: > area_rides.id]
  is_open bit // 1 or 0 (true / false)
  time  int // epoch time
  number_of_kids int
  zapped bit // soft delete
}

Table post_comments as PC {
  id int [pk, increment]
  commenter int [ref: > U.id]
  post_id int [ref: > P.id]
  message varchar
  parent_comment int [ref: - PC.id]
  next_comment int [ref: - PC.id]
}

Table park_area {
  id int [pk, increment]
  name varchar
}

Table area_rides {
  id int [pk, increment]
  area_id int [ref: > public.park_area.id]
  ride_name varchar
}
// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one; <> many-to-many
```
