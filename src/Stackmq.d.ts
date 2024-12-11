declare module "stackmq" {
  /**
   * Represents a connection configuration parsed from the connection string
   */
  interface ParsedConnection {
    host: string;
    hostAddress: string;
    port: number;
    username: string;
    password: string;
    clientId: string;
    topic: string;
  }

  /**
   * Stackmq class for managing MQTT connections
   */
  export class Stackmq {
    /**
     * Create a new Stackmq connection
     * @param connectionString The connection string for the stackmq broker
     */
    constructor(connectionString: string);

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

  /**
   * Utility function to parse connection URL
   * @param url Connection string to parse
   * @returns Parsed connection details
   */
  export function parseUrl(url: string): ParsedConnection;
}
