const { Books } = require('../models');

const getall = async (_req, res) => {
  const books = await Books.findAll();
  res.status(200).json(books);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await Books.findByPk(id);
  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity = 0, createdAt = new Date() } = req.body;
  const book = await Books.create({ title, author, pageQuantity, createdAt });
  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity = 0, createdAt = new Date() } = req.body;
  const updated = await Books.update({ title, author, pageQuantity, createdAt }, { where: { id } });
  res.status(201).json(updated);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const book = await Books.findByPk(id);
  await book.destroy();
  res.status(200).json(book);
}

module.exports = {
  getall,
  getById,
  create,
  update,
  remove,
};
