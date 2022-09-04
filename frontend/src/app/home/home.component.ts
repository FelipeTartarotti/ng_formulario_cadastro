import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes: any;

  constructor(private service: ListaClientesService) {
    this.clientes = this.service;
  }

  ngOnInit(): void {
  }



}
