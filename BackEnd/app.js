const express = require('express');
const mySql = require('mysql');
const crypto = require('crypto');
const app = express();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const { error } = require('console');
const MySQLStore = require('express-mysql-session')(session);
const connection = mySql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'reviewData'
})


//session
const sessionStore = new MySQLStore({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'sessionView'
});

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials : true,
}));


app.use(session({
    secret : 'something',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000*60*60*24,
        sameSite: 'lax'
    }
}))


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const endpoint = req.originalUrl;
        cb(null, path.join(__dirname, 'images'))
    },
    filename: (req, file, cb)=>{
        const ext = path.extname(file.originalname);
        const name = file.originalname.split(ext)[0];
        cb(null, `${name}${ext}`);
    }
})

const upload = multer({
    storage
})

app.use(express.urlencoded({ extended: false}));
app.use(express.json());




app.get('/api/review',(req,res)=>{

    console.log('front end request get review');
    
    
    connection.query(`SELECT * FROM review`, (err,result,fields)=>{
        if(err){
            console.log(err);
            
            return res.status(202).send({
                status:0,
                info: "error"
            });
        }else{
            console.log('ok');
            
            res.status(200).send({
                status:1,
                info: result
            });    
        }    
    })
})


app.post('/api/review',(req,res)=>{
    const data = req.body;


    const idToinsert = crypto.randomUUID();
    console.log(idToinsert);
    
    connection.query('INSERT INTO `review`(`id`, `name` , `rating`, `info`) VALUES (?,?,?,?)',
        [idToinsert, data.name,data.rating,data.info],(err,result,fields)=>{
            if(err){
                return res.status(201).send(
                    {
                        status:0,
                        info:'error'
                    }
                )
            }else{
                return res.status(200).send(
                    {
                        status:1,
                        info:idToinsert
                    }
                )
            }    
        }
    )
})

app.post('/api/comment',(req,res)=>{
    
    const data = req.body;
    console.log(data);
    
    const idToinsert = crypto.randomUUID();
    connection.query('INSERT INTO `comment`(`id`,`reviewId`,`username`,`info`) VALUES (?,?,?,?)',
    [idToinsert,data.reviewId,data.username,data.info],(err,result,fields)=>{
        if(err){
            return res.status(201).send(
                {
                    status:0,
                    info:'error'
                }
            )
        }else{
            return res.status(200).send(
                {
                    status:1,
                    info:'Create comment success'    
                }   
            )
        }
    })
})

app.post('/api/review/img/:id', upload.single('file'), (req,res)=>{
    const reviewId = req.params.id;
    const tempPath = req.file.path;
    const extname = path.extname(req.file.originalname).toLowerCase();
    const targetPath  = path.join(__dirname, `./images/${reviewId}${extname}`);

    fs.rename(tempPath, targetPath, (err)=>{
        if( err){
            console.log('file error');
            return res.status(500).send('error');
        }

        const reviewImgPath = `http://localhost:5000/images/${reviewId}${extname}`;

        connection.query('UPDATE `review` SET `img`=? WHERE id = ?',
            [reviewImgPath, reviewId], (err,result,fields)=>{
                if (err) {
                    console.error('Database update error:', err);
                    return res.status(500).send('Database update error');
                }

                console.log('Database updated successfully');
                res.status(200).send({status:1,
                    info:"updated success"
                });
            }
        )
    })

})

app.get('/api/review/:id',(req,res)=>{
    
    const reviewId = req.params.id;
    console.log('front end request data for id ',reviewId);
    
    
    
    connection.query('SELECT * FROM `review` WHERE id = ?', [reviewId], (err,  reviewResult, fields)=>{
        if(err){
            return req.status(201).send(
                {
                    status:0,
                    info:'error'
                }
            )
        }else{
            
            //fetch the comment
            

            connection.query('SELECT * FROM `comment` WHERE reviewId = ?', [reviewId], (err,commentResult,fields)=>{
                if(err){
                    return res.status(201).send(
                        {
                            status:0,
                            info:'error'
                        }
                    )
                }else{
                    return res.status(200).send(
                        {
                            status:1,
                            info:{
                                ...reviewResult[0],
                                comment : commentResult
                            }
                        }
                    )
                }
            })
        }
    })
})


app.post('/api/login',(req,res)=>{
    const data =req.body;
    console.log(data);
    
    const textToInsert = 'SELECT * FROM user WHERE username= ?';
    connection.query(textToInsert,[data.username],(err,result,field)=>{
        if(err){
            return res.status(201).send(
                {
                    status:2,
                    info:"error"
                }
            )
        }
        if(result.length > 0){
            bcrypt.compare(data.password, result[0].password,(err,match)=>{
                if(err){
                    console.log(err);
                    return res.status(201).send({
                        status:0,
                        info:'incorrect password'
                    })
                }
                if(match){
                    console.log('login now regis session');
                    
                    req.session.user = {
                        id : result[0].id,
                        username: data.username
                    };

                    console.log(req.session);
                    
                    return res.status(200).send({
                        status: 1,
                        info: 'valid'
                    })
                }else{
                    return res.status(201).send(
                        {
                            status:0,
                            info:'incrrorect password'
                        }
                    )
                }
            })
        }
    })
})

app.post('/api/register',(req,res)=>{
    const data = req.body;
    console.log(data);
    
    connection.query('SELECT * FROM user WHERE username = ?',[data.username],(err,result,fields)=>{
        if(err) {
            return res.status(201).send({status:0,info:'error'})
        }
        
        if(result.length > 0){
            return res.status(201).send({
                status:0,
                info:'already have username'
            })
        }else{
            bcrypt.hash(data.password, 10, (err,hash)=>{
                if(err){
                    console.error('error in hashing');
                    return res.status(201).send({
                        status:0,
                        info:'error creating passowrd'
                    })
                }
                const idToinsert = crypto.randomUUID();

                console.log(idToinsert, data.username, data.password);
                
                connection.query('INSERT INTO `user`(`id`,`username`,`password`) VALUES (?,?,?)',
                    [idToinsert,data.username,hash] , (err,result, fields)=>{
                        if(err){
                            console.log(err);
                            console.error('err in create user');
                            return res.status(201).send({status:0,info:'error'})
                        }
                        return res.status(200).send({status:1,info:"complete create account"})
                    }
                )    

                
            })   
        }
    })
})

app.post('/api/auth', (req,res)=>{
    console.log('user auth');
    console.log(req.session);
    console.log(req.session.user);
    
    if(req.session.user){
        console.log('have user');
        
        res.status(200).send({
            status:1,
            info: req.session.user
        })
    }else{
        console.log(' no user session');
        
        res.status(201).send({
            status:0,
            info: 'unauthorize access'
        })
    }
})

app.post('/api/logout',(req,res)=>{
    console.log('user want to logout');
    
    req.session.destroy(err=>{
        if(err){
            console.log(err);
            
            return res.status(201).send({
                status:0,
                info: 'not success'
            });
        } else{
            console.log('complete');
            
            res.clearCookie('connect.sid');
            return res.status(200).send({
                status:1,
                info: 'log out ok'
            });
        }
    })
})

app.listen(5000, ()=>{
    console.log('listening on port 5000...');
    
})


/* 
console.log('808', idToinsert);
    
*/