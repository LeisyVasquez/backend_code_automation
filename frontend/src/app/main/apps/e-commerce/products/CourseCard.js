import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { lighten } from '@mui/material/styles';
import CourseInfo from './CourseInfo';
import CourseProgress from './CourseProgress';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function CourseCard({ course }) {
  function handleClick(item) {
    props.navigate(`/apps/e-commerce/products/${item.id}/${item.handle}`);
  }
  return (
    <Card className="flex flex-col max-w-sm h-384 shadow">
      <CardContent className="flex flex-col flex-auto p-24">
        <CourseInfo course={course} className="" />
      </CardContent>
      <CourseProgress className="" course={course} />
      <CardActions
        className="items-center justify-end py-16 px-24"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.03),
        }}
      >
        <Button
          to={`/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print`}
          component={Link}
          className="px-16 min-w-128"
          color="secondary"
          variant="contained"
          endIcon={
            <FuseSvgIcon className="" size={20}>
              heroicons-solid:arrow-sm-right
            </FuseSvgIcon>
          }
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard;
