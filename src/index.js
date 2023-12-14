
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { SelectiumBuilder, Selectors } = require('selectium');

// (async () => {
//     const driver = new Builder().forBrowser('chrome').build();
//     const selectiumDriver = new SelectiumBuilder().forDriver(driver).build();
//     const currentTab = window.location.href;
//     try {
//         await driver.get(currentTab);

//         // Use Selectium to find element by name attribute
//         const element = await selectiumDriver.findElement(Selectors.name('first_name'));

//         // Perform actions on the element (e.g., click)
//         await element.click();

//         // Other actions...

//     } finally {
//         await driver.quit();
//     }
// })();



class AutoFillFormat {



    constructor() {

        this.handleRequest();
    }

    handleRequest() {
        chrome.runtime.onMessage.addListener((request, sender, response) => {
            if (request.action == "Filled") {
                this.fillForm();
            }
            console.log(request);
        })
    }

    fillForm() {
        const form = { firstname: "kevin", lastname: "king", phone: "5419087690" };

        const firstname = document.getElementById("input-3");

        const lastname = document.getElementById("input-4");
        const phone = document.getElementById("input-12");


        firstname.value = form.firstname;
        lastname.value = form.lastname;
        phone.value = form.phone;

        // document.querySelector("button").click();
    }

}


const autofillClass = new AutoFillFormat()
