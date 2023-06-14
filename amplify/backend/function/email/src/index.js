const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async function (event) {
    const body = JSON.parse(event.body)
    const {subject, emailBody, toAddress} = body;

    const params = {
        Destination: {
            ToAddresses: [toAddress],
        },
        Message: {
            Body: {
                Text: {
                    Data: emailBody
                },
            },

            Subject: { Data: subject },
        },
        Source: 'auto-mail@twinsilverdesign.com',
    };

    return ses.sendEmail(params).promise()
};