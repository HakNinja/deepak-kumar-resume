const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
dotenv.config({ path : './config.env' })

mongoose.connect(process.env.DBAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("[ User Database Connected... ]");
}).catch((e) => {
    console.log("[ User Database Connection Error! ]");
})

const contactschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        required: true,
        type: String
    },
    contactno: {
        type: Number,
        required: true
    },
    email: {
        // unique:true,
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
const contactschematable = new mongoose.model("contactus", contactschema);

const projectqueueschema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    contactno:{
        type: Number,
        required: true
    },
    altcontactno:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    briefinfo:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    projectinfo:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    projecttype:{
        type: String,
        required: true
    }
})
const projectqueueschematable = new mongoose.model("projectqueue", projectqueueschema);

function sendEmailfun(email, name, phone,message) {
    var transporter = nodemailer.createTransport({
        service: process.env.services,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })

    transporter.sendMail({
        from: process.env.from,
        to: email,
        subject: "Support",
        html: `<pre>Hi <b>${name}</b>,

            Thanks for getting in touch with us. 
            We've got your details as:

            Name : <b>${name}</b>,
            Contact number : <b>${phone}</b>,
            Your query:<i>${message}</i>

            We will get back to you in next 24 hours.
            Need help in the meantime check out our Contact Page for more.
            
            With Best Regards from,
            Deepak Kumar.
            Thank You
            
            <i>For More Support.. Mail us at @officialcharanjeetsinghsidhu@gmail.com</i>

            <i>***** This is an autogenrated email. Please don't reply back.*****</pre>`,
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).send("Mail sent Sucessfully");
        }
    })
}

function sendEmailfunadmin(email, name, phone,message) {
    var transporter = nodemailer.createTransport({
        service: process.env.services,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })

    transporter.sendMail({
        from: process.env.from,
        to: process.env.user,
        subject:  `${name} user wants to reach you..` ,
        html: `<pre>Dear <b> Admin</b>,
            ${name} , has put a query to reach you Via your mail.
            Kindly checkout the database and reply-back the customer ASAP.
            
            Details of the customer is:
            
            Name : <b>${name}</b>
            Contact number : <b>${phone}</b>
            Query:<i>${message}</i>
            
            Admin
            Thank You

            <i>For more Support..Mail us at @officialcharanjeetsinghsidhu@gmail.com</i>

            <i>***** This is an autogenrated email. Please don't reply back.*****</pre>`,
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Mail Sent to the admin.")
        }
    })
}

app.post("/contactus", async(req, res) => {
    const { firstname, lastname, email, contactno, message } = req.body;
    // const temp = await contactschematable.findOne({email:email})
    // if (!temp){
    const contactperson = new contactschematable({
        firstname:firstname,
        lastname: lastname,
        contactno:contactno,
        email: email,
        message:message
    })
    console.log("mail sending")
    // sendEmailfun(email, firstname+' '+lastname, contactno,message)
    // sendEmailfunadmin(email,firstname+' '+lastname, contactno,message)
    await contactperson.save(err => {
        if (err) {
            console.log(err)
            res.send({ alertmsg: "Server Error ... " })
        } else {
            console.log("data saved")
            res.send({ alertmsg: "Thank you for Contacting us...Soon I'll Back to you!" })
        }
    })
    // } else {
        // res.send({ alertmsg: "Already" })
    // }
})

app.post("/projectqueue", (req, res) => {
    const { firstname, lastname, contactno, altcontactno, email, projectinfo, briefinfo, note, country, projecttype} = req.body;
    const projectqueueperson = new projectqueueschematable({
        firstname:firstname,
        lastname:lastname,
        contactno:contactno,
        altcontactno:altcontactno,
        email:email,
        briefinfo:briefinfo,
        note:note,
        projectinfo:projectinfo,
        country:country,
        projecttype:projecttype
    })
    console.log("mail sending")
    sendEmailfun(email, firstname+' '+lastname, contactno,"Some Project Query")
    sendEmailfunadmin(email,firstname+' '+lastname, contactno,"Some Project Query")
    projectqueueperson.save(err => {
        if (err) {
            console.log(err)
            res.send({ alertmsg: "Server Error ... " })
        } else {
            console.log("data saved")
            res.send({ alertmsg: "Thank you for Contacting us...Soon I'll Back to you!" })
        }
    })
})

if (process.env.NODE_ENV == "production"){
    app.use(express.static("websitefrontend/build"));
    const path = require("path")
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'websitefrontend', 'build', 'index.js'));
    })
}

app.listen(PORT, () => {
    console.log(`server started at:${PORT}`)
});