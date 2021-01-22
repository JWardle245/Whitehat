const sqlite3 = require('sqlite3').verbose();
const fs = require('fs'); // Node.js file system module with promises
const path = require('path'); // Node.js directories and file paths module

const db = new sqlite3.Database('./restaurant.sqlite');
fs.readFile('./restaurants.json', (err,data)=>{
    if (err){
        return console.error(err)
    };
    try{
        db.serialize(function(){
            let restaurants = JSON.parse(data);
            for(i = 0; i<restaurants.length;i++){
                const restaurant = restaurants[i];
                db.run(
                    `INSERT INTO Restaurants (name, imageLink) VALUES ('${restaurant.name}', '${restaurant.image}')`
                );
                
                for(x=0; x<restaurant.menus.length; x++){
                    const menu = restaurant.menus[x];
                    db.run(
                        `INSERT INTO Menus (title) VALUES ('${menu.title}')`
                    );

                    for(y=0; y<menu.items.length; y++){
                        const item = menu.items[y];
                        db.run(
                            `INSERT INTO MenuItems (name, price) VALUES ('${item.name}', '${item.price}')`
                        );
                    };
                };
            };

            db.each("SELECT * FROM Restaurants",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );
        });
    }
    finally{
        db.close();
    };
});