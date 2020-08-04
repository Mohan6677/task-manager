const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const Welcome = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'mohantummala9375@gmail.com',
        subject: 'Thanks For Joining In.',
        text:`welcome to the app, ${name}. let me know how you get along with the app.`

    })
}

const cancel = (email,name)=>{
    sgMail.send({
        to:email,
        from:'mohantummala9375@gmail.com',
        subject:'Sorry to See You go',
        text: `GoodBye,${name}. I hope to see you back sometiem soon.`
    })
}
module.exports = {Welcome,cancel}