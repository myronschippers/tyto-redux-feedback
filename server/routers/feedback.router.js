const pool = require('../modules/pool');
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    const feedback = req.body;
    // feedback = {
    //     feeling: 0,
    //     support: 0,
    //     understanding: 0,
    //     comments: ''
    // }

    pool.query(
        queryText,
        [
            feedback.feeling,
            feedback.understanding,
            feedback.support,
            feedback.comments
        ]
    )
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

module.exports = router;