import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/public')));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('Hello', { name: req.params.name });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
