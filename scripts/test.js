import MongoClient from "mongodb";
$.getJSON('https://ipapi.co/json/', function(data) {
  var url = "mongodb+srv://dbMalBot:emil1999@websitedatabase.0xffv.mongodb.net/IP?retryWrites=true&w=majority";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("IP");
    dbo.collection("IPS").insertMany(JSON.stringify(data, null, 2), function(err, res) {
      if (err) throw err;
      console.log("It worked!");
      db.close();
    });
  });
  // console.log(JSON.stringify(data, null, 2));
});
