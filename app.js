const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello from DevOps on AWS 🚀");
    res.end();
});

server.listen(3000, () => {
    console.log("App running on port 3000");
});
