const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { name, email, message } = JSON.parse(req.body);

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: "587",
    auth: {
      user: "daniel.alves@omnesbet.com",
      pass: "Helo150517",
    },
  });

  transporter
    .sendMail({
      from: `"Fred Foo 👻" <daniel.alves@omnesbet.com>`, // sender address
      to: "daniel.alves@omnesbet.com", // list of receivers
      subject: "User Question / Ask for Support", // Subject line
      text: message, // plain text body
      html: `<div>
      <h2>Hi, I'm ${name}</h2>
      <h2>My email adress is ${email}</h2>
      <b>Could you ask me the following question?:</b>
      <p>${message}</p>
      </div>`, // html body
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
};
