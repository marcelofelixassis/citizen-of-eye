const express = require("express");
const knex = require("../../knex/knex");
const router = express.Router();

router.get("/rank", async (req, res) => {
    try{
        const response = await knex('social')
        .select('social.nome as name')
        .groupBy('social.id')
        .count('social.id as amount')
        .orderBy('amount', 'desc');
        res.send(response);
    }catch(error){
        console.log(error);
    }
})

module.exports = app => app.use("/social", router);