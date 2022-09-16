const nodemailer = require('nodemailer')
const { google} = require('googleapis')
require('dotenv').config()
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env

const mail = {
  user: "jeremias.vallejos78@gmail.com",
};

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const accessToken = oAuth2Client.getAccessToken();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: mail.user,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken,
  },
});

const sendEmail = async () => {
  try {
    await transporter.sendMail({
      from: `${mail.user}🎵`,
      to: "vallejosjeremias14@gmail.com",
      subject:'prueba',
      text: "¡Hola!"
    });
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};
sendEmail()