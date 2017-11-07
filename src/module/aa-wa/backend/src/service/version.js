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
            pattern varchar(255) DEFAULT NULL,
            title varchar(255) DEFAULT NULL,
            author varchar(255) DEFAULT NULL,
            avatar varchar(255) DEFAULT NULL,
            statNew json DEFAULT NULL,
            statOld json DEFAULT NULL,
            session bigint(20) DEFAULT '0',
            lastWatchedAt timestamp DEFAULT NULL,
            error text DEFAULT NULL,
            PRIMARY KEY (id)
          )
        `;

        await this.ctx.db.query(sql);

      }
    }

  }

  return Version;
};
