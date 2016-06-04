import express = require('express');
import mongoose = require('mongoose');
import users = require('../models/users');
var crypto = require('crypto');

export function create_user (req: express.Request, res: express.Response){
  if (req.method === 'POST')
    {
      var admin_flag = false;

      var hash = crypto.createHash('md5').
                  update(req.body.password).
                  digest('hex');

      if (req.body.isAdmin == 'Yes') {
        admin_flag = true;
      }
      var user = new users.users ({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        isAdmin: admin_flag,
        password: hash
      });
      user.save();
    }

  res.render('create_user');
}
