"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.PageTitle = "Product List (Software)";
        this.Products = [
            {
                "ProductId": 1,
                "ProductName": "Beyond Compare 3",
                "Version": "3.23.4.1",
                "Price": 130.50,
                "Rating": 3.5
            },
            {
                "ProductId": 2,
                "ProductName": "Visual Studio 2015",
                "Version": "14.0.21.23",
                "Price": 1300.00,
                "Rating": 4.6
            }
        ];
    }
    ProductListComponent = __decorate([
        core_1.Component({
            selector: "pm-products",
            templateUrl: "app/ProductList/ProductList.Component.html",
            styleUrls: ["app/ProductList/ProductList.Component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=ProductList.Component.js.map