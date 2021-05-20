module.exports = app => {
    app.get('/', (req, resp) => {
        resp.send('servidor Ok')
    });

};