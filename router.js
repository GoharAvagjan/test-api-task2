module.exports = (app) =>{
    app.use((req, res, next) => {
        console.log('log middleware');
        next();
    });
   // app.use('/users', require('./Routers/users') );
    app.use('/contacts', require('./Routers/contacts'));
   // app.use('/upload', require('./Routers/upload'));
    app.use((req, res)=>{
        res.end('router not found');
    });
}
