const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index')

const app = express()
app.use(morgan('dev'))

const PORT = 3000

app.use(express.urlencoded({extended:false}))


app.use(express.static('/public'));


app.use('/', routes)

app.listen(PORT, () => {
    console.log(`app listening in port ${PORT}`)
})



// Try getting your main layout to display when you visit http://localhost:3000. 
// You can do this by passing an empty string to your layout 
// function and res.sending it in your main route.