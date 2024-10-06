const prodHost = 'https://my-shop-django.onrender.com';

const devHost = 'http://127.0.0.1:8000';

const imageUrl = 'https://petervol27.github.io/shop_static/static';

const checkLogin = async () => {
  const response = await axios.get(`${prodHost}/users/check_login`);
  console.log(response.data);
};
