const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./restaurant.sqlite');

try{

    db.serialize(function() {

        db.run("DROP TABLE IF EXISTS Restaurants");
        db.run("DROP TABLE IF EXISTS Menus");
        db.run("DROP TABLE IF EXISTS MenuItems");

        db.run("CREATE TABLE Restaurants (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imageLink TEXT)");

        db.run("CREATE TABLE Menus (m_id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, restaurants_id INTEGER)");

        db.run("CREATE TABLE MenuItems (mi_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, menus_id INTEGER)");
    });
}

finally{
    db.close();
}