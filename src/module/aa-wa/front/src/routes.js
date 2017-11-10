function load(name) {
  return require(`./pages/${name}.vue`).default;
}

export default [
  { path: 'articles', component: load('articles') },
  { path: 'mine', component: load('mine'), meta: { requiresAuth: true } },
  { path: 'articleAdd', component: load('articleAdd'), meta: { requiresAuth: true } },
];
