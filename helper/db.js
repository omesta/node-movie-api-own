const mongoose = require('mongoose')


module.exports= ()=>{
    mongoose.connect('mongodb://movie_user:abcd1234@ds215633.mlab.com:15633/movie-api', { useMongoClient: true });
    mongoose.connection.on('open',()=>{
        console.log('MongoDB: Connected')
    });
    mongoose.connection.on('error',(err)=>{
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};




