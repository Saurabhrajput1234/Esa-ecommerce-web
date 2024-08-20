const express = require("express");
const router = express.Router();
const userdb = require("../models/userSchema");
const authenticate = require("../middleware/authenticate");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'dcnblai32',
  api_key: '322754248918634',
  api_secret: 'hPd5b4MA8UToPXSpFgZ4BUAFYcc'
});

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name
  }
});

const upload = multer({ storage: storage });

// User registration route with file upload
router.post("/register", upload.single('file'), async (req, res) => {
  const { name, lastName, email, password, cPassword } = req.body;
  const file = req.file; // Uploaded file details

  if (!name || !lastName || !email || !password || !cPassword) {
    return res.status(422).json({ error: "Fill all details" });
  }

  try {
    // Check if the email already exists
    const preuser = await userdb.findOne({ email });
    if (preuser) {
      return res.status(422).json({ error: "This email already exists" });
    }

    // Check if password and confirm password match
    if (password !== cPassword) {
      return res.status(422).json({ error: "Password and confirm password do not match" });
    }

    // Upload file to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(file.path);

    // Create new user document with Cloudinary URL
    const finalUser = new userdb({
      name,
      lastName,
      email,
      password,
      cPassword,
      file: cloudinaryResponse.secure_url // Store Cloudinary URL
    });
    console.log (finalUser)


    

    // Save user to the database
    await finalUser.save();
   
    // Respond with success message
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    // Handle registration errors
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


//   //user Login
 router.post("/login",async(req,res)=>{
  console.log(req.body);
  const{ email,password}= req.body;
  if(!email || !password){
    res.status(422).json({error:"fill all the datails"})
  }
   try {
    const userValid = await userdb.findOne({email:email})
     if (userValid){
      const isMatch = await bcrypt.compare(password,userValid.password);
      if(!isMatch){
        res.status(422).json({error:"invalid details"})

      }
      else{
        // token generate
        const token = await userValid.generateAuthToken();
        
              console.log(token)
        // cookiegenerate
        res.cookie("usercookie",token,{
          expires:new Date(Date.now()+9000000),
          httpOnly:true
        });
        const result = {
          userValid,
          token
        }
        res.status(201).json({status:201,result})
      }
     }
   } catch (error) {
    res.status(422).json(error)
    
   }
 });

 // user valid
 router.get("/validuser",authenticate,async(req,res)=>{
 try{
  const validUserOne = await userdb.findOne({_id:req.userId});
  res.status(201).json({status:201,validUserOne});
 } catch (error){
  res.status(401).json({status:401,error});

 }

 })

 module.exports = router;

