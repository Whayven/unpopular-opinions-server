const users = [
  {
    username: "Admin",
    password: "12345678",
  },
  {
    username: "Brent",
    password: "Princeton",
  },
];

module.exports = {
  loginUser: (req, res) => {
    const { username } = req.params;
    const { password } = req.body;
    let user;
    users.forEach(el => {
      if (el.username === username && el.password === password) {
        user = el;
        return;
      }
    })
    if (user) { res.status(200).send(user) }
    else { res.status(404).send('Not Found')}
  },
};
