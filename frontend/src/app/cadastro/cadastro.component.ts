import { TabelaCadastroComponent } from './../tabela-cadastro/tabela-cadastro.component';
import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() aoListaDeClientes: EventEmitter<any> = new EventEmitter();

  nome: string = '';
  sobrenome: string = '';
  pis: string = '';
  email: string = '';
  telefone: string = '';

  constructor(private listaClientesService: ListaClientesService) { }

  ngOnInit(): void {
  }

  registrar() {
    const clienteEmitir = {
      nome: this.nome, sobrenome: this.sobrenome, pis: this.pis,
      email: this.email, telefone: this.telefone
    };

    this.listaClientesService.adicionar(clienteEmitir)

    this.limparRegistro();
  }

  limparRegistro() {
    this.nome = this.sobrenome = this.pis = this.telefone = this.email = '';
  }

}
