const router = require('express').Router();
const { Tag, Product, } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
try {
  //const tagData = await Tag.findAll({ include: [{ model: Product, attributes: ['product_name'] }] });
  const tagData = await Tag.findAll({ include: [{ model: Product }]})
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, { include: [{ model: Product, attributes: ['product_name'] }] });

    if (!tagData) {
      res.status(404).json({ message: 'Could not find tag that matched given id.' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);

    return res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, { where: { id: req.params.id } });

    if (!tagData) {
      res.status(404).json({ message: 'Could not find tag that matched given id.' });
      return;
    }
    return res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({ where: { id: req.params.id } });

    if (!tagData) {
      res.status(404).json({ message: 'Could not find tag that matched given id.' });
      return;
    }
    return res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
