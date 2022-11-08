const { expect } = require("@playwright/test");

exports.BasePage = class BasePage {
    constructor(page, module) {
        this.module  = module;
        this.page    = page;
        this.baseURL = 'https://www.bbc.com/';
    }

    async open() {
        await this.page.goto(this.baseURL + this.module);
        await expect(this.page).toHaveURL(new RegExp('/'+ this.module +'$'));
    }
}
