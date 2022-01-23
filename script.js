function addNewprfield(){
    // console.log("adding new field");

    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("prfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    let prOb = document.getElementById("pr");
    let prAddButtonOb=document.getElementById("prAddButton");

    prOb.insertBefore(newNode,prAddButtonOb);
}
 
function addNewskfield(){

    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("skfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    
    let skOb = document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);



}


function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");

    nameT.innerHTML=nameField;

 document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;
 document.getElementById("numberT").innerHTML=document.getElementById("numberField").value;
    document.getElementById("dobT").innerHTML=document.getElementById("birthField").value;
    document.getElementById("collegeT").innerHTML=document.getElementById("collegeField").value;

    document.getElementById("degreeT").innerHTML=document.getElementById("degreeField").value;

    document.getElementById("yearT").innerHTML=document.getElementById("graduationField").value;
    document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
    
 document.getElementById("aboutT").innerHTML=document.getElementById("aboutfield").value;


    let prs=document.getElementsByClassName("prfield");

    let str="";

    for (let e of prs){
        str=str+`<li> ${e.value} </li>`;

    }

    document.getElementById("projectT").innerHTML=str;

    let sks=document.getElementsByClassName("skfield");

    let str1="";

    for (let e of sks){
        str1=str1+`<li> ${e.value} </li>`;

    }

    document.getElementById("skillsT").innerHTML=str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block'
    
}

// // document.getElementById('generateCV').addEventListener('click',function(){
// //     document.getElementById('cv-form').style.display='none';
// //     document.getElementById('cv-template').style.display='flex';
// // });

function printCV(){

    window.print();
}

