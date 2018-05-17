module.exports = {

  magento: {
    url:  process.env.MAGENTO_URL || 'http://storefront/rest/',
    consumerKey: process.env.MAGENTO_CONSUMER_KEY || 'yk6tgkua1m9vb4lp7d8hbgxbg3y0u4wy',
    consumerSecret: process.env.MAGENTO_CONSUMER_SECRET || 'ng3pwo2ufnvcjqfrgiieatc5kx6auvdk',
    accessToken: process.env.MAGENTO_ACCESS_TOKEN || 'rh83nsis1lduaaa6dp4uyngvfrprv1di',
    accessTokenSecret: process.env.MAGENTO_ACCESS_TOKEN_SECRET || '10gq106d9jj4lf8sbjav52la81pduydf',
  },

  kue: {}, // default KUE config works on local redis instance

  db: {
/*    driver: 'mongo',
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/rcom' */

    driver: 'elasticsearch',
    url: process.env.DATABASE_URL || 'http://localhost:9200',
    indexName: 'vue_storefront_catalog'
  },

  redis: {
    host: '127.0.0.1',
    port: 6379
  },

  passport: {
    jwtSecret: "MyS3cr3tK3Y",
    jwtSession: {
        session: false
      }
  }

}
