


const fillButton = document.querySelector("#fillFormButton")
const signInButton = document.querySelector("#SignIn")

const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true })

fillButton.addEventListener("click", async () => {
    // console.log("fillFormButton triggered");

    await chrome.tabs.sendMessage(currentTab.id, { action: "Filled" })
        .then((response) => {
            console.log("Filled response" + response);
        })
})

signInButton.addEventListener("click", async e => {

    await chrome.tabs.sendMessage(currentTab.id, { action: "SignIn" })
        .then((response) => {
            console.log("Sign in" + response);
        })
})