const {Kafka} = require("kafkajs");
exports.kafka = new Kafka({
    clientId:"my-app-final",
    brokers:["192.168.237.141:9092"]
});