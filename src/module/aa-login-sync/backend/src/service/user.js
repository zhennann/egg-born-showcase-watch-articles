module.exports = app => {

  class User extends app.Service {

    async verify(profileUser) {
      // profileUser
      //   provider: 'github',
      //   id: '24246873',
      //   name: 'zhennann',
      //   displayName: 'zhennann',
      //   photo: 'https://avatars1.githubusercontent.com/u/24246985?v=4',

      const authUser = await this.ctx.db.get('Auth', {
        provider: profileUser.provider,
        profileId: profileUser.id,
      });
      if (!authUser) return await this.register(profileUser);

      const user = await this.ctx.db.get('User', {
        id: authUser.uid,
      });
      if (!user) return await this.register(profileUser);

      return user;
    }

    async register(profileUser) {
      // user
      const res = await this.ctx.db.insert('User', {
        username: profileUser.name,
        displayName: profileUser.displayName,
        avatar: profileUser.photo,
      });
      const uid = res.insertId;

      // auth
      await this.ctx.db.insert('Auth', {
        uid,
        provider: profileUser.provider,
        profileId: profileUser.id,
        username: profileUser.name,
        displayName: profileUser.displayName,
        avatar: profileUser.photo,
      });

      // get
      return await this.ctx.db.get('User', {
        id: uid,
      });
    }

  }

  return User;
};
