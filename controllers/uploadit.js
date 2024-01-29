const sellingschema = require('../models/upload')
const multer = require('multer')


const uploadit = (req,res) =>{
    res.render("uploadit",{cat:req.params.cat});
}


const uploaditpost = async (req,res) =>{
    try{
        if (req.file){
            const mail = req.session.usermail;
            const data = new sellingschema({
                                usermail:mail,
                                itemdesc:req.body.itemdesc,
                                colour:req.body.color,
                                itemimg: {
                                    data: req.file.filename,
                                    contenttype: "image/jpg/png",
                                    },
                                itemcat:req.params.cat
                                })
            await data.save()
            .then(()=>{
                console.log("nop")
            })
            .catch((err)=>{
                console.log("problem",err)
            })
        }         
        console.log(req.body)
        res.render("uploadit",{cat:req.params.cat});        
    }                 
    catch(err){
    console.log(err)
    }
    }

module.exports = {uploadit,uploaditpost};