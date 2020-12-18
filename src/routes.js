import React from 'react';
const HomePage = React.lazy(() => import('./views/Home/HomePage'));

export const privateRoutes = [
    { path: '/home', name: 'Home', component: HomePage },
]

export const publicRoutes = [
    ...privateRoutes,
    { path: '/', exact: true, name: 'Home' },
];

