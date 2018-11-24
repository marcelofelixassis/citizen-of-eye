import * as constants from "../utils/constants";
const axios = require("axios");
const insert = require("./insert");

module.exports = {

    GetAllDeputies: async () => {
        try {
            const response = await axios.get(constants.URL_GET_DEPUTIES, {
                params: {
                    formato: "json"
                }
            });
            return response.data.list;
        } catch (err) {
            console.log(err);
            process.exit();
        }
    },

    GetAllFunds: async (deputiesIds) => { 
        var aux = 0;  
        await Promise.all(
            deputiesIds.map(async (id, ind) => {
                for(let i = 1; i <= 12; i++){
                    await axios.get(constants.URL_GET_FUNDS+""+id+"/2017/"+i+"?formato=json")
                    .then((response) => {
                        response.data.list.map((element) => {  
                            aux++;
                            setTimeout(() => {                        
                                let dataReferencia = element.dataReferencia.$;
                                let amount = Object.keys(element.listaDetalheVerba).length;
                                let objectReturn = Object({"idDeputado": id, "dataReferencia": dataReferencia, "amount": amount});
                                insert.InsertFunds(objectReturn);
                            }, (Math.floor((Math.random() * 3000) + 3500)) * aux);
                        });
                    }).catch((err) => {
                        setTimeout(() => {
                            console.log(err);
                        }, (Math.floor((Math.random() * 3000) + 3500)) * aux);
                    })
                }
            })
        )
        console.log("Ready!");
    },
}