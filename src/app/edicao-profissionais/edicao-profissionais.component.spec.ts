import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProfissionaisComponent } from './edicao-profissionais.component';

describe('EdicaoProfissionaisComponent', () => {
  let component: EdicaoProfissionaisComponent;
  let fixture: ComponentFixture<EdicaoProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoProfissionaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdicaoProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
