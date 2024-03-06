const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Could not find Category that matched given id.' });
      return;
    }
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const categoryData = await Category.update(req.body, { where: { id: req.params.id, }});

    if (!categoryData) {
      res.status(404).json({ message: 'Could not find Category that matched given id.' });
      return;
    }
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
