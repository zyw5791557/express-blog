module.exports = app => {
    app.get('/', (req, res) => {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));

    // 404 page
    // 偷懒, 使用了腾讯公益的 404 页面
    app.use((req, res) => {
        if(!res.headersSent) {
            res.render('404');
        }
    });
};