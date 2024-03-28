# Kafka

Apache Kafka is an open source, disturbed event streaming platform with very high throughput and low latency and a robust fault tolorence mechanism.

Jargons which we need to understand: 

### Producers:

- An application or process that publishes records (messages) to Kafka topics.

### Consumers:

- An application that subscribes to two or more topics and receives messages from the Kafka broker.

### Topic

- A topic is a channel to which data is pulished.
- In case of food delivery system, we can have a topic named driver_location or order_status.
- Topic may be further divided into multiple partitions which enables parallel processing and scalability

### Partitions

- Partition is a unit of data storage in a topic. Each topic is divided into one or more partitions

### Brokers:

- A single kafka server in the kafka cluster.
- It is responsible for receiving messages from the producers, store them on the disk and send it back to the consumers.
- There can be multiple brokers within the same kafka cluster. (For scaling and fault tolerance)
