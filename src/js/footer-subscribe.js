import iziToast from 'izitoast';
import { data_api } from '../js/api';

const refs = {
  form: document.querySelector('.footer-form'),
};

const onSubscribeSubmit = async e => {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!email) {
    iziToast.info({
      message: 'Email is required',
      position: 'topRight',
    });
    return;
  }

  if (!emailRegex.test(email)) {
    iziToast.info({
      message: 'Invalid email format',
      position: 'topRight',
    });
    return;
  }

  try {
    const response = await data_api.subscribe(email);

    if (response.status === 201) {
      iziToast.success({
        message: response.data.message,
        position: 'topRight',
      });
      refs.form.reset();
      return;
    }
  } catch (err) {
    iziToast.error({
      message: err,
      position: 'topRight',
    });
    refs.form.reset();
  }
};

refs.form.addEventListener('submit', onSubscribeSubmit);
