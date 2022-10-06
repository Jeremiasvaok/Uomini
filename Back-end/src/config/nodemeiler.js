// require("dotenv").config();
// const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI, REFRESH_TOKEN } = process.env;
// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");

// const mail = {
//   user: "jeremias.vallejos78@gmail.com",
// };

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const accessToken = oAuth2Client.getAccessToken();

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: mail.user,
//     clientId: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     refreshToken: REFRESH_TOKEN,
//     accessToken,
//   },
// });

// const sendEmail = async (email, subject, html) => {
//   try {
//     await transporter.sendMail({
//       from: `${mail.user}🎵`,
//       to: email,
//       subject,
//       text: "¡Hola!",
//       html: html,
//     });
//   } catch (error) {
//     console.log("Algo no va bien con el email", error);
//   }
// };

// const getTemplate = (name, token) => {
//   return `
//   <div id="email___content"
//         style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
//         <div style="width:100%;">
//             <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
//             <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Bienvenido!</p>
//         </div>
//         <div
//         style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
//         <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
//         <p style="color: #141414;font-size: 15px; text-align: center;">Estamos muy contentos por tenerte con nosotros. Para continuar, necesitamos que confirmes tu cuenta, solo presiona el siguiente botón:</p>
//             <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
//             <a style="color: #141414; font-size: 15px; text-decoration: underline;margin-left: 95px;"
//                 href="http://localhost:3001/user/confirm/token/${token}" target="_blank"><button
//                     style="background-color: #141414; border-radius: 5px; width: 150px; height: 30px; border: 1px solid; cursor: pointer;color: white;">Confirmar cuenta</button></a><br />
//             <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>
//         </div>
//     </div>
//       `;
// }
// const fargotPasswordTemplate = (name, token) => {
//   return `
//   <div id="email___content"
//         style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
//         <div style="width:100%;">
//             <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
//             <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Bienvenido!</p>
//         </div>
//         <div
//         style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
//         <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
//         <p style="color: #141414;font-size: 15px; text-align: center;">Para cambiar la contraseña apreta el sigiente boton:</p>
//             <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail.</p>
//             <a style="color: #141414; font-size: 15px; text-decoration: underline;margin-left: 95px;"
//                 href="http://localhost:3001/user/fargot/password/token/${token}" target="_blank"><button
//                     style="background-color: #141414; border-radius: 5px; width: 150px; height: 30px; border: 1px solid; cursor: pointer;color: white;">Confirmar cuenta</button></a><br />
//             <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>
//         </div>
//     </div>
//       `;
// }

//  function successForgotPassword(name){
//   return `
//   <div id="email___content"
//         style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
//         <div style="width:100%;">
//             <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
//             <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Bienvenido!</p>
//         </div>
//         <div
//         style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
//         <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">felicitaciones, ${name}</p>
//         <p style="color: #141414;font-size: 15px; text-align: center;">Se cambio la contraseña exitosamente</p>
//             <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail.</p>
//            <br />
//             <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>
//         </div>
//     </div>
//       `;
// }

// module.exports = {
//   sendEmail,
//   getTemplate,
//   fargotPasswordTemplate,
//   successForgotPassword,
// }