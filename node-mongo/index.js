const MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    url = 'mongodb://localhost:27017',
    dbName = 'conFusion',
    dboper = require('./operation');



MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Server correctly connected');
    // const db = client.db(dbName),
    //     collection = db.collection('dishes');
    // collection.insertOne({
    //     "name": "Umer",
    //     "description": "test"
    // }, (err, result) => {
    //     assert.equal(err, null);
    //     console.log('After Insert \n');
    //     console.log(result.ops);
    //     collection.find({}).toArray((err, docs) => {
    //         assert.equal(err, null);
    //         console.log('found');
    //         console.log(docs);
    //         db.dropCollection('dishes', (err, result) => {
    //             assert.equal(err, null);
    //             client.close();
    //         })
    //     })

    // })


    dboper.insertDocument(db, {
        "mane": "ali",
        "description": " BOI"
    }, 'dishes', (result) => {
        assert.equal(err, null);
        console.log(`Document added ${result.ops} `);

        dboper.findDocument(db, 'dishes', (docs) => {
            assert.equal(err, null);
            console.log(`Found documents ${docs} `);


            dboper.updateDocument(db, { "name": "ali" }, { "description": "updated description" }, (result) => {
                assert.equal(err, null);
                console.log(`Document updated ${result} `);

                dboper.findDocument(db, 'dishes', (docs) => {
                    assert.equal(err, null);
                    console.log(`Found documents ${docs} `);
                })
            })
        })

    })
})