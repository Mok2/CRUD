var WebsiteName=document.getElementById("SiteName");
var WebsiteURL=document.getElementById("SiteURL");
var alertbox=document.getElementById("alertbox-b");
var SiteList=[];
if (JSON.parse(localStorage.getItem('Sites')) != null) {
    SiteList = JSON.parse(localStorage.getItem('Sites'));
    display();

}
function AddSite(){
    
  if(IsValid()==true){
    var site={
        name:WebsiteName.value,
        URL:WebsiteURL.value
    };
    SiteList.push(site);
    display();
    clearform();
    localStorage.setItem("Sites",JSON.stringify(SiteList));
  }
  else{
    alertbox.classList.remove("d-none");
  }
}

function clearform(){
    WebsiteName.value=" ";
    WebsiteURL.value="https:// ";
}
function display(){
    var cartona=" ";
    for(var i=0;i<SiteList.length;i++){
        cartona+=`<tr><td>${i+1}</td>
        <td>${SiteList[i].name}</td>
        <td> <a href="${WebsiteURL.value}" target="_blank"><button class="btn btn-danger"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-warning"><i class="fa-solid fa-trash pe-2"></i>Delete</button></td></tr>`;
    }
    document.getElementById("TableData").innerHTML=cartona;
}
function deleteProduct(elementNumber){
SiteList.splice(elementNumber,1);    
localStorage.setItem("Sites",JSON.stringify(SiteList));
display();
}
function RegexName(){
    var RegexName=/^.{3,10}$/;
    var guide=document.getElementById("NameGuide");
 
    if(RegexName.test(WebsiteName.value)){
        WebsiteName.classList.remove("is-invalid");
        WebsiteName.classList.add("is-valid");
        guide.classList.add("d-none");
        return true;
    }
    else{
        WebsiteName.classList.remove("is-valid");
        WebsiteName.classList.add("is-invalid");
        guide.classList.remove("d-none");
        return false;
    }
}
function RegexURL(){
var RegexURL=/^https:\/\/www\..+\.com/;
var guide=document.getElementById("URLGuide");
if(RegexURL.test(WebsiteURL.value)){
    WebsiteURL.classList.remove("is-invalid");
    WebsiteURL.classList.add("is-valid");
    guide.classList.add("d-none");
    return true;
}
else{
    WebsiteURL.classList.remove("is-valid");
    WebsiteURL.classList.add("is-invalid");
    guide.classList.remove("d-none");
    return false;
}

}
function IsValid(){
if(RegexURL()==true && RegexName()==true){

    return true;
}
else{
    return false;
}
}
function CloseBtn(){
    alertbox.classList.add("d-none");
}