const http = require('http')

const dotenv = require('dotenv')
dotenv.config()

const app = http.createServer((req, res) => {
    if (req.url === '/login') {
        res.write('This is login page');
        res.end();
    } 
    else if (req.url === '/signup') {
       
        res.write('This is signup page');
        res.end();
    }
})

const port=process.env.PORT //|| 7000
app.listen(port, () => console.log(`Listening on port ${port}...`) );