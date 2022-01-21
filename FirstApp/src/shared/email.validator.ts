import { AbstractControl, ValidatorFn } from "@angular/forms";

//this is the first way to create custom validation...
export function forbiddenNameValidator1(control: AbstractControl): { [key: string]: any } | null {
    const forbidden = /admin/.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
}

// this is the second way to create custom validation...

export function forbiddenNameValidator2(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;

    }
}