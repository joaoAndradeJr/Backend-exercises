const plantsModels = require('../models/plants');

const getAll = async () => {
  const plants = await plantsModels.getAll();
  return { status: 200, data: plants };
};

const getById = async (id) => {
  const plant = await plantsModels.getById(id);
  return { status: 200, data: plant };
};

const remove = async (id) => {
  const { value } = await plantsModels.remove(id);
  return { status: 201, data: value };
};

const update = async (plant, id) => {
  const editedPlant = await plantsModels.update(plant, id);
  return { status: 201, data: editedPlant };
};

const create =  async (plant) => {
  const createdPlant = await plantsModels.create(plant);
  return { status: 201, data: createdPlant };
};

const getByNeedsSun = async (id) => {
  const plant = await plantsModels.getByNeedsSun(id);
  return { status: 200, data: plant };
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create,
  getByNeedsSun,
};
