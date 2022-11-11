
let Username
let Password

RequestLogin(Username, Password)


function RequestRegister(){
    Username = prompt("Digite seu Usuário")
    Password = prompt("Digite sua Senha")
}

function RequestLogin(name, password){
    name = prompt("Digite seu Usuário")
    password = prompt("Digite sua Senha")

    name === Username && password === Password ? true : false
}

