'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      await this.ctx.render('site/home.html');
  }
}

module.exports = HomeController;
