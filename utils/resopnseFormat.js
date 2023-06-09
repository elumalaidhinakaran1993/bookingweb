const moment = require("moment")

module.exports.responseUtil = (req, res, next) => {
   const _send = {}
   const _format = {
      timestamp: moment().utcOffset("+5:30").format("DD-MMM-YYYY hh:mm:ss A"),
      status: null,
      result: null,
      error: null,
   }

   _send.ok = (response = null) => {
      _format.status = "ok"
      _format.result = response
      if (req.checkPoint) _format.checkPoint = req.checkPoint
      if (req.services) _format.services = req.services
      if (req.server) _format.server = req.server
      if (req.accessPrivilege) _format.accessPrivilege = req.accessPrivilege
      res.status(200).json(_format)
   }

   _send.badRequest = (response = null) => {
      _format.status = "badRequest"
      _format.error = response
      res.status(400).json(_format)
   }

   _send.unauthorized = (response = null) => {
      _format.status = "unauthorized"
      _format.error = response
      res.status(401).json(_format)
   }

   _send.unprocessable = (response = null) => {
      _format.status = "unprocessable"
      _format.error = response
      res.status(422).json(_format)
   }

   _send.forbidden = (response = null) => {
      _format.status = "forbidden"
      _format.error = response
      res.status(403).json(_format)
   }

   _send.notFound = (response = null) => {
      _format.status = "notFound"
      _format.error = response
      res.status(404).json(_format)
   }

   res.sendData = _send
   next()
}
