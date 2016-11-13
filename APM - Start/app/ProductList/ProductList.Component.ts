import { Component } from '@angular/core';
import { IProduct } from './product'
import { ProductFilterPipe } from  './Product-Filter.Pipe';


@Component({
	selector : "pm-products",
	templateUrl : "app/ProductList/ProductList.Component.html",
	styleUrls : ["app/ProductList/ProductList.Component.css"]
})

export class ProductListComponent
{
	PageTitle : string = "Product List (Software)";
	listFilter : string ;
	Products: IProduct[] = [
		{
			"ProductId" : 1,
			"ProductName" : "Beyond Compare 3",
			"Version" : "3.23.4.1",
			"Price" : 130.50,
			"Rating": 3.5
		},
		{
			"ProductId" : 2,
			"ProductName" : "Visual Studio 2015",
			"Version" : "14.0.21.23",
			"Price" : 1300.00,
			"Rating": 4.6
		}
	];
}