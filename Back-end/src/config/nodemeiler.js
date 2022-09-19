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

const sendEmail = async (email,subject,mensa) => {
  try {
    await transporter.sendMail({
      from: `${mail.user}`,
      to: email,
      subject,
      text: '!Hola¡',
      html: mensa
    });
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};

module.exports = {
  sendEmail
}