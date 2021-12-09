describe('Shoutem Pricing page', () => {
    it('Ucitavanje stranice Pricing', async () => {
        await browser.url('https://shoutem.com/pricing/');

        const h1 = $('h1');
        await expect(h1).toHaveText('There are more ways to create apps with Shoutem');
    });

    it('Ucitavanje social landing stranica', async () => {
        await browser.url('https://shoutem.com/apps/social-network/');

        const button = await $('.btn=Build now');
        await button.click();

        const pageTitle = await $('.page-title');
        await expect(pageTitle).toHaveText('Choose an app template')



    })

})