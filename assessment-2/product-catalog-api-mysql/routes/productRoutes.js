const express = require('express');
const router = express.Router();
const db = require('../db/db');

// CREATE: Tambah produk baru
router.post('/products', async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO products (name, description, price, category, stock) VALUES (?, ?, ?, ?, ?)',
      [name, description, price, category, stock]
    );
    res.status(201).json({ id: result.insertId, name, description, price, category, stock });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ: Ambil semua produk
router.get('/products', async (req, res) => {
  try {
    const [products] = await db.execute('SELECT * FROM products');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ: Ambil satu produk berdasarkan ID
router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [products] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
    if (products.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(products[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE: Ubah produk berdasarkan ID
router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, stock } = req.body;
  try {
    const [result] = await db.execute(
      'UPDATE products SET name = ?, description = ?, price = ?, category = ?, stock = ? WHERE id = ?',
      [name, description, price, category, stock, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ id, name, description, price, category, stock });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Hapus produk berdasarkan ID
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.execute('DELETE FROM products WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
