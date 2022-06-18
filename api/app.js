const express = require("express");
const app = express();
const port = 4000;
var Twitter = require("twitter");
var cors = require("cors");
app.use(cors());


// DO NOT SHARE THESE KEYS
const client = new Twitter({
  consumer_key: "pR6UYXUb0bqM7fzEIH3TvNdFF",
  consumer_secret: "XriYOegl217ouBiOPyAzjcg1AH94IehQtN4Uy2tcb5cdxwNkec",
  access_token_key: "1280074013528768513-dGwRj9nbJhacZ9VLSDS1ympwGW9PjC",
  access_token_secret: "9YtXj6QadwhB4HeDjcRWeaLgZiriYZUZf0RjZzSuuNK0x",
});


app.get("/api/users/:search", function (req, res) {

  //TODO update the q property so it holds the value of the search request parameter
  let searchParam = { q: req.params.search };
  let result = []
  client.get("users/search", searchParam, function (error, data, response) {
    if(error) {res.status(404).json({error: "Invalid search"})}
    else {
      data.forEach(element => {
      let temp = {};
      temp.screen_name = element.screen_name;
      temp.name = element.name;
      temp.statuses_count = element.statuses_count;
      temp.friends_count = element.friends_count;
      temp.followers_count = element.followers_count;
      temp.profile_image_url_https = element.profile_image_url_https;
      result.push(temp);
    });
    
    res.status(200).json({data: result})
  }
    //TODO populate the result array with each member of the data object's
    // you need to retrieve the following properties from each data object:
    // screen_name, name, statuses_count, friends_count, followers_count and profile_image_url_https
    // you should send your response back with an object that is the following: { data: result}
  });
});

app.listen(port, () =>
  console.log(`Project4 app listening at http://localhost:${port}`)
);
