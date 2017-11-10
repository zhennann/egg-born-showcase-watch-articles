module.exports = app => {

  class Version extends app.Service {

    async update(version) {
      if (version === 1) {

        let sql;

        // create table: User
        sql = `
          CREATE TABLE User (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            username varchar(255) DEFAULT NULL,
            displayName varchar(255) DEFAULT NULL,
            avatar varchar(255) DEFAULT NULL,
            PRIMARY KEY (id)
          )
        `;

        await this.ctx.db.query(sql);

        // create table: Auth
        sql = `
          CREATE TABLE Auth (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            uid int(11) DEFAULT '0',
            provider varchar(255) DEFAULT NULL,
            profileId varchar(255) DEFAULT NULL,
            username varchar(255) DEFAULT NULL,
            displayName varchar(255) DEFAULT NULL,
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
