
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/gegevens/',
    componentUrl: './pages/gegevens.html',
  },
  {
    path: '/gegevens/:id/',
    componentUrl: './pages/product.html',
  },
  {
    path: '/locatie/',
    url: './pages/locatie.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
