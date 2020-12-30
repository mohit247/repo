
const  express  = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs') 

var demo = {
    name: 'rohan',
    age: 26
}
var projects = {
    name: 'rahul',
    skills: ['data minig', 'c', 'c++']
}

app.get('/projects', (req,res) => {
    res.render('projects', {projects: projects})
})
app.get('/dynamic', (req, res) => {
    res.render('dynamic', {demo : demo})
})

app.get('/hbs', (req,res) =>{
    res.render('demo');
})
app.listen(3000, (req,res)=>{
    console.log(`app is listeng on http://localhost:3000 `)
})