const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

/**
 * Executes the SQL statements one at a time.
 * 
 * Please note that this does not have any error 
 * handling as yet.
 */
db.serialize(function() {
    // create the empty table with specific columns and column types
    db.run("CREATE TABLE CUSTOMERS (CustomerName TEXT, ContactName TEXT, Address TEXT, City TEXT, PostalCode TEXT, Country TEXT)");

    // insert data 
    let stmt = db.prepare(`INSERT INTO CUSTOMERS VALUES 
                        ('Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany') , 
                        ('Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico') ,
                        ('Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico') ,
                        ('Around the Horn', 'Thomas Hardy', '120 Hanover Sq.', 'London', 'WA1 1DP', 'UK') ,
                        ('Berglunds snabbköp', 'Christina Berglund', 'Berguvsvägen 8', 'Luleå', 'S-958 22', 'Sweden')`);
    stmt.run();

    // cleanp
    stmt.finalize(); // releases any any internal resources 
                     // and deallocates any memory

    // select the rows and print them
    db.each("SELECT * FROM CUSTOMERS", function(err, rows) {
          console.log(rows);
    });
});

db.close();
