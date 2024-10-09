import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../service/cliente.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-table',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cliente-table.component.html',
  styleUrls: ['./cliente-table.component.css']
})
export class ClienteTableComponent {
  selectedClient!: Cliente;
  clienteList!: Cliente[];

  constructor(private clienteService: ClienteService){
    
  }

  ngOnInit():void{
    this.clienteService.findAll().subscribe(
      (clientes) => this.clienteList = clientes
    )
  } 

  mostrarCliente(cliente:Cliente){
    this.selectedClient = cliente;
  }

  agregarCliente(cliente:Cliente){
    this.clienteList.push(cliente);
    this.clienteService.addCliente(cliente);
  }

  eliminarCliente(cliente:Cliente){
    var index = this.clienteList.indexOf(cliente);
    this.clienteList.splice(index,1);
    this.clienteService.deleteById(cliente.id);
  }
}
