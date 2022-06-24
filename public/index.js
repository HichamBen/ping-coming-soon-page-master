const emptyMsg = document.getElementById("emptyMsg");
const validMsg = document.getElementById("validMsg");


function handleForm(event) {
    event.preventDefault();

    let email = event.target["email"];
    let validEmail = email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (email.value === "") {
        emptyMsg.classList.remove("hidden");
        emptyMsg.classList.add("block");

        validMsg.classList.remove("block");
        validMsg.classList.add("hidden");

    } else {
        if (!validEmail) {
            emptyMsg.classList.remove("block");
            emptyMsg.classList.add("hidden");

            validMsg.classList.remove("hidden");
            validMsg.classList.add("block");
        } else {
            event.target.submit();
            console.log("is valide")
        }
    }

}