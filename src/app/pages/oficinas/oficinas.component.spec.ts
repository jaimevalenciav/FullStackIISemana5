import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // Importa By para buscar elementos en el DOM
import { OficinasComponent } from './oficinas.component';

describe('OficinasComponent', () => {
  let component: OficinasComponent;
  let fixture: ComponentFixture<OficinasComponent>;

  // Datos simulados para las oficinas, necesarios para las pruebas con *ngFor
  const mockOficinas = [
    { id: 1, titulo: 'Oficina Central', descripcion: 'Descripción 1', imagen: 'img1.jpg', alt: 'Oficina 1', precio: '$100/mes' },
    { id: 2, titulo: 'Oficina Sur', descripcion: 'Descripción 2', imagen: 'img2.jpg', alt: 'Oficina 2', precio: '$150/mes' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OficinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Verifica que el método 'reservarOficina' se llama al hacer clic en el botón
  it('should call reservarOficina when "Reservar Ahora" button is clicked', () => {
    // Espía el método 'reservarOficina' del componente
    // Esto nos permite verificar si el método fue llamado y con qué argumentos
    spyOn(component, 'reservarOficina');

    // Busca el primer botón de reserva en el DOM del componente
    // Usamos By.css con la clase 'reserva-btn' para encontrar el botón específico
    const reservaButton = fixture.debugElement.query(By.css('.reserva-btn'));

    // Verifica que el botón exista antes de intentar hacer clic en él
    expect(reservaButton).toBeTruthy();

    // Simula un clic en el botón
    // triggerEventHandler simula un evento en el elemento nativo
    reservaButton.triggerEventHandler('click', null);

    // Espera que el método 'reservarOficina' haya sido llamado
    // y que haya sido llamado con el ID de la primera oficina simulada (1)
    expect(component.reservarOficina).toHaveBeenCalledWith(mockOficinas[0].id);
  });

  // Prueba adicional: Verifica que se renderice la cantidad correcta de tarjetas de oficina
  it('should render the correct number of office cards', () => {
    // Busca todos los elementos con la clase 'product-card'
    const officeCards = fixture.debugElement.queryAll(By.css('.product-card'));

    // Espera que el número de tarjetas renderizadas sea igual al número de oficinas en los datos simulados
    expect(officeCards.length).toBe(mockOficinas.length);
  });
});
