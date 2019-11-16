const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://semana:semana@rocketseat-instagram-clone-k8biw.mongodb.net/test?retryWrites=true&w=majority", {
     useNewUrlParser: true,
     useUnifiedTopology: true
});

app.use(require('./routes'));

app.listen(3333);
