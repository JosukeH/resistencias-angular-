import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'resistencias';
  color1: string = ''
  color2: string = ''
  color3: string = ''
  tolerancia: string = ''
  resultado: number = 1 
  maxima: string = ''
  minima: string   = ''

  calcularTercera(number:string): number {
    switch(number){
      case '0':
      return 1 
      case '1':
      return 10 
      case '2': 
      return 100
      case '3':
      return 1000
      case '4':
      return 10000
      case '5': 
      return 100000
      case '6': 
      return 1000000
      case '7':
      return 10000000
      case '8':
      return 100000000
      case '9': 
      return 1000000000

      default: 
      return 0
    }
  }

  calcularPotencia() :void {
    const toleranciaNumber  = Number(this.tolerancia)
    const resultadoResistencia = Number(this.resultado)
    const number  = resultadoResistencia/100 * toleranciaNumber  
  // 120 / 100 * 5 
  // 12 
    this.minima = String(resultadoResistencia - number)
    this.maxima = String(resultadoResistencia+ number)

  }

  calcularResistencias(): void {
    console.log('====================================');
    console.log(this.color1, this.color2, this.color3, this.tolerancia);
    console.log('====================================');
    const suma = Number(this.color1+this.color2)
    const mult = this.calcularTercera(this.color3)
  
    this.resultado = suma*mult
    this.calcularPotencia()
  } 

}
