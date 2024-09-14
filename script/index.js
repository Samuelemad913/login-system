const ShowHiddenPassword =(loginPass,loginEye) =>{
    const input = document.getElementById("login-pass")
    iconEye = document.getElementById("login-eye")

    iconEye.addEventListener('click',() =>{
if(input.type === 'password'){
    input.type = "text"

    iconEye.classList.add("ri-eye-line")

    iconEye.classList.remove("ri-eye-off-line")
}else{
    input.type ='password'
    iconEye.classList.remove("ri-eye-line")
    iconEye.classList.add("ri-eye-off-line")


}

    })
}
ShowHiddenPassword("login-pass","login-eye")