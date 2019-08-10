var express = require('express');
var router = express.Router();
var UserCollection = require('../Model/mymodel');
var Employees = require('../Model/contactmodel');
var Audio = require('../Model/soundmodel');
var Comment = require('../Model/commentmodel');
var Todolist = require('../Model/todomodel');

const jwt = require('jsonwebtoken');


function verifyToken(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token == 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
        return res.status(401).send('Unauthorized request')

    }
    req.userId = payload.subject
    next()
}














router.post('/adduser', (req, res) => {
    // var uc = new UserCollection({
    // Name: req.body.Name,
    // Address: req.body.Address,
    // Email: req.body.Email,
    // Password: req.body.Password,
    var uc = new UserCollection(req.body);
    uc.save();
    let payload = { subject: req.body_id }
    let token = jwt.sign(payload, 'secretKey')
    res.status(201).send({token});

});
// uc.save((err, data)=>{
//     if(err)
//     res.status(500).json({ errmsg: err});
//     res.status(200).json({ userdata: data});
// });

router.get('/viewuser', (req, res) => {
    UserCollection.find({}, (err, data) => {
        res.json({ data });
    });
});


//login//

router.post('/userlogin', (req, res) => {
    let userData = req.body;

    UserCollection.findOne({email: userData.Email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else 
            if ( user.password !== userData.Password) {
                res.status(401).send('Invalid password')
            } else {
                let payload ={ subject: req.body_id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    } )

    // UserCollection.find({ $and: [{ "Email": req.body.Email }, {"Password": req.body.Password}]},
    // (err, AllData) => {
    //     if (err)
    //     res.status(500).json({ errmsg: err});
    //     res.status(200).json({ msg: AllData});
    // });
});


router.delete('/deleteuser/:id', (req, res)=>{
    UserCollection.findByIdAndDelete({_id: req.params.id},
        (err, data) => {
            res.json({ data});
        });
});

router.put('/updateuser', (req, res) => {
UserCollection.findById(req.body._id, (err, data) => {
    data.Name = req.body.Name;
    data.Address = req.body.Address;
    data.Email = req.body.Email;
    data.save();
    res.status(201).send(data);

});
});

//contactdata


router.post('/addcon', (req, res) => {
    var con = new Employees(req.body);
    con.save();
    res.status(201).send(con);

});

router.get('/viewcontact', (req, res) => {
    Employees.find({}, (err, contact) => {
        res.json({ contact });
    });
});


router.delete('/deletecontact/:id', (req, res)=>{
    Employees.findByIdAndDelete({_id: req.params.id},
        (err, contact) => {
            res.json({ contact});
        });
});


//blog

router.post('/addsnd', (req, res) => {
    var so = new Audio(req.body);
    so.save();
    res.status(201).send(so);

});

router.get('/viewsound', (req, res) => {
    Audio.find({}, (err, sound) => {
        res.json({ sound });
    });
});


//cmmnt
router.post('/addcmd', (req, res) => {
    var ct = new Comment(req.body);
    ct.save();
    res.status(201).send(ct);

});

router.get('/viewcomment', (req, res) => {
    Comment.find({}, (err, cmnt) => {
        res.json({ cmnt });
    });
});

//todolist//
router.post('/addlis', (req, res) => {
    var tod = new Todolist(req.body);
    tod.save();
    res.status(201).send(tod);

});
router.get('/viewlist', (req, res) => {
    Todolist.find({}, (err, tm) => {
        res.json({ tm });
    });
});

router.delete('/deletetxt/:id', (req, res)=>{
    Todolist.findByIdAndDelete({_id: req.params.id},
        (err, tm) => {
            res.json({ tm});
        });
});





module.exports = router;
