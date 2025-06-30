import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // Importa By para buscar elementos en el DOM
import { SalasComponent } from './salas.component';

describe('SalasComponent', () => {
  let component: SalasComponent;
  let fixture: ComponentFixture<SalasComponent>;

  // Datos simulados para las salas, necesarios para las pruebas con @for
  const mockSalas = [
    {
      id: 1,
      titulo: 'Sala de Conferencias Grande',
      descripcion: 'Ideal para presentaciones y grandes reuniones.',
      imagen: 'sala1.jpg',
      alt: 'Sala 1',
      capacidad: '20 personas',
      precio: '$200/hora',
      equipamiento: ['Proyector', 'Pizarra interactiva', 'Sistema de sonido']
    },
    {
      id: 2,
      titulo: 'Sala de Reuniones Pequeña',
      descripcion: 'Perfecta para reuniones íntimas o sesiones de brainstorming.',
      imagen: 'sala2.jpg',
      alt: 'Sala 2',
      capacidad: '6 personas',
      precio: '$80/hora',
      equipamiento: ['Pantalla LED', 'Conexión HDMI']
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba 1: Verifica que el componente se cree correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Verifica que el método 'reservarSala' se llama al hacer clic en el botón "Reservar Ahora"
  it('should call reservarSala when "Reservar Ahora" button is clicked', () => {
    // Espía el método 'reservarSala' del componente
    spyOn(component, 'reservarSala');

    // Busca el primer botón de reserva en el DOM del componente
    const reservaButton = fixture.debugElement.query(By.css('.reserva-btn'));

    expect(reservaButton).toBeTruthy(); // Verifica que el botón exista

    // Simula un clic en el botón
    reservaButton.triggerEventHandler('click', null);

    // Espera que el método 'reservarSala' haya sido llamado con el ID de la primera sala simulada
    expect(component.reservarSala).toHaveBeenCalledWith(mockSalas[0].id);
  });

  // Prueba 3: Verifica que el método 'verEquipamiento' se llama al hacer clic en el botón "Ver Equipamiento"
  it('should call verEquipamiento when "Ver Equipamiento" button is clicked', () => {
    // Espía el método 'verEquipamiento' del componente
    spyOn(component, 'verEquipamiento');

    // Busca el primer botón de ver equipamiento en el DOM del componente
    const equipamientoButton = fixture.debugElement.query(By.css('.equipamiento-btn'));

    expect(equipamientoButton).toBeTruthy(); // Verifica que el botón exista

    // Simula un clic en el botón
    equipamientoButton.triggerEventHandler('click', null);

    // Espera que el método 'verEquipamiento' haya sido llamado con el ID de la primera sala simulada
    expect(component.verEquipamiento).toHaveBeenCalledWith(mockSalas[0].id);
  });

  // Prueba 4: Verifica que se renderice la cantidad correcta de tarjetas de sala
  it('should render the correct number of sala cards', () => {
    // Busca todos los elementos con la clase 'product-card'
    const salaCards = fixture.debugElement.queryAll(By.css('.product-card'));

    // Espera que el número de tarjetas renderizadas sea igual al número de salas en los datos simulados
    expect(salaCards.length).toBe(mockSalas.length);
  });
});
