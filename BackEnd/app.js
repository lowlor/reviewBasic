const express = require('express');
const mySql = require('mysql');
const crypto = require('crypto');
const app = express();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const connection = mySql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'reviewData'
})

app.use(cors());

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
app.listen(5000, ()=>{
    console.log('listening on port 5000...');
    
})


/* 
console.log('808', idToinsert);
    
*/