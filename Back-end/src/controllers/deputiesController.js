const express = require("express");
const knex = require("../../knex/knex");
const router = express.Router();

router.get("/funds/:mes", async (req, res) => {
    try{
        const response = await knex('deputies')
        .join('funds', 'deputies.id', '=', 'funds.idDeputado')
        .select('deputies.nome as name', 'deputies.partido as pp', 'deputies.atividadeProfissional as ap')
        .groupBy('deputies.id')
        .sum('funds.amount as amount')
        .where(knex.raw('MONTH(funds.dataReferencia) ='+req.params.mes))
        .where('funds.dataReferencia', '>=', '2017-01-01T00:00:00Z')
        .where('funds.dataReferencia', '<', '2018-01-01T00:00:00Z')
        .orderBy('amount', 'desc')
        .limit(5);
        res.send(response);
    }catch(error){
        console.log(error);
    }
});

module.exports = app => app.use("/deputies", router);