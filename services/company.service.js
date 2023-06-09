const dbSynal = require("../models")
const userModel = dbSynal.Company


module.exports.userService = {
   findOne: async (where = {}, attributes = {}) => userModel.findOne({ where: where, attributes: attributes }),
   findAll: async (where = {}, attributes = {}) =>
      userModel.findAll({
         where: where,
         attributes: attributes,
         order: [["id", "ASC"]],
      }),
   count: async (where = {}) => userModel.count({ where: where }),
   create: async (userData) => userModel.create(userData),
   generateSynalId: async () => await _generateId(),
}

