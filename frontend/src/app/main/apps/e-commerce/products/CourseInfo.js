import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import clsx from 'clsx';
import CourseCategory from './CourseCategory';

function CourseInfo({ course, className }) {

  
  //ourse.title ="hola";
  //course.description="hola;"
  // if (!course) {
  //   return co;
  // }

  return (
    <div className={clsx('w-full', className)}>
     
     <FuseSvgIcon className="text-green-600 " size={25}    style={{ float: "right" }}>
            heroicons-solid:badge-check
      </FuseSvgIcon>
      <Typography className="text-16 font-medium">Proyecto:</Typography> 
      <Typography className="text-16 font-medium">Aplicación Móvil para la Gestión de Tareas</Typography> 
      <Divider className="w-30  border-1" light />
      <Typography className="text-16 font-medium">Descripcion:</Typography> 
      <Typography className="text-13 mt-2 " color="text.secondary">
      El proyecto consiste en desarrollar una aplicación móvil 
      intuitiva y eficiente que permita a los usuarios gestionar y organizar 
      sus tareas de manera efectiva. La aplicación estará disponible 
      para dispositivos iOS y Android y proporcionará una interfaz amigable para facilitar
       la experiencia del usuario.
      </Typography>
  {/* 
      

      <Divider className="w-48 my-24 border-1" light />

      <Typography className="flex items-center space-x-6 text-13" color="text.secondary">
        <FuseSvgIcon color="disabled" size={20}>
          heroicons-solid:clock
        </FuseSvgIcon>
        <span className="whitespace-nowrap leading-none">{`${course.duration} minutes`}</span>
      </Typography>
      <Typography className="flex items-center space-x-6 text-13 mt-8" color="text.secondary">
        <FuseSvgIcon color="disabled" size={20}>
          heroicons-solid:academic-cap
        </FuseSvgIcon>
        <span className="whitespace-nowrap leading-none">
          {course.progress.completed === 1 && 'Completed once'}
          {course.progress.completed === 2 && 'Completed twice'}
          {course.progress.completed > 2 && `Completed ${course.progress.completed} times`}
          {course.progress.completed <= 0 && 'Never completed'}
        </span>
      </Typography> */}
    </div>
  );
}

export default CourseInfo;
