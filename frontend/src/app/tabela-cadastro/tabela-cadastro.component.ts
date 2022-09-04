import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-cadastro',
  templateUrl: './tabela-cadastro.component.html',
  styleUrls: ['./tabela-cadastro.component.css']
})
export class TabelaCadastroComponent implements OnInit {
  clientes: any;

  constructor(public listaClientesService:ListaClientesService) { }

  ngOnInit(): void {
    console.log("teste")
    this.clientes = this.listaClientesService.clientes;
    console.log(this.clientes)
  }



}
