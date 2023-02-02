import { Directive } from "@angular/core";
import { Validator, FormGroup, AbstractControl, ValidationErrors, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[validateLocation]',
    providers:[{provide: NG_VALIDATORS, useExisting:LocationValidator, multi:true}] 
})

export class LocationValidator implements Validator {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validate(formGroup: FormGroup) :  { [key: string] : any } {
            {
                const addressControl = formGroup.controls['address'];
                const cityControl = formGroup.controls['city'];
                const countryControl=formGroup.controls['country'];
                const onlineUrlControl=(<FormGroup>formGroup.root).controls['onlineUrl'];

                if(
                    (addressControl && 
                    addressControl.value && 
                    cityControl && 
                    cityControl.value &&
                    countryControl &&
                    countryControl.value)
                    || (onlineUrlControl && onlineUrlControl.valid)
                    ){
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        return null!;
                    }
                    else {
                        return {validateLocation:false}
                    }
            }
        }

}