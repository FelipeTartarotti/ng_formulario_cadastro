import { TabelaCadastroComponent } from './../tabela-cadastro/tabela-cadastro.component';
import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() aoListaDeClientes: EventEmitter<any> = new EventEmitter();
  public invalidField = "Campo inválido"

  public clenteForm = new FormGroup({
    nome: new FormControl("", Validators.required),
    sobrenome: new FormControl("", Validators.required),
    pis: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    telefone: new FormControl("", Validators.required),
  });

  constructor(private listaClientesService: ListaClientesService) { }

  ngOnInit(): void {
  }

  registrar() {
    if(!this.clenteForm.valid){
      alert("Formulário inválido, preencha todos os campos")
      return
    }

    this.listaClientesService.adicionar(this.clenteForm.getRawValue())

    this.limparRegistro();
  }

  limparRegistro() {
    this.clenteForm.reset()
  }

  remover(){
    alert("Remover")
  }

}
