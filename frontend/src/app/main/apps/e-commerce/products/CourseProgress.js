import LinearProgress from '@mui/material/LinearProgress';
import clsx from 'clsx';

function CourseProgress({ course, className }) {
  return (
    <LinearProgress
      className={clsx('w-full h-2', className)}
      variant="determinate"
      color="secondary"
    />
  );
}

export default CourseProgress;
