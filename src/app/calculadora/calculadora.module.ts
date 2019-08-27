import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora.component';
import { CalculadoraService } from './services/calculadora.service';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  exports:[
    CalculadoraComponent
  ],
  providers:[
    CalculadoraService
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
