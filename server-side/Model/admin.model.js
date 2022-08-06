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
    admissionRegStep: String,
})
const awardModel = mongoose.model('SOSOAward_tb', awardSchema)
const admissionModel = mongoose.model('SOSOAdmission_tb')
module.exports = {awardModel, admissionModel}