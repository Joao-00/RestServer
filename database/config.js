const mongoose = require('mongoose');




const dbConnection = async() =>{

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // no tiene soporte     
        //     useCreateIndex: true,
        //     useFindAndModify: false


        console.log('Base de datos online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la DB');
    }



}




module.exports = {
    dbConnection
}