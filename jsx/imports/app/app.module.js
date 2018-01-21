var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { MdToolbarModule, MdSidenavModule } from '@angular/material' 
import { AppComponent } from './app.component';
// import { AppComponent, AppRoutes, AppApollo } from './app.package'
// import { HomeModule } from './home/home.module';
// import { SidenavComponent } from './sidenav/sidenav.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component'
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            BrowserModule,
        ],
        exports: [],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
