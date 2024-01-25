import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = 3000;
const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.use(express.static('public'));
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {   
    res.render('index.ejs');
});

server.get('/o-nas', (req, res) => {
    res.render('about.ejs');
});

server.get('/kontakt', (req, res) => {
    res.render('contact.ejs');
});


server.get('/galerija', (req, res) => {
    res.render('galery.ejs');
});

server.get('/faq', (req, res) => {
    res.render('faq.ejs');
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});