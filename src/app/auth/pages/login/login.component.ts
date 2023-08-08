import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }
  ngOnInit(): void {

  }

  myForm: FormGroup = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [false],
  });


  login() {
    if (this.myForm.invalid) {
      this.showValidationError();
      return;
    }

    if (this.myForm.get('remember')?.value) {
      localStorage.setItem('email', this.myForm.get('email')?.value);
    } else {
      localStorage.removeItem('email');
    }

    if (this.myForm.valid) {
      this.showAlertAndRedirect('Inicio de session', 'success', 'landing-page/home');
    } else {
      this.showAlert('Error de registro', 'Usuario no registrado', 'info');
    }


  }

  showValidationError() {
    const form = document.querySelector('.container-form') as HTMLFormElement;
    form.classList.add('was-validated');
  }

  showAlertAndRedirect(title: string, icon: SweetAlertIcon, redirectUrl: string) {
    Swal.fire({
      title,
      icon,
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.route.navigateByUrl(redirectUrl);
    });
  }

  showAlert(title: string, message: string, icon: SweetAlertIcon) {
    Swal.fire({
      title,
      text: message,
      icon
    });
  }

}
