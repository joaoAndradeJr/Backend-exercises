const connection = require('./connection');
const { ObjectID } = require('bson');

const getAll = async () => {
  const db = await connection();
  return db.collection('plants').find().toArray();
};

const getById = async (id) => {
  const db = await connection();
  return db.collection('plants').findOne({ _id: ObjectID(id) });
};

const remove = async (id) => {
  const db = await connection();
  return db.collection('plants').findOneAndDelete({ _id: ObjectID(id) }); 
};

const update = async (plant, id) => {
  const db = await connection();
  await db.collection('plants').updateOne({ _id: ObjectID(id) }, { $set: plant });
  return getById(id);
};

const create = async (plant) => {
  const db = await connection();
  const { insertedId } = await db.collection('plants').insertOne(plant);
  return getById(insertedId);
};

const getByNeedsSun = (id) => {
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create,
  getByNeedsSun,
};
