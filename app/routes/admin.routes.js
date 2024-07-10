const express = require('express');

const viewErrorsMiddleware = require('@middlewares/viewErrors.middleware');

const baseController = require('@controllers/admin/base.controller');

module.exports = function(app){
  app.use(express.json());
  app.use('/admin/', baseController)

  app.use(viewErrorsMiddleware);

}