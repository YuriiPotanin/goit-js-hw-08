const form = document.querySelector('.feedback-form');

form.addEventListener('input', _.throttle(function(event) {
  const formData = new FormData(form);
  const feedbackState = {
    email: formData.get('email'),
    message: formData.get('message')
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500));

document.addEventListener('DOMContentLoaded', function() {
    const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
  
    if (feedbackState) {
      emailInput.value = feedbackState.email || '';
      messageInput.value = feedbackState.message || '';
    }
  });
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log('Form submitted with feedback:', feedbackState);
  
    localStorage.removeItem('feedback-form-state');
  
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
  
    emailInput.value = '';
    messageInput.value = '';
  });
  import _ from 'lodash';
