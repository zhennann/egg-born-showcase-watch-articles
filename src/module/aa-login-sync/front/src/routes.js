function load(name) {
  return require(`./pages/${name}.vue`).default;
}

export default [
  { path: 'login', component: load('login') },
  { path: 'profile', component: load('profile') },
];
