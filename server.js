import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contact.html'));
});

app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/info.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/history.html'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
