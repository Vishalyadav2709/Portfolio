console.log("Script running..")
document.querySelector('.close').style.display ='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.close').style.display ='none'
    }
    else{
        document.querySelector('.ham').style.display ='none'
        setTimeout(()=>{
            document.querySelector('.close').style.display ='inline'   
        },300)
       
    }
})
/*var form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    var Clientname = document.getElementById('Clientname').value
    console.log(Clientname)

    var Clientemail = document.getElementById('Clientemail').value
    console.log(Clientemail)


    var Clientphone = document.getElementById('Clientphone').value
    console.log(Clientphone)


    var Query = document.getElementById('Query').value
    console.log(Query )


})*/