//class SalaryCalc{  // ES 6
  /*  constructor(salary){
        this.salary = salary;
    }*/
    const salaryOperations = {
        salary:0,
    hra(){
        return this.salary * 0.30;
 },
 da(){
     return this.salary * 0.20;
 },
 ta(){
     return this.salary * 0.10;
 },
 pf(){
     return this.salary * 0.05;
 },
 gs(){
     return this.salary + this.hra() + this.da() + this.ta() ;
 },
 ns(){
    return this.gs() - this.pf();
 }
}

/*
// ES 5 and before
function SalaryCalc{
}
}*/