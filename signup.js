var un=document.getElementById('un')
var pwd=document.getElementById('pwd')
var submit=document.getElementById('sub')
var Rset=document.getElementById('res')

submit.addEventListener('click',()=>{
    let Username=un.value
    var password=pwd.value
console.log(Username);
    if(Username=="sourav" && password==1234)
{

    console.log(`Succesfully   log   in `);
}
else{
    console.log(`Enter Valid details`)
}
})

