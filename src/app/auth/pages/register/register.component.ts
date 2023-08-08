import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  myForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    avatar: [null],
    term: [false, Validators.required]
  });

  register(): void {
    if (this.myForm.invalid) {
      this.showValidationError();
      return;
    }

    if (this.myForm.value.password !== this.myForm.value.password2) {
      this.showAlert('Error de contraseñas', 'Las contraseñas no son iguales', 'info');
      return;
    }

    if (!this.myForm.value.term) {
      return;
    }

    if (this.myForm.valid) {
      this.showAlertAndRedirect('Usuario Registrado', 'success', 'auth/login');
    } else {
      this.showAlert('Error de registro', 'Usuario no registrado', 'info');
    }
  }

  showValidationError() {
    const form = document.querySelector('.container-form') as HTMLFormElement;
    form.classList.add('was-validated');
  }

  showAlert(title: string, message: string, icon: SweetAlertIcon) {
    Swal.fire({
      title,
      text: message,
      icon
    });
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

}
