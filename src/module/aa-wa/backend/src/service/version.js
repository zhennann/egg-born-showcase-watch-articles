module.exports = app => {

  class Version extends app.Service {

    async update(version) {
      if (version === 1) {

        // create table: Article
        const sql = `
          CREATE TABLE Article (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            uid int(11) DEFAULT NULL,
            url varchar(255) DEFAULT NULL,
            provider varchar(255) DEFAULT NULL,
            title varchar(255) DEFAULT NULL,
            author varchar(255) DEFAULT NULL,
            avatar varchar(255) DEFAULT NULL,
            dataNew JSON DEFAULT NULL,
            dataOld JSON DEFAULT NULL,
            session int(11) DEFAULT '0',
            lastWatchedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
          )
        `;

        await this.ctx.db.query(sql);

      }
    }

  }

  return Version;
};
