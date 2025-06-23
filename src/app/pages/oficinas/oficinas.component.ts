import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Oficina {
  id: number;
  titulo: string;
  descripcion: string;
  precio: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-oficinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent {
  
  oficinas: Oficina[] = [
    {
      id: 1,
      titulo: 'Oficina 1',
      descripcion: 'Perfecta para desarrollo e innovación, se beneficia de una ubicación estratégica y características que promueven la productividad y el bienestar de los equipos.',
      precio: '$84.990 por Semana',
      imagen: './assets/oficina1.jpg',
      alt: 'Oficina 1'
    },
    {
      id: 2,
      titulo: 'Oficina 2', 
      descripcion: 'Optimizada para gestión administrativa y coordinación.',
      precio: '$371.990 por Semana',
      imagen: './assets/oficina2.jpeg',
      alt: 'Oficina 2'
    },
    {
      id: 3,
      titulo: 'Oficina 3',
      descripcion: 'Ideal para atención al cliente y ventas.',
      precio: '$21.990 por Semana', 
      imagen: './assets/oficina3.jpg',
      alt: 'Oficina 3'
    }
  ];

  constructor() { }

  reservarOficina(oficinaId: number): void {
    // Aquí puedes implementar la lógica de reserva
    console.log(`Reservando oficina ${oficinaId}`);
    
    // Ejemplo de implementación con alert (puedes cambiar por modal o navegación)
    const oficina = this.oficinas.find(o => o.id === oficinaId);
    if (oficina) {
      alert(`Has seleccionado ${oficina.titulo}. Precio: ${oficina.precio}`);
    }
  }
}