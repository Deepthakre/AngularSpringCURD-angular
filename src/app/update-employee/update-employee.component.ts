import { Component } from '@angular/core';
import { Employee } from 'src/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employee:Employee=new Employee();
  id!: number;

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,
    private router:Router){}

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error)
    );
  }
 
  onSubmit(){

   this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
        this.gotoEmp();
   },error=>console.log(error)
   )
    
  }
  gotoEmp(){
    this.router.navigate(['/employees']);
  }
}
