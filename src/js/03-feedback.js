import throttle from 'lodash.throttle';
import localStorage from './storage.js';

const CURRENT_LOCAL_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

initPage();

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

function onInput(event) {
  let savedData = localStorage.load(CURRENT_LOCAL_KEY);
  if (!savedData) {
    savedData = {};
  }
  const { name, value } = event.target;
  savedData[name] = value;
  localStorage.save(CURRENT_LOCAL_KEY, savedData);
}

function initPage() {
  const savedData = localStorage.load(CURRENT_LOCAL_KEY);
  if (!savedData) {
    return;
  }
  Object.entries(savedData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

function onSubmit(event) {
  event.preventDefault();
  const resultObj = localStorage.load(CURRENT_LOCAL_KEY);
  console.log('Our result object:', resultObj);
  localStorage.clearByKey(CURRENT_LOCAL_KEY);
  event.target.reset();
}
