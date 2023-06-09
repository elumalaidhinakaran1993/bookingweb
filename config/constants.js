const base = "/api"
const baseUser = base + "/company"

exports.routePath = {
   
  
   company:{
       
    companycreate: baseUser + "/create",
   
      companylist: baseUser + "/companylist",
      companyid:baseUser + "/company/:id"
     
   }
}
