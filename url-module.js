const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url); // Parse URL
  const queryParams = querystring.parse(parsedUrl.query); // Parse query string

  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(
    JSON.stringify({
      pathname: parsedUrl.pathname,
      query: queryParams,
    })
  );
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
