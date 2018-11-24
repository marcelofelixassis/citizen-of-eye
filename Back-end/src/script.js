const express = require("express");
const service = require("./services/service");
const insert = require("./services/insert");
const cors = require("cors");

var app = express();

app.use(cors());

app.listen(4000, () => {
    var social = Array();
    var deputiesIds = Array();

    service.GetAllDeputies().then((deputiesData) => {
        console.log("GET "+Object.keys(deputiesData).length+" deputies - OK");

       
        deputiesData.map((element, index) => {
            if((element.redesSociais).length > 0){
                element.redesSociais.map(element => {
                    delete element.redeSocial.url;
                    social.push(element.redeSocial);
                })
            }
            delete deputiesData[index].redesSociais;
            deputiesIds.push(element.id);
        });

        insert.InsertDeputies(deputiesData);
        console.log("GET "+Object.keys(social).length+" social networks - OK");
        insert.InsertSocial(social);

        service.GetAllFunds(deputiesIds);

    }); 
});