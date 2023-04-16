import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGeneroComponent } from './listado-genero.component';

describe('ListadoGeneroComponent', () => {
  let component: ListadoGeneroComponent;
  let fixture: ComponentFixture<ListadoGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
