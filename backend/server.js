require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const sendMail = require("./sendMail");

const client = new MongoClient("mongodb://localhost:27017");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());


async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database Connection Failed");
  }
}

connectDB();


app.post("/api/auth/signup", async (request, response) => {
  try {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;
    const confirmPassword = request.body.confirmPassword;

    if (!name || !email ||  !password || !confirmPassword) {
      return response.status(400).send("All fields are required");
    }

    if (password !== confirmPassword) {
      return response.status(400).send("Passwords do not match");
    }

    const db = client.db("elevadb");

    const UsersCollection = db.collection("users");

    const existingUser = await UsersCollection.findOne({ email: email });

    if (existingUser) {
      return response.status(400).send("User already exists");
    }

    
    await UsersCollection.insertOne({
      name: name,
      email: email,
      password: password,
    });

    response.status(200).json({ message: "Signup Successful", name: name, email: email });

  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong");
  }
});


app.post("/api/auth/login", async (request, response) => {
  try {
    const email = request.body.email;
    const password = request.body.password;

    if (!email || !password) {
      return response.status(400).send("All fields are required");
    }

    const db = client.db("elevadb");

    const UsersCollection = db.collection("users");

    
    const userDoc = await UsersCollection.findOne({
      email: email,
    });


    if (!userDoc) {
      return response.status(401).send("Invalid Email");
    }


    if (userDoc.password !== password) {
      return response.status(401).send("Invalid Password");
    }

    response.status(200).json({ message: "Login Successful", name: userDoc.name, email: userDoc.email });

  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong");
  }
});


let generatedOTP = "";

app.post("/forgot-password", async (request, response) => {

  try {

    const email = request.body.email;

    if (!email) {
      return response.status(400).send("Email is required");
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    generatedOTP = otp.toString();
    

    await sendMail(
      email,
      "Password Reset OTP",
      `Your OTP is ${generatedOTP}`
    );

    response.status(200).send("OTP sent successfully");

  } catch (error) {

    console.log(error);

    response.status(500).send("Something went wrong");
  }
});


app.post("/verify-otp", (request, response) => {

  try {

    const enteredOTP = request.body.otp;

    
    if (!enteredOTP) {
      return response.status(400).send("OTP is required");
    }

    
    if (enteredOTP === generatedOTP) {

      return response.status(200).send("OTP Verified Successfully");
    }

    else {

      return response.status(401).send("Invalid OTP");
    }

  } catch (error) {

    console.log(error);

    response.status(500).send("Something went wrong");
  }
});


app.get("/", (request, response) => {
  response.send("Server Running");
});


app.listen(5001, () => {
  console.log("Server running on port 5001");
});