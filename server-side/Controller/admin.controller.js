const awardModel = require('../Model/admin.model')
const admissionModel = require('../Model/admin.model')
const getAward = (req, res)=>{
    awardModel.find((err, awards)=>{
        if(err){
            res.send({message:`Connection problem, please check your connection!`, status: false})
            console.log(`Network error`);
        }else{
            res.send({awards, status: true})
            console.log(awards);
        }
    })
} 
const postAward=(req, res)=>{
    console.log(req.body);
    const form = new awardModel(req.body)
    form.save((err)=>{
        if(err){
            // console.log(`Internet error`);
            res.send({message: `Connection error, please check your connection!`, status: false})
        }else{
            // console.log(`Saved successfully`);
            res.send({message: `Award event saved successfully`, status: true})
        }
    })
}
const admissionReq =(req, res)=>{
    console.log(req.body);
}
module.exports = {getAward, postAward, admissionReq}