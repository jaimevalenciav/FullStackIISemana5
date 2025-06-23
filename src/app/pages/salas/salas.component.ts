import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Sala {
  id: number;
  titulo: string;
  descripcion: string;
  precio: string;
  imagen: string;
  alt: string;
  capacidad?: string;
  equipamiento?: string[];
}

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent {
  
  salas: Sala[] = [
    {
      id: 1,
      titulo: 'Sala 1',
      descripcion: 'Perfecta para pequeñas juntas y entrevistas con un ambiente íntimo.',
      precio: '$84.990 por Semana',
      imagen: './assets/sala1.jpg',
      alt: 'Sala 1',
      capacidad: '4-6 personas',
      equipamiento: ['TV 42"', 'Mesa de juntas', 'Sillas ergonómicas', 'WiFi Premium']
    },
    {
      id: 2,
      titulo: 'Sala 2', 
      descripcion: 'Más amplia, es ideal para presentaciones y talleres interactivos.',
      precio: '$371.990 por Semana',
      imagen: './assets/sala2.jpg',
      alt: 'Sala 2',
      capacidad: '10-15 personas',
      equipamiento: ['Proyector HD', 'Sistema de audio', 'Pizarra digital', 'Videoconferencia']
    },
    {
      id: 3,
      titulo: 'Sala 3',
      descripcion: 'Proporciona un entorno ejecutivo para conferencias importantes y sesiones estratégicas, garantizando conectividad avanzada y un ambiente propicio para la colaboración.',
      precio: '$21.990 por Semana', 
      imagen: './assets/sala3.jpg',
      alt: 'Sala 3',
      capacidad: '20-25 personas',
      equipamiento: ['Sistema AV completo', 'Mesa de conferencias premium', 'Climatización', 'Servicio de catering']
    }
  ];

  constructor() { }

  reservarSala(salaId: number): void {
    // Aquí puedes implementar la lógica de reserva
    console.log(`Reservando sala ${salaId}`);
    
    // Ejemplo de implementación con alert (puedes cambiar por modal o navegación)
    const sala = this.salas.find(s => s.id === salaId);
    if (sala) {
      alert(`Has seleccionado ${sala.titulo}. Capacidad: ${sala.capacidad}. Precio: ${sala.precio}`);
    }
  }

  verEquipamiento(salaId: number): void {
    const sala = this.salas.find(s => s.id === salaId);
    if (sala && sala.equipamiento) {
      const equipos = sala.equipamiento.join('\n• ');
      alert(`Equipamiento de ${sala.titulo}:\n\n• ${equipos}`);
    }
  }
}