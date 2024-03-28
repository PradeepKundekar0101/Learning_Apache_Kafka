const { kafka } = require("./client");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
async function init() {
  const producer = kafka.producer({});
  console.log("Connecting producer");
  await producer.connect();
  console.log("Connected");
  rl.setPrompt(">");
  rl.prompt();
  rl.on("line",async (line)=>{
    const [name,location] = line.split(" ")
    await producer.send({
        topic: "location-updates",
        messages: [
          {
            key: "location",
            value: JSON.stringify({ location, name }),
            partition: location.toLowerCase()==="north"?0:1,
          }
        ],
      });
  }).on("close",async()=>{
    await producer.disconnect();
  })
 

}
init();
