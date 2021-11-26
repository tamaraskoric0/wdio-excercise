describe('Open Wdio Website', () => {
    it('Proper title is displayed', () => {
        browser.url('https://webdriver.io/');
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    })
})
