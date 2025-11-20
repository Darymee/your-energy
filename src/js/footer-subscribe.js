import { data_api } from '../js/api';

const refs = {
  form: document.querySelector('.footer-form'),
};

const onSubscribeSubmit = async e => {
  e.preventDefault();
  const email = e.target.elements.email.value;

  try {
    const response = await data_api.subscribe(email);
    console.log(response);

    if (response.status === 201) {
      alert('Subscription successful!');
      refs.form.reset();
      return;
    }
  } catch (err) {
    console.log(err);
    refs.form.reset();
  }
};

refs.form.addEventListener('submit', onSubscribeSubmit);
