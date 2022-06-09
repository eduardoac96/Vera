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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VivensComponent = void 0;
var core_1 = require("@angular/core");
var realState_service_1 = require("../services/realState.service");
var VivensComponent = /** @class */ (function () {
    function VivensComponent(realStateService) {
        this.realStateService = realStateService;
        this.products = [];
    }
    VivensComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.realStateService.getRealStateData().subscribe(function (data) {
            console.log(data);
            _this.products = data;
        });
    };
    ;
    VivensComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-vivens-component',
            templateUrl: './vivens.component.html',
            providers: [realState_service_1.RealStateService]
        }),
        __metadata("design:paramtypes", [realState_service_1.RealStateService])
    ], VivensComponent);
    return VivensComponent;
}());
exports.VivensComponent = VivensComponent;
//# sourceMappingURL=vivens.component.js.map