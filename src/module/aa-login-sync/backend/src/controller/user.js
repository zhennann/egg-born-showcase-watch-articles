module.exports = app => {
  class UserController extends app.Controller {

    async getAuth() {
      this.ctx.success(this.ctx.isAuthenticated() ? this.ctx.user : null);
    }

    async logout() {
      this.ctx.logout();
      this.ctx.success();
    }

  }
  return UserController;
};
