const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".nav-controls");
const sectBtn = document.querySelectorAll(".nav-control");
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    for(let i=0 ; i<sectBtn.length ; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn.forEach((btn)=>{
                btn.classList.remove("active-btn");

            })
            this.className += ' active-btn';
        } )
    }
    allSections.addEventListener('click',(e) =>{
        
        const id = e.target.dataset.id;
        
        if((id!='Work') && (id!='Education') && (id !=undefined) ){
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section) =>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
})

}
PageTransitions();



    function openBar(){
    const skillsList = document.querySelector(".skills_list");
    if(skillsList.classList.contains("skills-hide")){
        skillsList.classList.add('skills-show');
        skillsList.classList.remove("skills-hide");
    }
    else if(skillsList.classList.contains("skills-show")){
        skillsList.classList.add('skills-hide');
        skillsList.classList.remove("skills-show");
    }

}
 function openBars(){
 const skillsLists = document.querySelector(".skills_lists");
    if(skillsLists.classList.contains("skills-hide")){
        skillsLists.classList.add('skills-show');
        skillsLists.classList.remove("skills-hide");
    }
    else if(skillsLists.classList.contains("skills-show")){
        skillsLists.classList.add('skills-hide');
        skillsLists.classList.remove("skills-show");
    }

}

function activeTab(){
    const tab=document.querySelector(".q-tabs");
    const qbtns=document.querySelectorAll('.tab-buttons');
    const qsec=document.querySelectorAll(".qcontent");

       for(let i=0 ; i<qbtns.length ; i++){
        qbtns[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btnn');
            currentBtn.forEach((btn)=>{
                btn.classList.remove("active-btnn");

            })
            this.className += ' active-btnn';
        } )
    }
    
    tab.addEventListener('click',(e) =>{
        const id1 = e.target.dataset.id;
        console.log(id1);
        if(id1){
            qsec.forEach((section) =>{
                section.classList.remove('qactive');

            })
            const element = document.getElementById(id1);
            element.classList.add('qactive');
        }
})
}
activeTab();

function rotateArrow(){
    const arrow =document.querySelectorAll('.skills_arrow');
    arrow.forEach((arr)=>{
        arr.addEventListener('click',(e)=>{
            if(e.target.classList.contains("down")){
                e.target.classList.remove("down");
            }
            else{
                e.target.classList.add("down");
            }
        })
    } )
}
rotateArrow();

const form = document.querySelector("form");
var fname = document.querySelector("#first-name");
var lname = document.querySelector("#last-name");
var mail = document.querySelector('#email');
form.addEventListener('submit', (e)=>{
    checkInputs();
});
function checkInputs(){
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = mail.value.trim();
    var a = /^[a-zA-Z ]+$/;
    var e = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (fnameValue === ''){
        setErrorFor(fname, 'First name can not be blank');
    }
     else if(a.test(fnameValue)==false){
        setErrorFor(fname, 'Use Alphabets Only');
        
    }
    else{
        setSuccessFor(fname);

    }
    if (lnameValue === ''){
        setErrorFor(lname, 'Last name can not be blank');
    }
    else if(a.test(lnameValue)==false){
         setErrorFor(lname, 'Use Alphabets Only');

    }
     else{
        setSuccessFor(lname);

     }
    if (emailValue === ''){
        setErrorFor(mail, 'Email can not be blank');
    }
    else if(e.test(emailValue)==false){
        setErrorFor(mail, 'Invalid Format');

    }
     else{
        setSuccessFor(mail);

     }
}
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';

}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' characters';

}
