var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping');

var products = [
    new Product({
   imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'Gothic Video Game',
    description:'Awsome Game',
    price: 10
    }),

    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title : 'Gothic Game',
        description:'Awsome Game developed by germain company',
        price: 10
    })

];

var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}