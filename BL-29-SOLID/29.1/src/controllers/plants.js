const plantsServices = require('../services/plants');

const getAll = async (_req, res) => {
  const { status, data } = await plantsServices.getAll();
  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await plantsServices.getById(id);
  res.status(status).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await plantsServices.remove(id);
  res.status(status).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await plantsServices.update(req.body, id);
  res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data } = await plantsServices.create(req.body);
  res.status(status).json(data);
};

const getByNeedsSun = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await plantsServices.getByNeedsSun(id);
  res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create,
  getByNeedsSun,
};
