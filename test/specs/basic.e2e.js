describe ('OpenMRS', () => {
    it ('Login with incorrect credentials', async  () => {
        browser.url("https://demo.openmrs.org/openmrs/login.htm");

        const usernameInput = await $('#username');
        const passwordInput = await $('#password');
        const pharmacyButton = await $('#Pharmacy');
        const loginButton = await $('#loginButton');

        await usernameInput.addValue('jdfjsk');
        await passwordInput.addValue('jdks');
        await pharmacyButton.click();
        await loginButton.click();

        const errorMessage = await $('#error-message');
        await expect(errorMessage).toHaveText("Invalid username/password. Please try again.");


    }); 

    it ('Login with correct credentials', async () => {
        browser.url("https://demo.openmrs.org/openmrs/login.htm");

        const usernameInput = await $('#username');
        const passwordInput = await $('#password');
        const pharmacyButton = await $('#Pharmacy');
        const loginButton = await $('#loginButton');

        await usernameInput.addValue('Admin');
        await passwordInput.addValue('Admin123');
        await pharmacyButton.click();
        await loginButton.click();

        const h4 = await $('h4');
        await expect(h4).toHaveText("Logged in as Super User (admin) at Pharmacy.");
    });

    it ('Logout', async () => {
        browser.setWindowSize(1500, 1500);

        const LogoutButton = await $('a=Logout');
        await LogoutButton.click();

        const Login = await $('.w-auto');
        await expect(Login).toHaveText("LOGIN");        
        

        
    });

})