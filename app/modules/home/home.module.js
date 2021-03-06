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
const Modules = require('../../utils/module.providers');
const shared_module_1 = require('../../shared/shared.module');
const home_component_1 = require('./home.component');
const home_routing_1 = require('./home.routing');
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    Modules.NgModule({
        imports: [Modules.CommonModule, shared_module_1.SharedModule, home_routing_1.routing],
        declarations: [home_component_1.Home_Component]
    }), 
    __metadata('design:paramtypes', [])
], HomeModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeModule;
