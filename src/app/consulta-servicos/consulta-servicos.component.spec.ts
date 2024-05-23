import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaServicosComponent } from './consulta-servicos.component';

describe('ConsultaServicosComponent', () => {
  let component: ConsultaServicosComponent;
  let fixture: ComponentFixture<ConsultaServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
