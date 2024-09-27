const { Books } = require('../models');

const getall = async (_req, res) => {
  try {
    const books = await Books.findAll();
    res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id);
    res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  } 
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0, createdAt = new Date() } = req.body;
    const book = await Books.create({ title, author, pageQuantity, createdAt });
    res.status(201).json(book);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity = 0, createdAt = new Date() } = req.body;
    const updated = await Books.update(
      { title, author, pageQuantity, createdAt }, { where: { id } },
    );
    res.status(201).json(updated);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id);
    await book.destroy();
    res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getall,
  getById,
  create,
  update,
  remove,
};
