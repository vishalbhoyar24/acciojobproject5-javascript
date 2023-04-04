var row=null;
function Submit(){
    var dataEntered=retrieveData();
    var readData=readingDataFromLocalStorage(dataEntered);
    if(dataEntered==false){
        msg.innerHTML=`<h3 style="color":red;" >Please Enter Data!"</h3>`
    }else{
        if(row==null){
            insert(readData);
            msg.innerHtml=`<h3 style="color:green;">Data Inserted!</h3>`
        }else{
            update();
            msg.innerHTML=`<h3 style="color:orange;">Data Updated</h3>`
        }
    }
    document.getElementById("form").reset();
}

function retrieveData(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var gpa=document.getElementById("gpa").value;
    var age=document.getElementById("age").value;
    var degree=document.getElementById("degree").value;
    var arr=[name,email,gpa,age,degree];
    if(arr.includes("")){
        return false;
    }
    else{
        return arr;
    }
}
function readingDataFromLocalStorage(dataEntered){
var n=localStorage.setItem("Name",dataEntered[0]);
var j=localStorage.setItem("Email",dataEntered[1]);
var e=localStorage.setItem("Gpa",dataEntered[2]);
var q=localStorage.setItem("Age",dataEntered[3]);
var w=localStorage.setItem("Degree",dataEntered[4]);

var n1=localStorage.getItem("Name",n);
var j1=localStorage.getItem("Email",j);
var e1=localStorage.getItem("Gpa",e);
var q1=localStorage.getItem("Age",q);
var w1=localStorage.getItem("Degree",w);
var arr=[n1,j1,e1,q1,w1];
return arr;

}
function insert(readData){
    var row=table.insertRow();
    row.insertCell(0).innerHTML=readData[0];
    row.insertCell(1).innerHTML=readData[1];
    row.insertCell(2).innerHTML=readData[2];
    row.insertCell(3).innerHTML=readData[3];
    row.insertCell(4).innerHTML=readData[4];
    row.insertCell(5).innerHTML=`<button onclick=edit(this)>Edit</button>
                               <button onclick=remove(this)>Delete</button>`;
}
function edit(td){
     row=td.parentElement.parentElement;
    document.getElementById("name").value=row.cells[0].innerHTML;
    document.getElementById("email").value=row.cells[1].innerHTML;
    document.getElementById("gpa").value=row.cells[2].innerHTML;
    document.getElementById("age").value=row.cells[3].innerHTML;
    document.getElementById("degree").value=row.cells[4].innerHTML;
}
function update(){
    row.cells[0].innerHTML=document.getElementById("name").value;
    row.cells[1].innerHTML=document.getElementById("email").value;
    row.cells[2].innerHTML=document.getElementById("gpa").value;
    row.cells[3].innerHTML=document.getElementById("age").value;
    row.cells[4].innerHTML=document.getElementById("degree").value;
    row=null;
}
function remove(td){
  var ans=confirm("are you sure you want to delete this record?");
  if(ans==true){
    row=td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
  }

}