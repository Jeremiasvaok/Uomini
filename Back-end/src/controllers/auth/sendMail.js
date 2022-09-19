 
const getTemplate = (name, token) => {
    return `
    <div id="email___content"
          style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
          <div style="width:100%;">
              <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
              <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Bienvenido!</p>
          </div>
          <div
          style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
          <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
          <p style="color: #141414;font-size: 15px; text-align: center;">Estamos muy contentos por tenerte con nosotros. Para continuar, necesitamos que confirmes tu cuenta, solo presiona el siguiente botón:</p>
              <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
              <a style="color: #141414; font-size: 15px; text-decoration: underline;margin-left: 95px;"
                  href="https://script-music.herokuapp.com/user/confirm/token/${token}" target="_blank"><button
                      style="background-color: #141414; border-radius: 5px; width: 150px; height: 30px; border: 1px solid; cursor: pointer;color: white;">Confirmar cuenta</button></a><br />
              <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>
          </div>
      </div>
        `;
  };


module.exports ={ getTemplate }