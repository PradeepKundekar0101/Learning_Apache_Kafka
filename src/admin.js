const {kafka} = require("./client")

const admin = kafka.admin();

async function init()
{
    try {
        console.log("Admin connecting...")
        admin.connect();
        console.log("connected!")
        console.log("Creating topic");
        await admin.createTopics({
            topics:[{
                topic: "location",
                numPartitions:2
            }]
        })
        console.log("Topic created");
        await admin.listTopics()
        await admin.disconnect();
    } catch (error) {
        console.log(error)
    }
   
    console.log("Disconnected");
}
init();