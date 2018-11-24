const knex = require("../../knex/knex");

module.exports = {
    InsertDeputies: (deputies) => {
        knex('deputies').insert(deputies).then(() => {
            console.log("INSERT deputies in database - OK");
        }).catch((err) => {
            console.log("INSERT deputies in database - ERROR");
            process.exit();
        });
    },

    InsertSocial: (social) => {
        knex('social').insert(social).then(() => {
            console.log("INSERT social networks in database - OK");
        }).catch(() => {
            console.log("INSERT social networks in database - ERROR");
            process.exit();
        });
    },

    InsertFunds: (funds) => {
        knex('funds').insert(funds).then(() => {
            console.log("INSERT funds:");
            console.log(funds);
        }).catch(() => {
            console.log("INSERT funds in database - ERROR");
        })
    },
}