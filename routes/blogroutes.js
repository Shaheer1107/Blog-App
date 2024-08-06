import express from 'express';

const router = express.Router();
let posts = [];

router.get('/', (req, res) => {
    res.render('index.ejs', { posts });
})


router.get('/create', (req, res) => {
    res.render('create.ejs');
})


router.post('/create', (req, res) => {
   const {title, content} = req.body;
   posts.push({title, content});
   res.redirect('/');
})


router.get('/edit/:id', (req, res) => {
   const target = posts[req.params.id - 1];
   res.render('edit.ejs',{target, id: req.params.id});
})


router.post('/edit/:id', (req, res) => {
    const { title, content } = req.body;
    const target = posts[req.params.id - 1];
    target.title = title;
    target.content = content;
    res.redirect('/');
})

router.post('/delete/:id', (req, res) => {
    posts.splice(req.params.id  - 1, 1);
    res.redirect('/');
})


export default router;





