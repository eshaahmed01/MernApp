const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://eshaahmed01:Kothar2018@cluster0.be2qar6.mongodb.net/GoFood?retryWrites=true&w=majority"
const mongoDB = async() =>{


await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log("---" + err)
    else {
        // var database =
        console.log("connected to mongo")
        const data = await mongoose.connection.db.collection("food_items");
        data.find({}).toArray ( async function ( err, data){
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function (err, catData){
                if (err) console.log(err);
        else {
            global.food_items = data;
            global.foodCategory = catData;
            } 
        })
     
        // if (err) console.log(err);
        // else {
        //     global.food_items = data;
        //    // console.log(global.food_items);
        // }
        
     
    });

}

})
}


module.exports = mongoDB;