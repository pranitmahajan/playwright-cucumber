const {Before, Given, Then} = require('@cucumber/cucumber');
const { expect }            = require("@playwright/test");
const { NewsHomePage }      = require('../pages/newsHome.page');
let newsHomepage;

Before(async () => {
    newsHomepage = new NewsHomePage(page, 'news');
 });

Given('user navigates to news homepage', async () => {
    await newsHomepage.open();
    await expect(newsHomepage.newsNavigation).toBeVisible();
 });

Then('the article with comments enabled should have comments icon', async () => {
    await expect(newsHomepage.commentIconForArticle).toBeVisible();
});

Given('user is on article page with comments enabled', async () => {
    await newsHomepage.commentIconForArticle.click();
    await expect(newsHomepage.page).toHaveURL(new RegExp(newsHomepage.commentsArticle +'$'));
});

Then('verify comments icon is shown below headline', async () => {
    await expect(newsHomepage.commentIconInHeader).toBeVisible();
});

Then('total comments count is displayed below headline', async () => {
    await expect(newsHomepage.commentCountInHeader).toBeVisible();
    await expect(newsHomepage.commentCountInHeader).toHaveText(await newsHomepage.getCommentsCount());
});
