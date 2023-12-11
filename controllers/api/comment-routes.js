const router = require('express').Router();
const {Comment} = require('../../models/Index');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try{
        if(req.session){
            const commentData = await Comment.create({
                comment_text: req.body.comment_text,
                user_id: req.session.user_id,
                post_id: req.body.post_id
            });

            res.status(200).json(commentData);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try{
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(deleteComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;