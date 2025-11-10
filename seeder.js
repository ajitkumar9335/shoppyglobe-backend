require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');

const sampleProducts = [
  { name: 'Tire Cleaner', description: 'Cleans tires', price: 199, stock: 100 },
  { name: 'Car Wax', description: 'Shiny finish', price: 499, stock: 50 },
  { name: 'Seat Cover', description: 'Comfortable seat cover', price: 1299, stock: 20 }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log('Connected to DB');
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('Inserted products');

    // create test user
    const existing = await User.findOne({ email: 'test@shoppyglobe.com' });
    if (!existing) {
      const user = new User({ name: 'Test User', email: 'test@shoppyglobe.com', password: 'password123' });
      await user.save();
      console.log('Created test user: test@shoppyglobe.com / password123');
    }
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
