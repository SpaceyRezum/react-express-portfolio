require('dotenv').config();
var validator = require('validator');
var nodemailer = require('nodemailer');
var smtpConfig = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: process.env.GMAIL_SMTP_USERNAME,
        pass: process.env.GMAIL_SMTP_APPPASSWORD
    },
}
var transporter = nodemailer.createTransport(smtpConfig);

exports.sendEmail = function (req, res) {
    if (req.headers.referer.indexOf('alexis-bellet.com') < 0) {
        res.status(400).send("Referer is not allowed for this call");
        return;
    } else {
        var result = validateRequest(req.body.name, req.body.email, req.body.subject, req.body.message);
        if (result.success) {
            var emailParams = {
                from: "info@alexis-bellet.com",
                to: "info@alexis-bellet.com",
                subject: "[alexis-bellet.com] New contact from " + req.body.name,
                text: "Message from " + req.body.name + "\n" +
                    "With the email address: " + req.body.email + "\n" +
                    "And the following subject: " + req.body.subject + "\n" +
                    "Here\'s the message: " + req.body.message
            }
            var promise = new Promise(function (resolve, reject) {
                transporter.sendMail(emailParams, function (error, response) {
                    if (!error)
                        resolve();
                    else
                        reject(error);
                })
            });

            promise.then(function () {
                res.status(200);
                res.send("Your message was sent successfully, thank you!");
            }).catch(function (error) {
                console.log(error);
                res.status(400);
                res.send("Message could not be sent, please try again and contact info@alexis-bellet.com if the problem persists.");
            });
        }
        else {
            res.status(400).json(result);
        }
    }
}

const validateRequest = function (name, email, subject, message) {
    var result;
    var valueArray = [name, email, subject, message];
    valueArray.forEach(function (element, index) {
        if (validator.isEmpty(element)) {
            result = {
                success: false,
                message: "All fields are required, at least one field is currently empty"
            };
            return;
        } else if (index === 1 && !validator.isEmail(element)) {
            result = {
                success: false,
                message: "Email field is not of correct format"
            };
            return;
        } else {
            result = {
                success: true
            };
            return;
        }
    });

    if (result)
        return result;
}