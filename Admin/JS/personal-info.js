document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("LoggedInUser");

    if (!loggedInUser) {
        alert("You are not logged in!");
        window.location.href = "/Public/login.html";
        return;
    }

    const request = indexedDB.open("NovaTechDB", 1);

    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["users"], "readonly");
        const store = transaction.objectStore("users");

        const getRequest = store.get(loggedInUser);

        getRequest.onsuccess = function () {
            const user = getRequest.result;

            if (!user) {
                alert("User not found!");
                return;
            }


            document.getElementById("name").value = user.name;
            document.getElementById("surname").value = user.surname;
            document.getElementById("username").value = user.username; // read-only
            document.getElementById("email").value = user.email;
        };
    };

    const form = document.getElementById("personal-info-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const updatedName = document.getElementById("name").value;
        const updatedSurname = document.getElementById("surname").value;
        const updatedEmail = document.getElementById("email").value;
        const newPassword = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword && newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const tx = request.result.transaction(["users"], "readwrite");
        const store = tx.objectStore("users");

        const getRequest = store.get(loggedInUser);
        getRequest.onsuccess = function () {
            const user = getRequest.result;

            user.name = updatedName;
            user.surname = updatedSurname;
            user.email = updatedEmail;
            if (newPassword) user.password = newPassword;

            const updateRequest = store.put(user);
            updateRequest.onsuccess = function () {
                alert("Information updated successfully!");
            };
            updateRequest.onerror = function () {
                alert("Error updating information.");
            };
        };
    });
});
