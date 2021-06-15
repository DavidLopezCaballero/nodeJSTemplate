module.exports = {
  port: process.env.Port || 5000,
  db: {
    url: 'mongodb://localhost/nodejsapi',
    mongoConfig: { useNewUrlParser: true, useUnifiedTopology: true },
  },
  secretToken: 'secretkeytoken',
  tokenDuration: 8
}
