// import * as React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { observer, inject } from 'mobx-react';

// const PrivateRoute = inject('rootStore')(observer(({ component: Component, exact = false, path, rootStore }) => {
//   // const { authed } = rootStore;

//   // storage access_token
//   // const storageCredential = localStorage.getItem('credentials');
//   // const credentials = storageCredential ? JSON.parse(storageCredential) : null;

//   // const isAuthenticated =  credentials && credentials.access_token && authed;

//   const isAuthenticated = true;

//   return (
//     <Route
//       exact={exact}
//       path={path}
//       render={props => {
//         // props.rootStore = rootStore;
//         return (
//           isAuthenticated ? (
//             <Component {...props} />
//           ) : (
//               <Redirect
//                 to={{
//                   pathname: '/login',
//                   state: { from: props.location }
//                 }}
//               />
//             )
//         );
//       }}
//     />
//   );
// }));

// // const { object, bool, string, func } = PropTypes;

// export default PrivateRoute;
