import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProfissionaisComponent } from './cadastro-profissionais.component';

describe('CadastroProfissionaisComponent', () => {
  let component: CadastroProfissionaisComponent;
  let fixture: ComponentFixture<CadastroProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroProfissionaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
