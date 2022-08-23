import throttle from 'lodash.throttle';
import localStorage from './storage.js';

// -----------------------------------------------------------------------------
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
// -----------------------------------------------------------------------------

const CURRENT_LOCAL_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const userData = {};

formRef.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  const { name, value } = event.target;
  userData[name] = value;
}
