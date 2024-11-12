
import 'dotenv/config'
import express, { json } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import userModel from './models/userSchema.js';
import cors from 'cors';
import jwt from "jsonwebtoken";    
import userVerifyMiddle from './middleware/userVerify.js';
import OderModel from './models/OrderSchema.js';
import OrderModel from './models/OrderSchema.js';


const port = process.env.PORT 
const dbUrl = process.env.DBURI

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
mongoose.connect(dbUrl)
mongoose.connection.on('connected',()=>{
    console.log('monogodb connected')
})

mongoose.connection.on('error',(err)=>{
 console.log(err)
})


app.get("/", (req, res) => {
    res.send({
        message:'server up....',
        status:true
    })
})


// Signup route
app.post('/signup' , async(req,res)=>{
    const {name, email, password} = req.body
    if(!name || !email || !password){
      // status code deingy aisy res.statusCode().json
        res.json({
            message: "Please enter all fields",
            status : false
        });
        return;
    }

    const existingUser = await userModel.findOne({email});
    if(existingUser){
        res.json({
            message: "Email already exists",
            status : false
        });
        return;
    }

    // Hash the Password

    const hashedPassword = await bcrypt.hash(password,10)
    console.log("hashpassword", hashedPassword)

    
    // Create the user in the db

    const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword})
        res.json({
            message: "User registered successfully",
            status : true
        });
    
})


// Login route
app.post('/login', async(req,res)=>{
    const {email, password} = req.body
    if(!email ||!password){
        res.json({
            message: "Please enter all fields",
            status : false
        });
        return;
    }

      // Check if user exists
      const emailExist = await userModel.findOne({email:email});
      if(!emailExist){
        res.json({
          message: "User not found",
          status : false
        });
        return;
      }
      // Check if password is correct
      const comparePassword = await bcrypt.compare(password, emailExist.password);
      if(!comparePassword){
        res.json({
          message: "Invalid password",
          status : false
        });
        return;
      }

// token 
var token = jwt.sign(
  { email: emailExist.email, name: emailExist.name },
  process.env.JWT_SECRET_KEY
);

res.json({
  message: "login successfully",
  status: true,
  token,
});
       // Login successful
       res.json({
        message: "Login successful",
        status : true
      });
    })
     
   
// get users data 
app.get("/api/getusers", userVerifyMiddle, async (req, res) => {
  try {
    const response = await userModel.find({});

    res.json({
      message: "all users get",
      status: true,
      data: response,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});


// post order data 
app.post("/order", async (req, res) => {
  const { id, foodName, price, firstName, lastName, email, phone, shippingAddress, streetAddress, city, paymentMethod } = req.body;

  try {
    const newOrder = await OrderModel.create({
      id,
      foodName,
      price,
      firstName,
      lastName,
      email,
      phone,
      shippingAddress,
      streetAddress,
      city,
      paymentMethod,
    });

    res.json({
      message: "Order placed successfully",
      status: true,
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", status: false, error });
  }
});


// get order data 
app.get('/getorder', async (req, res) => {
  try {
    const orders = await OrderModel.find(); // Fetch all orders from the database
    res.json(orders); // Send the orders as JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
});


// delete  order by id
app.delete('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
});


// logout 
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted and logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
});

    app.listen(port, () => {
      console.log(`Server start... ${port}`)
  })