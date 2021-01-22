const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db.sqlite');

try{

    db.serialize(function() {

        db.run("DROP TABLE IF EXISTS Restaurants");
        db.run("DROP TABLE IF EXISTS Menus");
        db.run("DROP TABLE IF EXISTS MenuItems");

        db.run("CREATE TABLE Restaurants (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imageLink TEXT, menus_id INTEGER, FOREIGN KEY (menus_id) REFERENCES Menus(m_id))");

        db.run("CREATE TABLE Menus (m_id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, restaurants_id INTEGER");

        db.run("CREATE TABLE MenuItems (mi_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, menus_id INTEGER)");

        let stmt;

        try {
            stmt = db.prepare(`INSERT INTO Restaurants (name, imageLink) VALUES 
                            ("Steve's", "image1"),
                            ("Bob's", "image2");`);
            stmt.run();
        }
        finally{
            stmt.finalize();
        }

        try {
            stmt = db.prepare(`INSERT INTO Menus (title, restaurants_id) VALUES 
                            ("Pizza", 1),
                            ("Pasta", 1);`);
            stmt.run();
        }
        finally{
            stmt.finalize();
        }

        try {
            stmt = db.prepare(`INSERT INTO MenuItems (name, price, menus_id) VALUES 
                            ("Cheese", 8, 1),
                            ("Pepperoni", 10, 1);`);
            stmt.run();
        }
        finally{
            stmt.finalize();
        }
/*
        db.each("SELECT * FROM Restaurants",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );

        db.each("SELECT * FROM MenuItems WHERE mi_id = 1",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );

        db.each(`SELECT restaurants.name, menus.title
        FROM restaurants 
        JOIN menus ON restaurants.id = menus.restaurants_id
        WHERE restaurants.id = 1;`,
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );*/

    });
}

finally{
    db.close();
}