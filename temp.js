var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("chatbot");
    const product = {
        "name": "Unique Skin Protector body groomer",
        "model": "BG1025/15",
        "function": "TRIMS BODY HAIR, PROTECTS SKIN",
        "speciality": "even in sensitive areas",
        "description": "Comfortably trim unwanted body hair so you're always prepared for any occasion. This intuitive tool is designed to be gentle, for worry-free bodygrooming even in your most sensitive areas.",
        "characteristics": [
            "Unique Skin Protector",
            "3mm trimming comb",
            "100% waterproof",
            "3 AA batteries"
        ],
        "price": "1270",
        "rating": "3.9",
        "video_link": ""
    };
    // dbo.createCollection("products", function (err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // });
    // dbo.collection("products").insertOne(product, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // });
    // dbo.collection("products").drop(function(err, delOK) {
    //     if (err) throw err;
    //     if (delOK) console.log("Collection deleted");
    //     db.close();
    //   });
    dbo.collection("products").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        db.close();
      });
    // var dbo = db.db("chatbot");
    // var user = {
    //     "id": 'jagruteebanda',
    //     "name": 'Jagrutee Banda',
    //     "avatar_url": "https://gravatar.com/img/8819",
    //     "custom_data": {
    //         "age": 24,
    //         "email": "jagrutee.banda@gmail.om"
    //     },
    //     "created_at": "2017-03-23T11:36:42Z",
    //     "updated_at": "2017-03-23T11:36:42Z"
    // };
    // dbo.collection("users").insertOne(user, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // });
    // dbo.collection("users").findOne({}, function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });
    // dbo.collection("users").find({}).toArray((err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // });
    // const myquery = { id: 'jagruteebanda' };
    // dbo.collection("users").deleteOne(myquery, function (err, obj) {
    //     if (err) throw err;
    //     console.log("1 document deleted", obj);
    //     db.close();
    // });
    // const myquery = { id: "jagruteebanda" };
    // const newvalues = { $set: { name: "Jag Banda" } };
    // dbo.collection("users").updateOne(myquery, newvalues, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated ", res);
    //     db.close();
    // });
});