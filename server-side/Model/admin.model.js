const mongoose = require('mongoose')

const awardSchema = new mongoose.Schema({
    awardText: String
})
const admissionSchema = new mongoose.Schema({
    admissionEli: String,
    admissionReq: String,
    admissionBegins: String,
    admissionCloses: String,
    admissionPaymentInfo: String,
    admissionRegStep: String
})
const principalSchema = new mongoose.Schema({
    principalName: String, 
    principalImage: String,
    principalNote: String
})
const gallery = new mongoose.Schema({
    title: String,
    file: String
})
const awardModel = mongoose.model('SOSOAward_tb', awardSchema)
const admissionModel = mongoose.model('SOSOAdmission_tb', admissionSchema)
const principalModel = mongoose.model('Principal_tb', principalSchema)
const galleryModel = mongoose.model('Gallery_tb', gallery)
module.exports = {awardModel, admissionModel, principalModel, galleryModel}