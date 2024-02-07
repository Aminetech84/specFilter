const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/testapi?retryWrites=true&w=majority';
//mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/SpecList
//mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/?retryWrites=true&w=majority

// Connect to MongoDB Atlas 



mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Atlas connected'))
.catch((err) => console.log(err));

// Define API endpoint to fetch specialties
app.get('/api/specialties', (req,res)=> {
    //console.log(json.res);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));


/***
 * API endpoints (e.g., fetching specialties, searching, etc.).
 * 
 * Implement CRUD
 * 
 * Create Routes
 * 
 * Testing
 * 
 */