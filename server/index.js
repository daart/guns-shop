// Constants that won't change their value
const
        express = require('express'),                       // import express
        mongoose = require('mongoose'),                     // import mongoose
        path = require('path'),                             // import path for serving static files
        port = 7765,                                        // set port id
        bodyParser = require('body-parser'),                // import body-parser
        app = express(),                                    // initialize express
        apiRouter = express.Router(),                       // set apiRouter
        db = require('./db/config'),                        //import database config object
        staffAPI = require('./handlers/staffHandler');

// set a connection with our db storage
mongoose.connect(db.url);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Let's create path aliases to serve static files,
// Admin portal and users view
app.use('/libs', express.static(path.resolve(__dirname + '/../node_modules')));
app.use('/builds', express.static(path.resolve(__dirname + '/../builds')));
app.use('/admin', express.static(path.resolve(__dirname + '/../public/backend')));
app.use('/public', express.static(path.resolve(__dirname + '/../public/frontend')));

/**
 * Set CRUDs for staff routes
 */
apiRouter.route('/staff/profile/:id')
    .get(staffAPI.getStaffMember);

apiRouter.route('/staff/addMember')
    .post(staffAPI.addNewStaffMember);

apiRouter.route('/staff/edit/:id')
    .put(staffAPI.updateStaffMemberProfile);

apiRouter.route('/staff:id')
    .delete(staffAPI.deleteStaffMember);

apiRouter.route('/staff')
    .get(staffAPI.getAllStaffMembers);

app.use('/api', apiRouter);

// ir request url contains 'admin', we'll serve the main backend page
app.get(['/admin', '/admin/*'], function (req, res) {
    res.sendFile(path.resolve(__dirname + './../public/backend/app.html'));
});

// on request to our root location we'll serve our main html page
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + './../public/frontend/app.html'));
});

app.listen(port, function () {
    console.log('This app is running at : http://localhost:% ' + port );
});
