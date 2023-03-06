function func(){
    let email = document.getElementsByTagName('input')[0].value;
    let password = document.getElementsByTagName('input')[1].value;

    console.log("Username: "+email+", Password: "+ password);

    window.alert("incorect password");

}