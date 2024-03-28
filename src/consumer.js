const {kafka} = require("./client");
const group = process.argv[2];
const consumer = kafka.consumer({
    groupId:group
});
async function init(){
    await consumer.connect();

    consumer.subscribe({
        fromBeginning:true,
        topics:[
            'location-updates'
        ]
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`${group} : Topic ${topic} partition ${partition} message ${message.value.toString()}`)
        },
    })



}
init();
