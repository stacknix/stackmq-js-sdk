declare module "stackmq" {
  /**
   * Represents a connection configuration for the stackmq broker
   */
  interface connectionData {
    client_id: string;
    host: string;
    mqtts_port: string;
    password: string;
    sub_topic: string;
    username: string;
    wss_port: string;
  }

  /**
   * Stackmq class for managing MQTT connections
   */
  export class Stackmq {
    /**
     * Create a new Stackmq connection
     * @param connectionData The connection data for the stackmq broker
     */
    constructor(connectionData: connectionData);

    /**
     * Check if the client is currently connected
     */
    get isConnected(): boolean;

    /**
     * Initialize the stackmq connection
     * @returns The Stackmq instance for method chaining
     */
    init(): Stackmq;

    /**
     * Handle the connect event
     * @param callback Optional callback to be executed on connection
     * @returns The Stackmq instance for method chaining
     */
    onConnect(callback?: () => void): Stackmq;

    /**
     * Subscribe to the configured topic
     * @returns The Stackmq instance for method chaining
     */
    subscribe(): Stackmq;

    /**
     * Handle incoming messages
     * @param callback Callback function to process received messages
     * @returns The Stackmq instance for method chaining
     */
    onMessage(callback?: (message: string) => void): Stackmq;

    /**
     * Handle connection errors
     * @param callback Callback function to handle errors
     * @returns The Stackmq instance for method chaining
     */
    onError(callback?: (error: Error) => void): Stackmq;

    /**
     * Disconnect the stackmq client
     * @returns The Stackmq instance for method chaining
     */
    disconnect(): Stackmq;

    /**
     * Publish a message to the configured topic
     * @param message The message to publish
     * @returns The Stackmq instance for method chaining
     */
    publish(message: string): void;
  }
}
