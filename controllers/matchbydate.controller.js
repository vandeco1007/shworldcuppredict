var axios = require('axios');

module.exports = (req,res,next)=>{
    var data = JSON.stringify(req.body);
    
    var config = {
      method: 'post',
      url: 'http://api.cup2022.ir/api/v1/bydate',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNjA5ZWY5YzMyYjNmNjM3YjdlYTUiLCJpYXQiOjE2NjkyOTIzNDUsImV4cCI6MTY2OTM3ODc0NX0.hkofzw_k3aKHctCmV50KL9M8QyUZx_m6M5Dr69tEhAM', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
        let i = -1
        homeTeam = {}
        let team = []
        response.data.data.forEach(items => {
            i++
            team.push({['home']:response.data.data[i].home_team_en
              ,['away']:response.data.data[i].away_team_en
              ,['home_score']:response.data.data[i].home_score
              ,['away_score']:response.data.data[i].away_score
              ,['group']:response.data.data[i].group
              ,['local_date']:response.data.data[i].local_date
              ,['home_flag']:response.data.data[i].home_flag
              ,['away_flag']:response.data.data[i].away_flag
            }  
          )
        });
        res.json(team)
    })
    .catch(function (error) {
      console.log(error);
    });
    
}