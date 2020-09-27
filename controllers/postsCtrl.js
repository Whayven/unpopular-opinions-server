const posts = [
  {
    author: "Anon",
    text: "I like my toast very burnt.",
    likes: 12,
    id: 0
  },
  {
    author: "Harold",
    text: "Coronavirus is a government hoax.",
    likes: 6,
    id: 1
  },
  {
    author: "Jack",
    text: "Strawberries are disgusting.",
    likes: 0,
    id: 2
  },
  {
    author: "Anon",
    text: "Golf is a great spectator sport.",
    likes: 12,
    id: 3
  },
]
let id = posts.length;

module.exports = {
  getAllPosts: (req, res) => {
    res.status(200).send(posts);
  },
  updatePostSeals: (req, res) => {
    const { id } = req.params;
    const post = posts.find((el) => el.id === +id);
    post.likes++;
    res.status(200).send(posts);
  },
  createPost: (req, res) => {
    const { author, text } = req.body;
    const post = {
      author,
      text,
      likes: 0,
      id
    };
    posts.unshift(post);
    id++;
    res.status(200).send(posts);
  },
  deletePost: (req, res) => {
    const { id } = req.params;
    const index = posts.findIndex((post) => post.id == id);

    posts.splice(index, 1);
    res.status(200).send(posts);
  }
};
