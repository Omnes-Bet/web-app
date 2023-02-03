const mail = require("@sendgrid/mail")
const sendGridKey = "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"
mail.setApiKey(sendGridKey);

export default async (req, res) => {
    const body = JSON.parse(req.body);

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `

    const msg = {
        to: body.email, // Change to your recipient
        from: 'daniel.alves@omnesbet.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }

    const emailResult = await mail.send(msg)

    res.status(200).json(emailResult);
}