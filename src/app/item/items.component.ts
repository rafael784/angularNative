import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    
    public counter: number = 16;

    loginForm: FormGroup;
    usernameControl: AbstractControl;
    username = 'sdfs';
    recipient = "";

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            usernameControl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
        });
        this.usernameControl = this.loginForm.controls['usernameControl'];
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap(value) {
        this.counter--;
        this.username = this.usernameControl.value;
        console.log(value);
    }
}
