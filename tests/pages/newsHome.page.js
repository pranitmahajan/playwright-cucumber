const { BasePage } = require('./base.page');

exports.NewsHomePage = class NewsHomePage extends BasePage {
    
    constructor(page, module) {
        super(page, module);
        this.newsNavigation        = page.locator('.nw-c-news-navigation');
        this.commentsArticle       = '/sport/football/63545657#story-footer';
        this.commentIconForArticle = page.locator('[href="/sport/football/63545657/#story-footer"] .nw-c-comment__icon');
        this.commentIconInHeader   = page.locator('header .comments-icon');
        this.commentCountInHeader  = page.locator('header .comments-tag__text');
    }

    async getCommentsCount() {
        return await this.commentCountInHeader.textContent();
    }
}
