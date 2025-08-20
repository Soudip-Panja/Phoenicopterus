const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json())

// Get Routes
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us page");
});

// Post routes
const cars = [
    {id: 1, make: "Toyota", model: "Camry", year: 2022}
]

app.post("/cars", (req, res) => {
    const newCar = req.body

    if(!newCar.make || !newCar.model || !newCar.year){
        res.status(400).json({error: "Make, Model and Year are required."})
    } else {
        cars.push(newCar)
        res.status(201).json({message: "Car added successfully.", car: newCar})
    }
})

app.get("/cars", (req, res) => {
    res.send(cars)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port, ${PORT}`);
});