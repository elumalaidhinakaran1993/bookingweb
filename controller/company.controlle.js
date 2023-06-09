const { Op } = require("sequelize");
// const crypto = require("crypto");
// const bcrypt = require('bcrypt');

 const { userService  } = require("../services/company.service");


 exports.companyregister = async (req, res) => {
    try {
   

       const {
          companyName,
          companyRegNo,
          address,
          vatRegNo,
          managingDirector,
          country,
          phone,
          fax,mobilePhone,emailAddress,internetAddress
       } = req.body

       const userData = await userService.create({

        companyName:companyName,
        companyRegNo:companyRegNo,
        address:address,
        vatRegNo:vatRegNo,
        managingDirector:managingDirector,
        country:country,
        phone:phone,
        fax:fax,
        mobilePhone:mobilePhone
        ,emailAddress:emailAddress,
        internetAddress:internetAddress

       })
 
       return res.sendData.ok({
        
        companyName: userData.companyName,
          emailAddress: userData.emailAddress,
          companyRegNo: userData.companyRegNo,
       })
    } catch (error) {
       return res.sendData.badRequest(error.message)
    }
 }
 


exports.companyList = async (req, res) => {
  try {
    const _employee = await userService.findAll();

    return res.sendData.ok(_employee);
  } catch (error) {
    console.error(error.message);
    return res.sendData.badRequest();
  }
};

exports.companyListid = async (req, res) => {
    try {
      // console.log(req.params, "params");
  
      const deviceData = await userService.findOne({ id: req.params.id });
  
      return res.sendData.ok(deviceData);
    } catch (e) {
  
      return res.sendData.badRequest();
    }
  };