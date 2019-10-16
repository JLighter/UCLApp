import { ValidationErrors, AbstractControl } from '@angular/forms';


export const containsValidator = (text: string) => (control: AbstractControl): null | ValidationErrors => {
    const contains = new RegExp(text).test(control.value)

    if (!contains) {
        return {
            contains: {
                isContaining: false,
                match: text
            }
        }
    } else {
        return null
    }

}