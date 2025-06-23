import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesoComponent } from './acceso.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AccesoComponent', () => {
  let component: AccesoComponent;
  let fixture: ComponentFixture<AccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccesoComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('formulario inválido si los campos requeridos están vacíos', () => {
    expect(component.accesoForm.valid).toBeFalsy();
  });

  it('debería limpiar el formulario con limpiarFormulario()', () => {
    component.accesoForm.patchValue({
      nombre: 'Pedro',
      apellido: 'Pérez',
      correo: 'pedro@example.com',
      fechaNacimiento: '2000-01-01',
      password: 'Password1',
      repetirPassword: 'Password1',
    });
    expect(component.accesoForm.valid).toBeTruthy();

    component.limpiarFormulario();
    expect(component.accesoForm.get('nombre')?.value).toBeNull();
  });
});
