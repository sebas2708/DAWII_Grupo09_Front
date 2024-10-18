import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGradosComponent } from './listar-grados.component';

describe('ListarGradosComponent', () => {
  let component: ListarGradosComponent;
  let fixture: ComponentFixture<ListarGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarGradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
