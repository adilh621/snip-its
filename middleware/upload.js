const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : function(req, res , cb){
        cb(null , './uploads/')
    },
    filename: function(req, file , cb){
        console.log(file)
        cb(null , 'newPic' +'-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req , res, cb)=>{
    cb(null ,true)
}

let upload = multer({
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
})

module.exports = upload.single('image')