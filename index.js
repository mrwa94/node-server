const http = require('http');
const port = 8080

const products = [
    { id: '1', title: 'phone', price: '3200' },
    { id: '2', title: 'computer', price: '2300' }]
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'application/json' })
    res.write(JSON.stringify(products))
    res.write("Welcome to my server")
    res.end()
})

server.listen(port, () => {
    console.log("Server is running at http://localhost:8080 ")
})