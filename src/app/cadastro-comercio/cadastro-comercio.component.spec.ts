import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComercioComponent } from './cadastro-comercio.component';

describe('CadastroComercioComponent', () => {
  let component: CadastroComercioComponent;
  let fixture: ComponentFixture<CadastroComercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroComercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
