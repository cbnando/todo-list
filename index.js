const app = require('./app')

const port = 3000 || process.env.port

app.listen(port, () => {
    console.log('Running...')
})