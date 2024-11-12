import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
  id:Number,
  foodName:String,
  price:String,
  firstName:String,
  lastName:String,
  email:String,
  phone:Number,
  shippingAddress:String,
  streetAddress:String,
  city:String,
  paymentMethod:String,
  imageUrl:String
})
const OrderModel = mongoose.model("OderDetail",orderSchema)

export default OrderModel;
