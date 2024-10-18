import { Routes } from '@angular/router';
import { ListarAlumnosComponent } from './componentes/alumnos/listar-alumnos/listar-alumnos.component';
import { AgregarCursosAlumnoComponent } from './componentes/alumnos/agregar-cursos-alumno/agregar-cursos-alumno.component';
import { CrearAlumnoComponent } from './componentes/alumnos/crear-alumno/crear-alumno.component';
import { ActualizarAlumnoComponent } from './componentes/alumnos/actualizar-alumno/actualizar-alumno.component';
import { BuscarAlumnoIdComponent } from './componentes/alumnos/buscar-alumno-id/buscar-alumno-id.component';
import { EliminarAlumnoComponent } from './componentes/alumnos/eliminar-alumno/eliminar-alumno.component';
import { BuscarCursosIdComponent } from './componentes/cursos/buscar-cursos-id/buscar-cursos-id.component';
import { ListarGradosComponent } from './componentes/grado/listar-grados/listar-grados.component';
import { ListarHorariosComponent } from './componentes/horario/listar-horarios/listar-horarios.component';
import { AgregarCursosHorarioComponent } from './componentes/horario/agregar-cursos-horario/agregar-cursos-horario.component';
import { ListaProfesoresComponent } from './componentes/profesor/lista-profesores/lista-profesores.component';
import { EliminarProfesoresComponent } from './componentes/profesor/eliminar-profesores/eliminar-profesores.component';
import { CrearProfesoresComponent } from './componentes/profesor/crear-profesores/crear-profesores.component';
import { BuscarProfesoresComponent } from './componentes/profesor/buscar-profesores/buscar-profesores.component';
import { ActualizarProfesoresComponent } from './componentes/profesor/actualizar-profesores/actualizar-profesores.component';
import { ListarSalonesComponent } from './componentes/salon/listar-salones/listar-salones.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path:'login',component:LoginComponent},


    //home
    {path:'',component:HomeComponent, canActivate: [AuthGuard]},


    //alumnos
    {path:'listarAlumnos',component:ListarAlumnosComponent, canActivate: [AuthGuard]},
    {path:'crearAlumnos',component:CrearAlumnoComponent, canActivate: [AuthGuard]},
    {path:'actualizarAlumnos',component:ActualizarAlumnoComponent, canActivate: [AuthGuard]},
    {path:'buscarAlumno',component:BuscarAlumnoIdComponent, canActivate: [AuthGuard]},
    {path:'eliminarAlumno',component:EliminarAlumnoComponent, canActivate: [AuthGuard]},
    {path:'agregarCursoAlumno',component:AgregarCursosAlumnoComponent, canActivate: [AuthGuard]},
   
    //cursos
    {path:'listarCursos',component:ListarAlumnosComponent, canActivate: [AuthGuard]},
    {path:'buscarCursos',component:BuscarCursosIdComponent, canActivate: [AuthGuard]},
 
    //grados
    {path:'listarGrados',component:ListarGradosComponent, canActivate: [AuthGuard]},

    //horario
    {path:'listarHorario',component:ListarHorariosComponent, canActivate: [AuthGuard]},
    {path:'agregarCursoHorario',component:AgregarCursosHorarioComponent, canActivate: [AuthGuard]},

    //profesor
    {path:'listarProfesores',component:ListaProfesoresComponent, canActivate: [AuthGuard]},
    {path:'eliminarProfesores',component:EliminarProfesoresComponent, canActivate: [AuthGuard]},
    {path:'crearProfesores',component:CrearProfesoresComponent, canActivate: [AuthGuard]},
    {path:'buscarProfesores',component:BuscarProfesoresComponent, canActivate: [AuthGuard]},
    {path:'actualizarProfesores',component:ActualizarProfesoresComponent, canActivate: [AuthGuard]},

    //salon
    {path:'listarSalones',component:ListarSalonesComponent, canActivate: [AuthGuard]},


];
