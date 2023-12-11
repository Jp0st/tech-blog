const router = require('express').Router();
const {Post, User, Comment} = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]
        });

        const posts = postData.map((post) => post.get({plain: true}));
        const logged_in = req.session.user_id ? true : false;

        res.render('homepage', {
            posts,
            logged_in,
            user_id: req.session.user_id
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes:{
                        exclude: ['password']
                    },
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: {
                                exclude: ['password']
                            }
                        }
                    ]
                }
            ]
        });

        const post = postData.get({plain: true});
        const logged_in = req.session.user_id ? true : false;

        res.render('post', {
            post,
            logged_in:req.session.logged_in,
            user_id: req.session.user_id
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;