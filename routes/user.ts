import express = require('express');

export function create_user(req: express.Request, res: express.Response){
  res.render('create_user')
}
