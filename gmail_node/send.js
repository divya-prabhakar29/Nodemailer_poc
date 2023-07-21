const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port :587,
  secure : false,
  auth: {
    user: "prabhakardivya02@gmail.com",
    pass: "rggnzrywephcbjks",
  },
  from : "prabhakardivya02@gmail.com"
});

const mailOptions = {
  from: "prabhakardivya02@gmail.com",
  to: "divya29prabhakar@gmail.com ",
  subject: "Nodemailer Gmail Sample ",
  html: {path :'D:/gmail_node/Amp-email.html'  },
  attachments :{
    filename :"logo_lanscape.jpg",
    path : __dirname+'/logo_lanscape.jpg'
  },
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
