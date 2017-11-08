function load(name) {
  return require(`./pages/${name}.vue`).default;
}

export default [
  { path: 'articles', component: load('articles') },
  { path: 'test', component: load('test') },
];
