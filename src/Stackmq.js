import mqtt from "mqtt";

export class Stackmq {
  /**
   * Create an stackmq connection.
   * @param {import("stackmq").connectionData} connectionData - The connection data for the stackmq broker.
   */
  constructor(connectionData) {
    this.connectionData = connectionData;
    this.stackmqClient = null;
    this.init();
  }

  /**
   * Check if the client is connected.
   * @return {boolean} True if connected, otherwise false.
   */
  get isConnected() {
    return this.stackmqClient && this.stackmqClient.connected;
  }

  /**
   * Initialize the stackmq connection.
   * @return {Stackmq} The instance of the Stackmq for chaining.
   */
  init() {
    if (this.isConnected) return this;

    try {
      const {
        username,
        password,
        client_id: clientId,
        host,
        wss_port: wssPort,
      } = this.connectionData;

      this.stackmqClient = mqtt.connect(`wss://${host}:${wssPort}`, {
        username,
        password,
        clientId,
      });
      this.subscribe();
    } catch (error) {
      console.error("Initialization error:", error);
    }
    return this;
  }

  /**
   * Handle stackmq connect event.
   * @return {Stackmq} The instance of the Stackmq for chaining.
   */
  onConnect(callback) {
    if (this.stackmqClient) {
      this.stackmqClient.on("connect", () => {
        console.log("stackmq connected");
        if (callback) callback();
      });
    }
    return this;
  }

  /**
   * Subscribe to a topic.
   * @param {string} topic - The topic to subscribe to.
   * @return {Stackmq} The instance of the Stackmq for chaining.
   */
  subscribe() {
    if (this.stackmqClient) {
      const { sub_topic: topic } = this.connectionData;
      this.stackmqClient.subscribe(topic, (error) => {
        if (error) {
          console.error(`Failed to subscribe to ${topic}: ${error}`);
        } else {
          console.log(`Subscribed to topic ${topic}`);
        }
      });
    } else {
      console.error("stackmq client is not initialized.");
    }
    return this;
  }

  /**
   * Handle stackmq message event.
   * @param {Function} callback - The callback function to handle incoming messages.
   * @return {Stackmq} The instance of the Stackmq for chaining.
   */
  onMessage(callback) {
    if (this.stackmqClient) {
      this.stackmqClient.on("message", (_, message) => {
        if (callback) callback(message.toString());
      });
    }
    return this;
  }

  /**
   * Handle stackmq error event.
   * @return {Stackmq} The instance of the Stackmq for chaining.
   */
  onError(callback) {
    if (this.stackmqClient) {
      this.stackmqClient.on("error", (error) => {
        console.error("stackmq error occurred:", error);
        if (callback) callback(error);
      });
    }
    return this;
  }

  /**
   * Disconnect the stackmq client.
   * @return {Stackmq} The instance of the Stackmq for chaining.
   */
  disconnect() {
    if (this.stackmqClient) {
      this.stackmqClient.end();
      console.log("stackmq disconnected");
    }
    return this;
  }

  /**
   * Publish a message to a topic.
   * @param {string} message - The message to publish.
   * @return {Stackmq} The instance of the Stackmq for chaining.
   */
  publish(message) {
    if (this.stackmqClient) {
      const { sub_topic: topic } = this.connectionData;
      this.stackmqClient.publish(topic, message, (error) => {
        if (error) {
          console.error(`Failed to publish to ${topic}: ${error}`);
        } else {
          console.log(`Message published to topic ${topic}`);
        }
      });
    } else {
      console.error("stackmq client is not initialized.");
    }
  }
}
