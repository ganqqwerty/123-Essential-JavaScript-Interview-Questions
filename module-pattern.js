var Employee = (function(){
  'use strict';

  var _employeeList = [];
  var _employeeId = 1;

  return {
    addEmployee : function(employee){
      if(typeof employee === 'object'){
        employee.id = _employeeId;
        _employeeList.push(employee);
        _employeeId++;
      }
    },

    resetEmployeeList : function(){
        _employeeList = [];
        _employeeId = 1;
    },

    displayEmployee : function(){
      if(_employeeList.length){
        for(var i = 0, len = _employeeList.length ; i < len ; i++ ){
          console.log(_employeeList[i].id);
        }
      }
    },

    totalEmployee : function(){
      console.log("Total Number of employee : " + (_employeeId-1));
    }

  }
}).call();

Employee.addEmployee({name: "Nishant"});
Employee.addEmployee({name: "Vicky"});
Employee.totalEmployee();
Employee.displayEmployee();
