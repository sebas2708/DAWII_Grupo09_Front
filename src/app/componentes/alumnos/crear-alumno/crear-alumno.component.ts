import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, RouterOutlet ,Router} from '@angular/router';
import { Alumnos } from '../../../modelo/Alumnos';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { GradosService } from '../../../servicios/grados.service';
import { CursosService } from '../../../servicios/cursos.service';
import { SalonesService } from '../../../servicios/salones.service';
import { Grados } from '../../../modelo/Grado';
import { Cursos } from '../../../modelo/Cursos';
import { Salon } from '../../../modelo/Salon';


@Component({
  selector: 'app-crear-alumno',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css'
})
export class CrearAlumnoComponent implements OnInit{
  
  
  ngOnInit(): void {
    this.cargarCursos();
    this.cargarGrados();
    this.cargarSalones();
  }

  nuevoAlumno : Alumnos ={
    id: 0,
    nombre: '',
    paterno: '',
    materno: '',
    nacimiento:  new Date('1990-05-15'),
    gradoDTO: {id:0, descripcion:''},
    cursosDTO:  [ 
      { id: 1, descripcion: 'Matemática', seleccionado: true }, 
      { id: 2, descripcion: 'Religion', seleccionado: true } ],
    salonDTO: {id:0 , descripcion:''}
  };

  constructor(
    private router : Router,
    private alumnoService : AlumnosService,
    private gradoService : GradosService,
    private cursoService : CursosService,
    private salonService : SalonesService
  ){}

  gradoSeleccionado : Grados | null = null;
  cursoSeleccionado : Cursos[] = [];
  salonSeleccionado : Salon | null = null;

  grados: Grados[] = [];
  cursos: Cursos[] = [];
  salones: Salon[] = [];

  toggleAll(event: any) {
    this.cursos.forEach(curso => {
      curso.seleccionado = event.target.checked;
    });
  }

  toggleCurso(curso: Cursos) {
    const index = this.cursoSeleccionado.indexOf(curso);
    if (index > -1) {
      this.cursoSeleccionado.splice(index, 1);
    } else {
      this.cursoSeleccionado.push(curso);
    }
  }

  cargarGrados():void{
    this.gradoService.getGrados().subscribe(
      grados => {
        this.grados = grados;
        console.log(this.grados); 
      },
      error => {
        console.error(error);
      }
    )
  }

  cargarCursos():void{
    this.cursoService.getCursos().subscribe(
      cursos => { this.cursos = cursos }
    )
  }

  cargarSalones():void{
    this.salonService.getSalones().subscribe(
      salones => {
        this.salones = salones;
        console.log(this.salones); 
      },
      error => {
        console.error(error);
      }
      
    )
  }

  /**Como en el Spring , las propiedades anidadas son las que tengo que setear manualmente */
  guardar(form: NgForm): void {
    if (form.invalid) {
      return; // Detener el envío si el formulario no es válido
    }

    if (this.nuevoAlumno.nacimiento > new Date()) {
      alert('La fecha de nacimiento no puede ser en el futuro.');
      return;
    }

    this.nuevoAlumno.gradoDTO = this.gradoSeleccionado || this.nuevoAlumno.gradoDTO;
    this.nuevoAlumno.cursosDTO = this.cursoSeleccionado || this.nuevoAlumno.cursosDTO;
    this.nuevoAlumno.salonDTO = this.salonSeleccionado || this.nuevoAlumno.salonDTO;
    // ... asignaciones similares para cursoSeleccionado y salonSeleccionado

    this.alumnoService.createAlumno(this.nuevoAlumno)
      .subscribe(
        () => {
          this.router.navigate(['/listarAlumnos']);
          console.log('Grado seleccionado:', this.gradoSeleccionado);
          console.log('Cursos seleccionados:', this.cursoSeleccionado);
          console.log('Salon seleccionado:', this.salonSeleccionado);
        },
        error => {
          // Mostrar un mensaje de error al usuario
          console.error('Error al crear alumno', error);
          // Implementar un mecanismo de reintento si es necesario
        }
      );
  }

}
