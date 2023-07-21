const completUser = {
  id: 1,
  username: 'Admin',
  email: 'admin@admin.com',
  password: 'secret_admin',
  role: 'admin',
};

const users = [completUser];

const validBody = { email: 'admin@admin.com', password: 'secret_admin' };

const invalidEmail = { email: 'invalid_email', password: 'secret_admin' };
const invalidPassword = { email: 'admin@admin.com', password: 'adm' };

export {
  completUser, validBody, invalidEmail, invalidPassword, users
};