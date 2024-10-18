import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../../../modelo/Alumnos';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-alumnos',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './listar-alumnos.component.html',
  styleUrl: './listar-alumnos.component.css',
})
export class ListarAlumnosComponent implements OnInit{
  
  //1.
  Alumnos? : Alumnos[];

  //2.
  constructor(private router : Router, private alumnosService : AlumnosService){}

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe(
        data => {
            console.log('Datos recibidos:', data); // Verifica la estructura aquí
            this.Alumnos = data;
        },
        error => {
            console.log('Error al obtener alumnos:', error);
        }
    );
}



  editarAlumnos(alumnos:Alumnos):void{
      console.log("Editanto alumno: " , alumnos);
      localStorage.setItem("id",alumnos.id.toString());
      this.router.navigate(['/actualizarAlumnos']);
  }

  eliminarAlumno(id: any) {
    Swal.fire({
      title: '¿Estás seguro de eliminar el alumno?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.alumnosService.deleteAlumno(id).subscribe(
          data  => {
            console.log("Alumno eliminado",data);
            this.Alumnos = this.Alumnos?.filter(item => item.id !== id);
            this.alertaExitosa("Alumno eliminado con éxito.");
          },
          error => {
            console.error('Error al eliminar el producto', error);
          }
        )
      }})
    }

  crearAlumno(): void{
      console.log("Creando un nuevo alumno");
      this.router.navigate(['/crearAlumnos']);
  }

  agregarCursoAlumno(alumnos:Alumnos): void{
}

alertaExitosa(titulo: any){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Producto "+titulo,
    showConfirmButton: false,
    timer: 1500
  });
}

}
