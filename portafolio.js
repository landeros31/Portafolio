const menu = document.querySelector('.hamburguer')
const lista=document.querySelector('.container-list')


function SendMail(params) {
const from_name=document.getElementById('email')
const to_name=document.getElementById('name')
const message=document.getElementById('message')
  var tempParams={
     from_name,
     to_name,
     message,
    
  };
console.log(tempParams);
emailjs.send('service_zhsvg4f','template_q3c2kpl',tempParams)
.then(function(res) {
  console.log('sucess',res.status);
})

}






menu.addEventListener('click',()=>{

lista.classList.toggle('active')

})