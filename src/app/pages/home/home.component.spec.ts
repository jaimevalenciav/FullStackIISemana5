import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Nueva prueba unitaria para verificar la presencia de app-carousel desde el css al html
  it('should display the app-carousel component', () => {
    // Busca el elemento <app-carousel> en el DOM del componente
    const carouselElement = fixture.debugElement.query(By.css('app-carousel'));

    // Espera que el elemento del carrusel exista
    expect(carouselElement).toBeTruthy();
  });
});
