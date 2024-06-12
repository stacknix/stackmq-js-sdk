# stackmq

[![npm](https://img.shields.io/npm/v/stackmq)](https://www.npmjs.com/package/stackmq) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Tools for developers to implement real-time messaging

## Getting started

```bash
npm install stackmq
```

## Example
```js
import { Stackmq } from "stackmq";

const connectionString = `<your_connection_string>`;

const stackmq = new Stackmq(connectionString);

stackmq.onMessage((message) => {
    console.log(message);
})
.onError((error) => {
    console.log({ error });
});
```

## Api
- `Stackmq()`

### Stackmq(connectionString)

Creates a new stackmq connection

- `connectionString`: The connection string to the stackmq. It should be the in the format
`${host}://${hostAddress}:${port}/${username}:${password}/client/${clientId}/${topic}`
