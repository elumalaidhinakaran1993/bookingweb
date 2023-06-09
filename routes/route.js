const express = require("express");
const { routePath } = require("../config/constants");
const { companyList , companyregister,companyListid } = require('../controller/company.controlle')


const router = express.Router();






//company


router.post(routePath.company.companycreate,companyregister);
router.get(routePath.company.companylist,companyList);
router.get(routePath.company.companyid,companyListid);







router.get('*', (req, res) => res.sendData.notFound('Requested url was not found'));
router.post('*', (req, res) => res.sendData.notFound('Requested url was not found'));

module.exports = router;