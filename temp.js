// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     const dbo = db.db("chatbot");
//     const product = {
//         "name": "Unique Skin Protector body groomer",
//         "model": "BG1025/15",
//         "function": "TRIMS BODY HAIR, PROTECTS SKIN",
//         "speciality": "even in sensitive areas",
//         "description": "Comfortably trim unwanted body hair so you're always prepared for any occasion. This intuitive tool is designed to be gentle, for worry-free bodygrooming even in your most sensitive areas.",
//         "characteristics": [
//             "Unique Skin Protector",
//             "3mm trimming comb",
//             "100% waterproof",
//             "3 AA batteries"
//         ],
//         "price": "1270",
//         "rating": "3.9",
//         "video_link": ""
//     };
//     // dbo.createCollection("products", function (err, res) {
//     //     if (err) throw err;
//     //     console.log("Collection created!");
//     //     db.close();
//     // });
//     // dbo.collection("products").insertOne(product, function (err, res) {
//     //     if (err) throw err;
//     //     console.log("1 document inserted");
//     //     db.close();
//     // });
//     // dbo.collection("products").drop(function(err, delOK) {
//     //     if (err) throw err;
//     //     if (delOK) console.log("Collection deleted");
//     //     db.close();
//     //   });
//     dbo.collection("products").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(JSON.stringify(result));
//         db.close();
//       });
//     // var dbo = db.db("chatbot");
//     // var user = {
//     //     "id": 'jagruteebanda',
//     //     "name": 'Jagrutee Banda',
//     //     "avatar_url": "https://gravatar.com/img/8819",
//     //     "custom_data": {
//     //         "age": 24,
//     //         "email": "jagrutee.banda@gmail.om"
//     //     },
//     //     "created_at": "2017-03-23T11:36:42Z",
//     //     "updated_at": "2017-03-23T11:36:42Z"
//     // };
//     // dbo.collection("users").insertOne(user, function (err, res) {
//     //     if (err) throw err;
//     //     console.log("1 document inserted");
//     //     db.close();
//     // });
//     // dbo.collection("users").findOne({}, function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     //     db.close();
//     // });
//     // dbo.collection("users").find({}).toArray((err, res) => {
//     //     if (err) throw err;
//     //     console.log(res);
//     //     db.close();
//     // });
//     // const myquery = { id: 'jagruteebanda' };
//     // dbo.collection("users").deleteOne(myquery, function (err, obj) {
//     //     if (err) throw err;
//     //     console.log("1 document deleted", obj);
//     //     db.close();
//     // });
//     // const myquery = { id: "jagruteebanda" };
//     // const newvalues = { $set: { name: "Jag Banda" } };
//     // dbo.collection("users").updateOne(myquery, newvalues, function (err, res) {
//     //     if (err) throw err;
//     //     console.log("1 document updated ", res);
//     //     db.close();
//     // });
// });

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://jagruteebanda:jagz@123@cluster0-imu9r.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   if (err) throw err;
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("connected");
//   client.close();
// });

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://jagruteebanda:jagz%40123@cluster0-imu9r.mongodb.net";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
  if (err) throw err;
  const dbo = db.db("chatbot");

  /* TRUNCATE COLLECTION - rooms */
  // dbo.collection("rooms").remove({}, function(err, obj) {
  //   if (err) throw err;
  //   console.log(obj.result.n + " document(s) deleted");
  //   db.close();
  // });

  /* CREATE COLLECTION - products */
  //   dbo.createCollection("products", function(err, res) {
  //     if (err) throw err;
  //     console.log("Collection created!");
  //     db.close();
  //   });

  /* CREATE COLLECTION - users */
  // dbo.createCollection("users", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!", res);
  //   db.close();
  // });

  /* CREATE COLLECTION - rooms */
  // dbo.createCollection("rooms", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!", res);
  //   db.close();
  // });

  /* CREATE COLLECTION - chats */
  // dbo.createCollection("chats", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!", res);
  //   db.close();
  // });

  // const product = {
  //   name: "CloseCut shaving head Electric Shaver Wet & Dry",
  //   model: "AT610/14",
  //   function: "Great skin protection, smooth shave",
  //   speciality: "Great skin protection, smooth shave",
  //   description:
  //     "Now you can enjoy a refreshing shave without worrying about damaging your skin. Use AquaTouch with shaving gel or foam for enhanced skin comfort. Aquatec seal ensures a safe, refreshing wet shave. Or use dry for a convenient quick shave.",
  //   characteristics: ["CloseCut shaving head", "Wet&Dry"],
  //   price: "2845",
  //   rating: "4.0",
  //   img_link: [
  //     "https://images.philips.com/is/image/PhilipsConsumer/AT610_14-IMS-en_IN?wid=1000&hei=800&$jpgsmall$",
  //     "https://images.philips.com/is/image/PhilipsConsumer/AT610_14-D1P-global-001?wid=1000&hei=800&$jpgsmall$",
  //     "https://images.philips.com/is/image/PhilipsConsumer/AT610_14-DPP-global-001?wid=1000&hei=800&$jpgsmall$",
  //     "https://images.philips.com/is/image/PhilipsConsumer/AT610_14-MI1-global-001?wid=1000&hei=800&$jpgsmall$"
  //   ],
  //   video_link: ""
  // };
  // dbo.collection("products").insertOne(product, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted", res);
  //   db.close();
  // });
  // dbo.collection("products").findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });
});
