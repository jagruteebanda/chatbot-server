var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chatbot";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("chatbot");
    var user = {
        "id": 'jagruteebanda',
        "name": 'Jagrutee Banda',
        "avatar_url": "https://gravatar.com/img/8819",
        "custom_data": {
            "age": 24,
            "email": "jagrutee.banda@gmail.om"
        },
        "created_at": "2017-03-23T11:36:42Z",
        "updated_at": "2017-03-23T11:36:42Z"
    };
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
    dbo.collection("users").find({}).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    });
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