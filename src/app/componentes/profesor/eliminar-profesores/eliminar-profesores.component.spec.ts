import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProfesoresComponent } from './eliminar-profesores.component';

describe('EliminarProfesoresComponent', () => {
  let component: EliminarProfesoresComponent;
  let fixture: ComponentFixture<EliminarProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarProfesoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
