const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imbd:{
        type:Number,
        required:true
    },
    trailer:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("Movie",schema);