import server from "./api/server";

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Running on port http://localhost:${port}/`);
});
