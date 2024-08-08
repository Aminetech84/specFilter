
// DB Schema
const specialtySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    requirements: {
      type: [String],
    },
  });
  
  const Specialty = mongoose.model('Specialty', specialtySchema);
//module.exports = Specialty;
