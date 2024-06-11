# stackmq-js-sdk

[![npm](https://img.shields.io/npm/v/stackmq-js-sdk)](https://www.npmjs.com/package/stackmq-js-sdk) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Tools for developers to implement real-time messaging

## Getting started

```bash
npm install stackmq-js-sdk
```

## Example
```js
import { StackmqConnection } from "stackmq-js-sdk";

const connectionString = `${host}://${hostAddress}:${port}/${username}:${password}/client/${clientId}/${topic}`;

const stackmq = new StackmqConnection(connectionString);

stackmq.onMessage((message) => {
    console.log({ message });
})
.onError((error) => {
    console.log({ error });
});
```

## Api
- `StackmqConnection()`

### StackmqConnection(connectionString)

Creates a new stackmq connection

- `connectionString`: The connection string to the stackmq. It should be the in the format
`${host}://${hostAddress}:${port}/${username}:${password}/client/${clientId}/${topic}`
