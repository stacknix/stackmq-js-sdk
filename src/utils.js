export const parseUrl = (url) => {
  const host = url.split("://")[0];

  const hostDetails = url.split("://")[1];
  const hostAddress = hostDetails.split(":")[0];
  const port = parseInt(hostDetails.split(":")[1]);

  const authDetails = url.split("/")[3];
  const username = authDetails.split(":")[0];
  const password = authDetails.split(":")[1];

  const clientId = url.split("/")[5];

  const topic = url.split("/").slice(6).join("/");

  return {
    host,
    hostAddress,
    port,
    username,
    password,
    clientId,
    topic,
  };
};
