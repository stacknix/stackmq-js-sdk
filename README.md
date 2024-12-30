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

const connectionData = `<your_connection_data>`;

const stackmq = new Stackmq(connectionData);

stackmq
  .onMessage((message) => {
    console.log(message);
  })
  .onError((error) => {
    console.log({ error });
  });
```

## Api

- `Stackmq()`

### Stackmq(connectionData)

Creates a new stackmq connection

- `connectionData`: The connection string to the stackmq. It should be the in the format
  `const connectionData={
  client_id: <your_client_id>;
  host: <your_host>;
  mqtts_port: <your_mqtts_port>;
  password: <your_password>;
  sub_topic: <your_sub_topic>;
  username: <your_username>;
  wss_port: <your_wss_port>;
}`
