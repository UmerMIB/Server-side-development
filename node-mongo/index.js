const MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    url = 'mongodb://localhost:27017',
    dbName = 'conFusion';



MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Server correctly connected');
    const db = client.db(dbName),
        collection = db.collection('dishes');
    collection.insertOne({
        "name": "Umer",
        "description": "test"
    }, (err, result) => {
        assert.equal(err, null);
        console.log('After Insert \n');
        console.log(result.ops);
        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);
            console.log('found');
            console.log(docs);
            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);
                client.close();
            })
        })

    })

})