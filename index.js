const express = require("express");
const cors = require("cors");

const postsCtrl = require("./controllers/postsCtrl");
const usersCtrl = require("./controllers/usersCtrl");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/posts", postsCtrl.getAllPosts);
app.post("/api/posts", postsCtrl.createPost);
app.put("/api/posts/:id", postsCtrl.updatePostSeals);
app.delete("/api/posts/:id", postsCtrl.deletePost);

app.post("/api/users/:username", usersCtrl.loginUser);

app.listen(3001, () => console.log("Server is running on port 3001"));
