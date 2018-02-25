var login = 'maslina';
var password = 'sorrynotsorry321';

var loginForm = prompt('Enter your login');
var passwordForm = prompt('Enter your password');

if (loginForm == login) {
  if (passwordForm == password) {
    alert('You have been hacked')
  } else {
    alert('wrong login :(')
  }
} else {
  alert('wrong password :(')
}
