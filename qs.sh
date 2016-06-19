stylus ./public/stylesheets >> logs/stylus.log &
mongod >> logs/mongod.log &
nodemon ./app.js >> logs/nodemon.log &
