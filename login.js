window.onload = function () {

    let button_login = document.getElementById('button_login');

    button_login.addEventListener('click', () => {

        let user = document.getElementById('input_user').value;
        let password = document.getElementById('input_password').value;

        console.log(user, password);

        // let UrlPassword = 'functions_tree.php?token='+btoa('Action=Login&User='+user+'&Password='+password);
        // fetch(UrlPassword)
        // .then((response) => response.json())
        // .then((data) => {
        // });
    });
}