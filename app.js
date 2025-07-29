const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes/routes');
const noteModel = require('./model/noteModel');

const app = express();

// Middleware setup
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// Pass flash messages to all views
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success');
    res.locals.error_msg = req.flash('error');
    next();
});

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/note',routes);
app.get('/', async (req, res) => {
    try {
        const notes = await noteModel.find(); // Await to get data
        res.render('index', { notes });
    } catch (error) {
        req.flash('error', 'Failed to load notes');
        res.redirect('/'); // Redirect to avoid app crash
    }
});
app.get('/edit/:id', async (req, res) => {
    const notes = await noteModel.findById(req.params.id);
    res.render('edit',{notes});
});


app.listen(3000,()=>{
    console.log('Server Listening')
})
