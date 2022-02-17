const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    id:{
        type: Number,
        required:true,
        unique:true,
    },
    product:{
        type: String,
        required:true,
        
    },
    category:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    stock:{
        type: Number,
        required:true,
        default:0,
    },
},
{
    timestamps:true,
})
module.exports=mongoose.models.Product || mongoose.model('Product',productSchema);

