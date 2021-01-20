const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db.sqlite');

try{

    db.serialize(function() {
/*
        db.run("CREATE TABLE Restaurants (id INTEGER, name TEXT, imageLink TEXT, PRIMARY KEY(id))");

        db.run("CREATE TABLE Menus (m_id INTEGER, title TEXT, restaurants_id INTEGER, PRIMARY KEY(m_id))");

        db.run("CREATE TABLE MenuItems (mi_id INTEGER, name TEXT, price INTEGER, menus_id INTEGER, PRIMARY KEY(mi_id))");

        let stmt;

        try {
            stmt = db.prepare(`INSERT INTO Restaurants VALUES 
                            (1001, "Steve's", "image1"),
                            (1002, "Bob's", "image2");`);
            stmt.run();
        }
        finally{
            stmt.finalize();
        }

        try {
            stmt = db.prepare(`INSERT INTO Menus VALUES 
                            (2001, "Pizza", 1001),
                            (2002, "Pasta", 1001);`);
            stmt.run();
        }
        finally{
            stmt.finalize();
        }

        try {
            stmt = db.prepare(`INSERT INTO MenuItems VALUES 
                            (3001, "Cheese", 8, 2001),
                            (3002, "Pepperoni", 10, 2001);`);
            stmt.run();
        }
        finally{
            stmt.finalize();
        }
*/
        db.each("SELECT * FROM Restaurants",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );

        db.each("SELECT * FROM MenuItems WHERE mi_id = 3001",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );

        db.each(`SELECT restaurants.name, menus.title
        FROM restaurants 
        JOIN menus ON restaurants.id = menus.restaurants_id
        WHERE restaurants.id = 1001;`,
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );

    });
}

finally{
    db.close();
}