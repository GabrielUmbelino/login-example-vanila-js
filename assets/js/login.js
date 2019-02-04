(function () {

    document.getElementById("signIn").addEventListener("click", signIn);

    function signIn() {
        const username = document.querySelector(".form-group input[placeholder='USERNAME']").value;
        const password = document.querySelector(".form-group input[placeholder='PASSWORD']").value;
        if (!validateFields(username, password)) {
            return;
        }

        const auth = new Auth();
        const result = auth.validateUser(username, password);

        if (result) {
            loginAnimation();
        } else {
            showAuthenticationError();
        }
    }

    function loginAnimation() {
        $loginCard = document.querySelector(".card.login-form");
        $loginSuccess = document.querySelector(".card.login-success");

        $loginCard.classList.add("d-none");
        $loginSuccess.classList.remove("d-none")

        clearErrors();
    }

    function validateFields(username, password) {

        if (!username) {
            document.querySelector("form .text-danger.username").innerText = "Required field";
        } else {
            document.querySelector("form .text-danger.username").innerText = "";
        }
        if (!password) {
            document.querySelector("form .text-danger.password").innerText = "Required field";
        } else {
            document.querySelector("form .text-danger.password").innerText = "";
        }

        return Boolean(username) && Boolean(password);
    }

    function showAuthenticationError() {
        document.querySelector("form .text-danger.auth-errors").innerText = "Incorrect username or password.";
    }

    function clearErrors() {
        const fields = document.querySelectorAll("form .text-danger");
        fields.forEach(el => el.innerText = "");
    }

    function Auth() {
        var users = [{
                username: "gabriel",
                password: "123"
            },
            {
                username: "samuel",
                password: "123"
            }
        ];

        function validateUser(username, password) {
            return users.reduce(user => user.username == username && password == password);
        }
        return {
            validateUser
        }
    }

})();