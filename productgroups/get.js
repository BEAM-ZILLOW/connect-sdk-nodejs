"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
var communicator = require('../utils/communicator');

var myModule = function (merchantId, paymentProductGroupId, paymentContext, cb) {
  communicator({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/productgroups/' + paymentProductGroupId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
