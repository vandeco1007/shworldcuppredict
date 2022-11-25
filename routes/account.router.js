const express = require('express')
const asyncHandller = require('../middlewares/async.middleware')
const authorization = require('../middlewares/auth.middleware')
const {
    getAllAccount,
    signup,
    login
} = require('../controllers/account.controller')

const {
    getData,
    deleteData
} = require('../controllers/data.controller')

const {
    getOption,
    createOption,
    deleteOption
} = require('../controllers/matchOption.controller')

const router = express.Router()

router.route('/')
.get(
    getAllAccount
)

router.route('/signup')
.post(
    signup
)

router.route('/login')
.post(
    login
)

router.route('/admin/data')
.get(
    // asyncHandller(authorization),
    getData
)
.delete(
    deleteData
)

router.route('/admin/matchoption')
.get(
    getOption
)
.post(
    createOption
)
.delete(
    deleteOption
)

router.route('/admin/addmatch')
.post(
    async(req,res,next)=>{
        let create = matches.create(
            [
                {
                    "group": "B",
                    "local_date": "11/25/2022 18:00:00 GMT+0800",
                    "home_team_en": "Iran",
                    "away_team_en": "Wales",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/125px-Flag_of_Iran.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/125px-Flag_of_Wales_%281959%29.svg.png"
                },
                {
                    "group": "A",
                    "local_date": "11/25/2022 21:00:00 GMT+0800",
                    "home_team_en": "Qatar",
                    "away_team_en": "Senegal",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/125px-Flag_of_Senegal.svg.png"
                },
                {
                    "group": "A",
                    "local_date": "11/26/2022 00:00:00 GMT+0800",
                    "home_team_en": "Netherlands",
                    "away_team_en": "Ecuador",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/125px-Flag_of_Ecuador.svg.png"
                },
                {
                    "group": "B",
                    "local_date": "11/26/2022 03:00:00 GMT+0800",
                    "home_team_en": "England",
                    "away_team_en": "United States",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/125px-Flag_of_England.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"
                },
                {
                    "group": "D",
                    "local_date": "11/26/2022 18:00:00 GMT+0800",
                    "home_team_en": "Tunisia",
                    "away_team_en": "Australia",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/125px-Flag_of_Tunisia.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png"
                },
                {
                    "group": "C",
                    "local_date": "11/26/2022 21:00:00 GMT+0800",
                    "home_team_en": "Poland",
                    "away_team_en": "Saudi Arabia",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png"
                },
                {
                    "group": "D",
                    "local_date": "11/27/2022 00:00:00 GMT+0800",
                    "home_team_en": "France",
                    "away_team_en": "Denmark",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/125px-Flag_of_Denmark.svg.png"
                },
                {
                    "group": "C",
                    "local_date": "11/27/2022 03:00:00 GMT+0800",
                    "home_team_en": "Argentina",
                    "away_team_en": "Mexico",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png"
                },
                {
                    "group": "E",
                    "local_date": "11/27/2022 18:00:00 GMT+0800",
                    "home_team_en": "Japan",
                    "away_team_en": "Costa Rica",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png"
                },
                {
                    "group": "F",
                    "local_date": "11/27/2022 21:00:00 GMT+0800",
                    "home_team_en": "Belgium",
                    "away_team_en": "Morocco",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/125px-Flag_of_Belgium.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/125px-Flag_of_Morocco.svg.png"
                },
                {
                    "group": "F",
                    "local_date": "11/28/2022 00:00:00 GMT+0800",
                    "home_team_en": "Croatia",
                    "away_team_en": "Canada",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/125px-Flag_of_Croatia.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png"
                },
                {
                    "group": "E",
                    "local_date": "11/28/2022 03:00:00 GMT+0800",
                    "home_team_en": "Spain",
                    "away_team_en": "Germany",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png"
                },
                {
                    "group": "G",
                    "local_date": "11/28/2022 18:00:00 GMT+0800",
                    "home_team_en": "Serbia",
                    "away_team_en": "Cameroon",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/125px-Flag_of_Cameroon.svg.png"
                },
                {
                    "group": "H",
                    "local_date": "11/28/2022 21:00:00 GMT+0800",
                    "home_team_en": "South Korea",
                    "away_team_en": "Ghana",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/125px-Flag_of_Ghana.svg.png"
                },
                {
                    "group": "G",
                    "local_date": "11/29/2022 00:00:00 GMT+0800",
                    "home_team_en": "Brazil",
                    "away_team_en": "Switzerland",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/100px-Flag_of_Switzerland.svg.png"
                },
                {
                    "group": "H",
                    "local_date": "11/29/2022 03:00:00 GMT+0800",
                    "home_team_en": "Portugal",
                    "away_team_en": "Uruguay",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png"
                },
                {
                    "group": "B",
                    "local_date": "11/30/2022 03:00:00 GMT+0800",
                    "home_team_en": "England",
                    "away_team_en": "Wales",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/125px-Flag_of_England.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/125px-Flag_of_Wales_%281959%29.svg.png"
                },
                {
                    "group": "B",
                    "local_date": "11/30/2022 03:00:00 GMT+0800",
                    "home_team_en": "Iran",
                    "away_team_en": "United States",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/125px-Flag_of_Iran.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"
                },
                {
                    "group": "A",
                    "local_date": "11/29/2022 23:00:00 GMT+0800",
                    "home_team_en": "Ecuador",
                    "away_team_en": "Senegal",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/125px-Flag_of_Ecuador.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/125px-Flag_of_Senegal.svg.png"
                },
                {
                    "group": "A",
                    "local_date": "11/29/2022 23:00:00 GMT+0800",
                    "home_team_en": "Netherlands",
                    "away_team_en": "Qatar",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png"
                },
                {
                    "group": "D",
                    "local_date": "11/30/2022 23:00:00 GMT+0800",
                    "home_team_en": "Denmark",
                    "away_team_en": "Australia",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/125px-Flag_of_Denmark.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png"
                },
                {
                    "group": "D",
                    "local_date": "11/30/2022 23:00:00 GMT+0800",
                    "home_team_en": "Tunisia",
                    "away_team_en": "France",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/125px-Flag_of_Tunisia.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png"
                },
                {
                    "group": "C",
                    "local_date": "12/1/2022 03:00:00 GMT+0800",
                    "home_team_en": "Poland",
                    "away_team_en": "Argentina",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png"
                },
                {
                    "group": "C",
                    "local_date": "12/1/2022 03:00:00 GMT+0800",
                    "home_team_en": "Saudi Arabia",
                    "away_team_en": "Mexico",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png"
                },
                {
                    "group": "F",
                    "local_date": "12/1/2022 23:00:00 GMT+0800",
                    "home_team_en": "Croatia",
                    "away_team_en": "Belgium",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/125px-Flag_of_Croatia.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/125px-Flag_of_Belgium.svg.png"
                },
                {
                    "group": "F",
                    "local_date": "12/1/2022 23:00:00 GMT+0800",
                    "home_team_en": "Canada",
                    "away_team_en": "Morocco",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/125px-Flag_of_Morocco.svg.png"
                },
                {
                    "group": "E",
                    "local_date": "12/2/2022 03:00:00 GMT+0800",
                    "home_team_en": "Japan",
                    "away_team_en": "Spain",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png"
                },
                {
                    "group": "E",
                    "local_date": "12/2/2022 03:00:00 GMT+0800",
                    "home_team_en": "Costa Rica",
                    "away_team_en": "Germany",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png"
                },
                {
                    "group": "H",
                    "local_date": "12/2/2022 23:00:00 GMT+0800",
                    "home_team_en": "Ghana",
                    "away_team_en": "Uruguay",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/125px-Flag_of_Ghana.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png"
                },
                {
                    "group": "H",
                    "local_date": "12/2/2022 23:00:00 GMT+0800",
                    "home_team_en": "South Korea",
                    "away_team_en": "Portugal",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png"
                },
                {
                    "group": "G",
                    "local_date": "12/3/2022 03:00:00 GMT+0800",
                    "home_team_en": "Serbia",
                    "away_team_en": "Switzerland",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/100px-Flag_of_Switzerland.svg.png"
                },
                {
                    "group": "G",
                    "local_date": "12/3/2022 03:00:00 GMT+0800",
                    "home_team_en": "Brazil",
                    "away_team_en": "Cameroon",
                    "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png",
                    "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/125px-Flag_of_Cameroon.svg.png"
                }
        
        ]
        )
    }
)


module.exports = router