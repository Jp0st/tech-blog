const router = require('express').Router();
const {Post} = require('../../models/Index');

router.post('/', async (req, res) => {
    try{
        if(req.session){
            const newPost = await Post.create({
                title: req.body.title,
                content: req.body.content,
                user_id: req.session.user_id
            });

            res.status(200).json(newPost);
        }
    } catch (err) {
        res.status(err).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try{
        const updatePost = await Post.update({
            title: req.body.title,
            content: req.body.content
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(updatePost);
    } catch (err) {
        res.status(err).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(err).json(err);
    }
});

module.exports = router;

