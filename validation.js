function masuk(){
    if(username.value == 'admin' && password.value == '123'){
        window.open('index-admin.html','_self')
    } else if(username.value == 'user' && password.value == '321'){
        window.open('index-user.html','_self')
    } else{
        alert('Anda harus masuk dengan username dan kata sandi yang benar!')
    }
}