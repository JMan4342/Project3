const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { asyncMap } = require('@apollo/client/utilities');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  parks: [
    {
      type: String,
      trim: true,
    },
  ],
  thingsToDo: [
    {
      type: String,
      trim: true,
    },
  ],
  campgrounds: [
    {
      type: String,
      trim: true,
    },
  ],
});


var display= async()=>{
  console.log("test")
}


// display()


// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
