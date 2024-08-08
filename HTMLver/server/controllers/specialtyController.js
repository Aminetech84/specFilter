//const Specialty = require('../models/Specialty'); // Assuming you have a Specialty model

const specialtyController = {
    getAllSpecialties: async (req, res) => {
        try {
          const specialties = await Specialty.find();
          res.json(specialties);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      },
      
      getSpecialtyById: async (req, res) => {
        const { id } = req.params;
        try {
          const specialty = await Specialty.findById(id);
          if (!specialty) {
            return res.status(404).send('Specialty not found');
          }
          res.json(specialty);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      },
      
      createSpecialty: async (req, res) => {
        const { name, description, requirements } = req.body;
        try {
          const newSpecialty = new Specialty({ name, description, requirements });
          await newSpecialty.save();
          res.status(201).json(newSpecialty);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      },
      
      updateSpecialty: async (req, res) => {
        const { id } = req.params;
        const { name, description, requirements } = req.body;
        try {
          const updatedSpecialty = await Specialty.findByIdAndUpdate(
            id,
            { name, description, requirements },
            { new: true, runValidators: true }
          );
          if (!updatedSpecialty) {
            return res.status(404).send('Specialty not found');
          }
          res.json(updatedSpecialty);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      },
      
      deleteSpecialty: async (req, res) => {
        const { id } = req.params;
        try {
          const deletedSpecialty = await Specialty.findByIdAndDelete(id);
          if (!deletedSpecialty) {
            return res.status(404).send('Specialty not found');
          }
          res.json(deletedSpecialty);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }
};

//module.exports = specialtyController;
