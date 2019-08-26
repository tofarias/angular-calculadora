import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services/calculadora.service';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { isNull } from 'util';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

private numero1: string
private numero2: string
private resultado: number
private operacao: string

  constructor(
    private calduladoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar()
  }

  limpar(): void{
    this.numero1 = '0'
    this.numero2 = null
    this.resultado = null
    this.operacao = null
  }

  adicionarNumero(numero: string) : void
  {
    if( this.operacao === null )
      this.numero1  = this.concatenarNumero(this.numero1, numero)
    {
      this.numero2  = this.concatenarNumero(this.numero2, numero)
    }
  }

  /**
   *
   * @param numAtual Retorna o valor concatenado. Trata o separador decimal
   * @param numConcat
   */
  concatenarNumero(numAtual: string, numConcat: string): string
  {
    if( numAtual ==='0' ){
      numAtual = ''
    }

    if( numConcat === '.' && numAtual === '' ){
      return '0.'
    }

    if ( numConcat === '.' && numAtual.indexOf('.') > -1 ){
      return numAtual
    }

    return numAtual + numConcat
  }

  definirOperacao(operacao: string): void{
    if(this.operacao === null){
      this.operacao = operacao
      return
    }

    if( this.numero2 !== null ){
      this.resultado = this.calduladoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      )

      this.operacao = operacao
      this.numero1 = this.resultado.toString()
      this.numero2 = null
      this.resultado = null
    }
  }

  get Display(): string{
    if( this.resultado !== null ){
      return this.resultado.toString()
    }
    if(this.numero2 !== null){
      return this.numero2
    }
    return this.numero1
  }
}
