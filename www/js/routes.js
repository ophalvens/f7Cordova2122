
var routes = [
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  {
    path: '/gegevens/',
    componentUrl: './pages/gegevens.html',
    name: 'gegevens',
  },
  {
    path: '/locatie/',
    componentUrl: './pages/locatie.html',
    name: 'locatie',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
