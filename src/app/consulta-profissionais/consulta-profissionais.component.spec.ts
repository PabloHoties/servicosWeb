import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProfissionaisComponent } from './consulta-profissionais.component';

describe('ConsultaProfissionaisComponent', () => {
  let component: ConsultaProfissionaisComponent;
  let fixture: ComponentFixture<ConsultaProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaProfissionaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
