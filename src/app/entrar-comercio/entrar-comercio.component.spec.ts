import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarComercioComponent } from './entrar-comercio.component';

describe('EntrarComercioComponent', () => {
  let component: EntrarComercioComponent;
  let fixture: ComponentFixture<EntrarComercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarComercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
