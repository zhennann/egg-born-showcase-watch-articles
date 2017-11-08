function load(name) {
  return require(`./pages/${name}.vue`).default;
}

export default [
  { path: 'articles', component: load('articles') },
  { path: 'mine', component: load('mine'), meta: { requiresAuth: true } },
];
