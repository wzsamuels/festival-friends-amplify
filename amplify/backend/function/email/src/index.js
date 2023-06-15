const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async function (event) {
    const body = JSON.parse(event.body)
    const {subject, emailBody, toAddress} = body;

    console.log(body);

    const params = {
        Destination: {
            ToAddresses: [toAddress],
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailBody
                },
            },

            Subject: { Data: subject },
        },
        Source: 'auto-mail@twinsilverdesign.com',
    };

    try {
        const emailResponse = await ses.sendEmail(params).promise();
        return {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            statusCode: 200,
            body: JSON.stringify(emailResponse)
        }
    } catch (e) {
        console.log('Error sending email: ', e);
        return {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            statusCode: 500,
            body: `Error sending email: ${e.message}`
        }
    }
};