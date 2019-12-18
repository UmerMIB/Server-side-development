const mongoose = require('mongoose'),
    dishes = require('./models/dishes'),
    url = 'mongodb://localhost:27017/conFusion';
// mongoose.connect(url)
//     .then((db) => {
//         console.log(` Server correctly connected `);
//         var newDish = dishes({
//             name: 'umer1 ',
//             description: 'umer testing here1'
//         });
//         newDish.save()
//             .then((dish) => {
//                 console.log('dishes are', dish);
//                 return dishes.find({})
//             })
//             .then((dish) => {
//                 console.log('all dishes are', dish);
//                 return dishes.remove()
//             })
//             .then(() => {
//                 mongoose.connection.close()
//             })
//             .catch((err) => {
//                 console.log(' Error occured', err)
//             })
//     })
//     .catch((err) => {
//         console.log('server cannot  connect to the server err is ', err)
//     })







mongoose.connect(url)
    .then((db) => {
        console.log(` Server correctly connected `);
        dishes.create({
                name: 'umer1 ',
                description: 'umer testing here1'
            })
            .then((dish) => {
                console.log('dishes are', dish);
                return dishes.find({}).exec()
            })
            .then((dish) => {
                console.log('all dishes are', dish);
                return dishes.remove()
            })
            .then(() => {
                mongoose.connection.close()
            })
            .catch((err) => {
                console.log(' Error occured', err)
            })
    })
    .catch((err) => {
        console.log('server cannot  connect to the server err is ', err)
    })