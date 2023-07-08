const users = [
  { username: 'test1234', password: 'test1234' },
  { username: 'admin', password: 'admin' },
  { username: 'test', password: 'test' },
  // Agrega más usuarios aquí
];
localStorage.setItem('users', JSON.stringify(users));
