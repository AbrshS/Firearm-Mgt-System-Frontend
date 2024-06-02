import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  static matchPassword(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordControl = control.get(password);
      const confirmPasswordControl = control.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null; // Return null if controls are not found
      }

      const error = passwordControl.value !== confirmPasswordControl.value ? { mismatch: true } : null;

      confirmPasswordControl.setErrors(error);

      return error;
    };
  }
}
