import nodemailer from "nodemailer";

const sendEmailForgorPassword = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const info = await transport.sendMail({
        from: "Proyecto Fútbol - <proyecto.futbol@gmail.com>",
        to: email,
        subject: "Proyecto Fútbol - Reestablece tu Password",
        text: "Reestablece tu password en Proyecto Fútbol para tener acceso nuevamente a tu cuenta",
        html: `
            <p>Hola ${nombre}, has solicitado reestablecer tu password</p>
            <p>Sigue el siguiente enlace para generar un nuevo password: <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a> </p>

            <p>Si tu no solicitaste este email, puedes ignorar el mensaje.</p>
        `
    })
}

export {
    sendEmailForgorPassword
}