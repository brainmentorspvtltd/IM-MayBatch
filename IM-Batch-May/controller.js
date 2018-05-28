window.addEventListener("DOMContentLoaded",()=>document.querySelector("#compute").addEventListener("click",computeSalary));
/*function init(){
    
    document.querySelector("#compute").addEventListener("click",computeSalary);
}*/
function computeSalary(){
    var salary = parseInt(document.querySelector("#salary").value);
    salaryOperations.salary = salary;
    //var salaryObject = new SalaryCalc(salary);
   // document.querySelector("#hra").innerHTML = salaryObject.hra();
  // var fields = ["hra","da","ta","pf","gs","ns"];
  var fields = document.querySelectorAll(".calc");
   for(let field of fields){
       setFields(field.id,salaryOperations);
   }
}
function setFields(id,salaryObject){
    document.querySelector("#"+id).innerHTML = salaryObject[id]();
}