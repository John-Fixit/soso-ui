const express = require('express')
const adminRouter = express.Router()
const adminController = require('../Controller/admin.controller')
adminRouter.post('/award', adminController.postAward)
adminRouter.post('/getaward', adminController.getAward)
adminRouter.post('/admissionReq', adminController.admissionReq)
module.exports = adminRouter