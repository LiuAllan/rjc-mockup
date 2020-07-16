import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import '../styles/StyledBreadcrumbs.scss';

const Breadcrumbs = (props) => {
  // console.log(props);
  const { history, location } = props;
  const { pathname } = location;

  const pathnames = pathname.split("/").filter(x => x);
  // console.log(pathnames);
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator="›">
      {/*Home will never change. Is hardcoded*/}
      {pathnames.length > 0 ? 
        (<Link onClick={() => history.push('/')}>Home</Link>)
        : (<Typography>Home</Typography>)
      }

      {/*For each item in the array of pathnames*/}
      {pathnames.map((name, index) => {

        /*Get the path from the beginning fo array to the current index. index + 1 because slice is not inclusive.*/
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        /*Make the last item in path a non-link*/
        const isLast = index === pathnames.length - 1;

        return isLast ? (<Typography key={name}>{name.replace(/-/g, " ")}</Typography>)
          : <Link key={name} onClick={() => history.push(routeTo)}>{name.replace(/-/g, " ")}</Link>;
      })}
    </MUIBreadcrumbs>
  );
}

export default withRouter(Breadcrumbs);