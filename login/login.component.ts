import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  form: FormGroup = this.formBuilder.group({
    username:'',
    password: ''
});

  
  constructor(private formBuilder: FormBuilder,private service:AuthService,private authService:AuthService,private router:Router, private toastr: ToastrService) { }
  ngOnInit(): void {
   }

   onSubmit()
{
  this.submitted = true;
   // stop here if form is invalid
   if (this.form.invalid) 
   {
    return;
   } 

  const data=this.form?.getRawValue();
  console.log(this.form);
  
  // this.authService.login(data).subscribe(
  //   (res : any)=>
  //   {
  //    console.log(res);
  //    localStorage.setItem('token',res.token);
    

  //    },
  //     err=>{
  //      if(err.status== 400)
  //      this.toastr.error('Incorrect Email or Password.','Authentication Failed');
  //      else
  //      this.toastr.error('Login Success.','Authentication Success');
  //     });
  // this.router.navigateByUrl('/dashboard');
 }
btnClick()
{
this.router.navigateByUrl('/dashboard');
};
}