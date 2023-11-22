// Create web server  (express)
// Create router object (express.Router())
// Create routes (router.get(), router.post())
// Export router (module.exports = router)
// Import router in index.js (const comments = require('./routes/comments'))
// Add router to middleware stack (app.use('/comments', comments))

const express = require('express');
const router = express.Router();

const comments = [
    { id: 1, username: 'Todd', comment: 'lol that is so funny!' },
    { id: 2, username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
    { id: 3, username: 'onlysayswoof', comment: 'woof woof woof' },
    { id: 4, username: 'iliketurtles', comment: 'my comment is turtles' }
]

// GET /comments - list all comments
router.get('/', (req, res) => {
    res.render('comments/index', { comments });
})

// GET /comments/new - show new comment form
router.get('/new', (req, res) => {
    res.render('comments/new');
})

// POST /comments - create a new comment
router.post('/', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/comments');
})

module.exports = router;

