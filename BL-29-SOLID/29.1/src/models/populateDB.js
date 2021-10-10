// const connection = require('./connection');

const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

// const popDB = async (array) => {
//   const db = await connection();
//   await db.collection('Solid').insertMany(array);
// };

// popDB(defaultPlants);
