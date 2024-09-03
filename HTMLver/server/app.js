const express = require("express");
//const router= express.Router();
const mongoose = require("mongoose");
const cors = require("cors");
//const specialtyController = require('./controllers/specialtyController');

//const Specialty = require('./models/Specialty');

// Create a controller to handle CRUD operations

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection string
const mongoURI =
  "mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/test?retryWrites=true&w=majority";

// http://localhost:5000/api/specialties

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// DB Schema
const specialtySchema = new mongoose.Schema({
  number: Number,
  code: String,
  name: String,
  qualification: Number,
  duration: Number,
  conditions: String,
});

/*const specialtySchema = new mongoose.Schema({
  name: String,
  description: String,
  requirements: String
});*/

const Specialty = mongoose.model("Specialty", specialtySchema);

// Define API endpoint to fetch specialties
app.get("/api/specialties", async (req, res) => {
  try {
    // Define query parameters based on your needs (e.g., id, name)
    //const query = {};
    /* if (req.query.name) {
          query.name = req.query.name;
        }*/

    // Fetch data from database
    const data = await Specialty.find();

    // Send data as JSON response
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  //console.log(res);
});

app.get("/api/specialties/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const specialty = await Specialty.findById(id);
    if (!specialty) {
      return res.status(404).send("Specialty not found");
    }
    res.json(specialty);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/specialties", async (req, res) => {
  /*const newSpecialty = new Specialty({ 
    name: req.body.name, 
    description: req.body.description,
    requirements: req.body.requirements
  });*/
  try {
    const { number, code, name, qualification, duration, conditions } =
      req.body;

    const newSpecialty = new Specialty({ number, code, name, qualification, duration, conditions });
    const addedSpecialty = await newSpecialty.save();
    res.status(201).json(addedSpecialty);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/api/specialties/:id", async (req, res) => {
  const { number, code, name, qualification, duration, conditions } = req.body;
  try {
    const { id } = req.params;
    const updatedSpecialty = await Specialty.findByIdAndUpdate(
      id,
      { number, code, name, qualification, duration, conditions },
      { new: true, runValidators: true }
    );
    if (!updatedSpecialty) {
      return res.status(404).send("Specialty not found");
    }
    res.json(updatedSpecialty);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/api/specialties/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSpecialty = await Specialty.findByIdAndDelete(id);
    if (!deletedSpecialty) {
      return res.status(404).send("Specialty not found");
    }
    res.json(deletedSpecialty);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * GET /specialties: Fetch all specialties.
 * GET /specialties/:id: Fetch a specific specialty by ID.
 * POST /specialties: Create a new specialty.
 * PUT /specialties/:id: Update a specialty by ID.
 * DELETE /specialties/:id: Delete a specialty by ID.
 *
 */

// Define routes
/*router.get('/specialties', specialtyController.getAllSpecialties);
router.get('/specialties/:id', specialtyController.getSpecialtyById);
router.post('/specialties', specialtyController.createSpecialty);
router.put('/specialties/:id', specialtyController.updateSpecialty);
router.delete('/specialties/:id', specialtyController.deleteSpecialty);*/

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

// Listening to the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
