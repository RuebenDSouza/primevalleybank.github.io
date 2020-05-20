function captch()
{
var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
'T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e',
'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var a=alpha[Math.floor(Math.random()*62)]
var b=alpha[Math.floor(Math.random()*62)]
var c=alpha[Math.floor(Math.random()*62)]
var d=alpha[Math.floor(Math.random()*62)]
var e=alpha[Math.floor(Math.random()*62)]
var sum=a+b+c+d+e
document.getElementById("captcha").value=sum
}
window.onload(captch())


function validate(){
    var fn=document.getElementById("fn").value
    var n=(/^[a-zA-Z]{3,16}/.test(fn))
    if(n==false)
    {
        document.getElementById("fnmsg").innerHTML="Invalid First Name"
        document.getElementById("fn").style.borderBottom="2px solid red"
        return false
    }
    var ph=document.getElementById("ph").value
    var p=(/^[6-9]{1}\d{9}$/.test(ph))
    if(p==false)
    {
        document.getElementById("phmsg").innerHTML="Invalid Phone Number"
        document.getElementById("ph").style.borderBottom="2px solid red"
        return false
    }
    var dob=document.getElementById("dob").value
    if(dob==0)
    {
        document.getElementById("dobmsg").innerHTML="Enter Date of Birth"
        document.getElementById("dob").style.borderBottom="2px solid red"
        return false
    }

    var em=document.getElementById("email").value
    var e=/^[a-z](@yahoo.com)$|(@gmail.com)$|(@rediffmail.com)$|(@hotmail.com)$/.test(em)
    if(e==false)
    {
        document.getElementById("mailmsg").innerHTML="Invalid Mail ID"
        document.getElementById("email").style.borderBottom="2px solid red"
        return false
    }
    var pwd=document.getElementById("pwd").value
    var pw=/[a-z A-Z 0-9 ! @ # $ % & * .]{6,16}/.test(pwd)
    if(pw==false)
    {
        document.getElementById("pwdmsg").innerHTML="Invalid Password"
        document.getElementById("pwd").style.borderBottom="2px solid red"
        return false
    }
    var cnpwd=document.getElementById("cnpwd").value
    if(pwd!=cnpwd)
    {
        document.getElementById("cnpwdmsg").innerHTML="Password Mismatch"
        document.getElementById("cnpwd").style.borderBottom="2px solid red"
        return false
    }
    var captcha=document.getElementById("captcha").value
    var cncaptcha=document.getElementById("cncaptcha").value
    if(captcha!=cncaptcha)
    {
        document.getElementById("cncapmsg").innerHTML="Captcha Mismatch"
        document.getElementById("cncaptcha").style.borderBottom="2px solid red"
        return false
    }
}






//Modal Pop up

function modal ()
{
    document.getElementById("modal").style.display="flex"
}
function closemodal(){
    document.getElementById("modal").style.display="none"
}

function signin()
{
    var username="rueben"
    var password="12345"
    var user= document.getElementById("user").value
    var pass=document.getElementById("pass").value
    console.log(user,pass)
    console.log(username,password)
    
    if(user!=username || pass!=password)
    {
        var user= document.getElementById("user").value=""
        var pass=document.getElementById("pass").value =""
        document.getElementById("user").style.borderBottom="2px solid red"
        document.getElementById("passmsg").innerHTML="Incorrect Username or Password  "
        document.getElementById("pass").style.borderBottom="2px solid red"
        return false
    }
    
    
}

   


function onconfirm()
{
    var currentbal= document.getElementById("cb").value
    
    var choice=document.getElementById("drop").value
    var amt=Number(document.getElementById("amt").value)
    if(choice=="Deposit")
    {

        document.getElementById("cb").value=Number(currentbal)+Number(amt)
        document.getElementById("cbnew").value=Number(currentbal)+Number(amt)
        currentbal=document.getElementById("cb").value
        var desc=document.getElementById("desc").value
        var tabledep=document.getElementById("table1")
        var rowd=tabledep.insertRow(-1)
        var cell1=rowd.insertCell(0)
        var cell2=rowd.insertCell(1)
        cell1.innerHTML=amt
        cell2.innerHTML=desc
        document.getElementById("income").value=Number(document.getElementById("income").value)+Number(cell1.innerHTML)
    }
    
    else if(choice=="Withdraw")
    {

        currentbal=Number(document.getElementById("cb").value)
        // console.log(currentbal,amt)
        // var ok=(amt>currentbal)
        // console.log(currentbal,amt)
        // console.log(ok)
        // console.log(typeof(amt))
       if(amt<=currentbal)
        {
            currentbal=Number(currentbal)-Number(amt)
            document.getElementById("cb").value=currentbal
            document.getElementById("cbnew").value=currentbal
            var desc=document.getElementById("desc").value
            var tablew=document.getElementById("table2")
            var roww=tablew.insertRow(-1)
            var cell3=roww.insertCell(0)
            var cell4=roww.insertCell(1)
            cell3.innerHTML=amt
            cell4.innerHTML=desc
            document.getElementById("spending").value=Number(document.getElementById("spending").value)+Number(cell3.innerHTML)
        }
        else if(amt>currentbal)
        {
            document.getElementById("err").innerHTML="   Insufficient balance"
        }
    
          
    }
   
}
function reset(){
    document.getElementById("desc").value=""
    document.getElementById("amt").value=""
    document.getElementById("drop").value=""
    document.getElementById("err").innerHTML=""
}

