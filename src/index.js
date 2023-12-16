


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

            if (request.action == "find_job_description") {
                this.findJobDescription();
            }
        })
    }

    async findJobDescription() {
        console.log("In find job description page in index js")
        const jobDescription = document.querySelectorAll('[data-testid]')
        console.log(jobDescription);

    }


    async fillForm() {
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
