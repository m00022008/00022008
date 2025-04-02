const express = require('express')
const path = require('path')

const apiRoutes = require('./routes/api')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

global.mock_db = path.join(__dirname, './data/mock_db.json')

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use('/api', apiRoutes)
app.use('/', webRoutes)

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
