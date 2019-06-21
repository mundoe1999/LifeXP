const Sequelize = require('sequelize');
const db = new Sequelize({
  connectionString:
    process.env.DATABASE_URL || 'postgres://gcaiqfgnjfbqwi:989d3e7b4df895ffb39b995e6764744c4f5388f0bef2f0c7da84d127c8ca2b66@ec2-184-73-169-163.compute-1.amazonaws.com:5432/dde6qv5tqsan6o'
}); 

module.exports = db;