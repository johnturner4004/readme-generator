import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../layout/Login';
import { useSelector } from 'react-redux';

export default function ProtectedRoute(props) {
  const user = useSelector(store => store.user);
  console.log(`user:`, user);

  const {
    authRedirect,
    ...otherProps
  } = props;

  const ComponentToProtect = props.component || (() => props.children);

  console.log(`Component to protect: ${ComponentToProtect}`);

  let ComponentToShow;

  if (user.id) {
    ComponentToShow = ComponentToProtect;
  } else {
    ComponentToShow = Login;
  }

  console.log(`authRedirect: ${authRedirect}`);

  if (user.id && authRedirect != null) {
    return <Redirect exact from={otherProps.path} to={authRedirect} />;
  }

  return(
    <Route {...otherProps}>
      <ComponentToShow />
    </Route>
  )
}