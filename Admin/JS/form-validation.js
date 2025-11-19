document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const surname = form.surname.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            alert("Enter your name please.");
            form.name.focus();
            return;
        }

        if (surname === "") {
            alert("Enter your surname please.");
            form.surname.focus();
            return;
        }

        if (email === "" || !emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            form.email.focus();
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            form.message.focus();
            return;
        }

        alert("Message has been sent successfully! Thank you!");
        form.reset();
    });
});
