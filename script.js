const profile=document.getElementById("profile");
const button=document.getElementById("btn");

button.onclick=function toggle(){
    if(profile.style.display!=='block'){
        profile.style.display='block';
    } else{
        profile.style.display='none';
    }
};