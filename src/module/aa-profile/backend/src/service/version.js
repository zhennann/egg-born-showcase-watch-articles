module.exports = app => {

  class Version extends app.Service {

    async update(version) {
      if (version === 1) {

        // create table: User
        const sql = `
          CREATE TABLE User (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            username varchar(255) DEFAULT NULL,
            avatar varchar(255) DEFAULT NULL,
            PRIMARY KEY (id)
          )
        `;

        await this.ctx.db.query(sql);

      }
    }

  }


  return Version;
};
