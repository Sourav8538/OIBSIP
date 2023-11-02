// var ln=document.getElementById('ln')
// var fn=document.getElementById('fn')
// var sc=document.getElementById('screen')
// var btn=document.getElementById('btn')
// var cl=document.getElementById('cl')
// btn.addEventListener('click',()=>{
//    first= fn.value
//    last=ln.value
//    total=
//    sc.innerText=`hello ${first} ${last}`
//    fn.value=''
//    ln.value=''
// })
// cl.addEventListener('click',()=>{
//     fn.value=''
//    ln.value=''
//    sc.innerText=''
// })

//----------------hey   code  close here------------>


var skils=document.getElementById("skils")
var experience=document.getElementById("experience")
var education=document.getElementById('education')
var personal=document.getElementById('personal')
skils.addEventListener("click",()=>{
    var div=document.getElementById("tab-contents")
     div.innerHTML=
     `<table Cellpadding=5; Cellspacing=5;  >

        
         <tr> <td><img src="https://4.bp.blogspot.com/-K3xPJlyU5mk/XGfNIFz6yyI/AAAAAAAAR80/A4JTnhu4ilUdnQ3TgtgE414oRw55owL8QCLcBGAs/s1600/HTML%2B5.png"></td>   <td><img src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo.png"></td>    <td><img src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png"></td>      </tr>
        
        
        <tr> <td><img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"></td>   <td><img src="https://www.sitesbay.com/jdbc/files/sublogo.png"></td>    <td><img src="https://www.dinhanhthi.com/img/header/vsc.png"></td>       </tr>
        
        <tr> <td><img src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png"></td>       <td><img src="https://2.bp.blogspot.com/-9S6PlDjJx2g/V6W-29_hjkI/AAAAAAAAAF0/lqqff8D7HckQriVGa3jk1DxENODw5oa_QCEw/s1600/hibernate.png"></td>   <td><img src="https://1.bp.blogspot.com/-TevOgPVC2dE/WnILAnucRVI/AAAAAAAAGU0/OlrnoLsf2fs9aKpm9_BGEqk5R54gUCZbgCLcBGAs/s1600/spring-boot.png"></td>     </tr>
        <tr> <td><img src="https://th.bing.com/th/id/R.da53dc3418ca99ce8fec3846274d9cb8?rik=7Qcec6x2MyB8%2bw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fbootstrap-png-bootstrap-512.png&ehk=BlRbDLn1AD%2f9puV15VDXoihIzzttL%2bYGFjbEx6uC2cI%3d&risl=&pid=ImgRaw&r=0"></td>   <td><img src="https://1.bp.blogspot.com/-X6BEL-1Ax60/V7MiBPXhZKI/AAAAAAAABn0/hcdjPzQP7KY7wgvAdYhTg8J-jBWZTUUeQCPcB/s1600/javaServletJsp.png"></td>     <td><img src="https://www.shariqueweb.com/wp-content/uploads/2015/09/Eclipse.png"></td></tr>
     </table>
     `
     skils.style.color="red;"
})

experience.addEventListener("click",()=>{
    var div=document.getElementById("tab-contents")
     div.innerHTML=`<h2>TRAINING</h2><br>
     <h2>Full stack Software Development</h2>
      <h3>Institute : Q &Jspider</h3>
     January 2023 – present | KOLKATA
     <br><br>
    <p> <strong> <u>Hands On Project</u></strong></p><br>

     <p> <b> Title:</b>Online Banking Aplication </p><br>

     <p><b>Role :</b> Full Stack</p><br>

     <p> <b>Description</b> This is a online banking application </p><br>

     <p><b>Technologies Used:  </b>Html,css, javascript,  Java , Hibernate ,Jsp , Servlet</p>
     
     `

})


education.addEventListener("click",()=>{
    var div=document.getElementById("tab-contents")
     div.innerHTML=`
     <h1>B.Tech In CSE</h1> <h2>Neotia Institute of Technology,<br>Management & Science</h2><h3>2023 GGPA 8.71</h3>
<br>
<h1>Higher Secondary (12th)</h1><h2>Birsingha Bhagabati Vdyalaya</h2><pre>2019             62.4%</pre>
<br>
<h1>Secondary (10th)</h1><h2>Birsingha Bhagabati Vdyalaya</h2><pre>2017                 68%</pre>


     `
})
personal.addEventListener("click",()=>{
     var div=document.getElementById("tab-contents")
     div.innerHTML=`
     <h3>Full Name: Sourav Ghosh</h3>
     <h3>Address: Birsingha,Ghatal,paschim medinipur</h3>
     <h3>Date Of Birth: 24/04/2001</h3><br>
     <h3></h3>



     `
})
//----------code for menu------->
