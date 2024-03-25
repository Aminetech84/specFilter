const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const specialtyController = require('./controllers/specialtyController');

const Specialty = require('./models/Specialty');

// Create a controller to handle CRUD operations


const app = express();

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/test?retryWrites=true&w=majority';
//mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/SpecList
//mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/?retryWrites=true&w=majority

// Connect to MongoDB Atlas 

// http://localhost:5000/api/specialties

<<<<<<< HEAD
mongoose.connect(mongoURI)
=======


mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
>>>>>>> ebb51706f5a771080df8a6fc4aac48bd0cf69cd4
.then(() => console.log('MongoDB Atlas connected'))
.catch((err) => console.log(err));


// Define API endpoint to fetch specialties
app.get('/api/specialties', async (req,res)=> {

 /* Specialty.find()
  .then((Specialty) => res.json(Specialty))
  .catch((err) => res.status(500).json("Error: " + err));*/

  
  
    try {
        // Define query parameters based on your needs (e.g., id, name)
        const query = {};
        if (req.query.name) {
          query.name = req.query.name;
        }
    
        // Fetch data from database
        const data = await Specialty.find(query);
    
        // Send data as JSON response
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    //console.log(res);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

/**
 * GET /specialties: Fetch all specialties.
 * GET /specialties/:id: Fetch a specific specialty by ID.
 * POST /specialties: Create a new specialty.
 * PUT /specialties/:id: Update a specialty by ID.
 * DELETE /specialties/:id: Delete a specialty by ID.
 * 
 */

// Define routes
router.get('/specialties', specialtyController.getAllSpecialties);
router.get('/specialties/:id', specialtyController.getSpecialtyById);
router.post('/specialties', specialtyController.createSpecialty);
router.put('/specialties/:id', specialtyController.updateSpecialty);
router.delete('/specialties/:id', specialtyController.deleteSpecialty);

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