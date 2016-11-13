import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{ InitializationString }}</h1>
        <pm-products></pm-products>
    `
})
export class AppComponent {
	InitializationString : string = "My First Application String!!"
 }
