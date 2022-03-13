 /* Открытие popup*/

function showModal() {
  const signin = document.querySelector('.modal-signin'),
    register = document.querySelector('.modal-reg'),
    sendMsg = document.querySelector('.modal-sendmsg');

  document.addEventListener('click', (e) => {
    const target = e.target;
    target.preventDefault;

    if (target.hasAttribute('data-signin')) {
      signin.classList.add('modal-view');
    }
    if (target.hasAttribute('data-register')) {
      register.classList.add('modal-view');
    }
    if (target.hasAttribute('data-sendMsg')) {
      sendMsg.classList.add('modal-view');
    }
    if (target.hasAttribute('data-close')) {
      signin.classList.remove('modal-view');
      register.classList.remove('modal-view');
      sendMsg.classList.remove('modal-view');
    }
  });
}

showModal();
;


const api_url = 'https://academy.directlinedev.com/api';
//Получение данных формы, введёных пользователем в JSON формате
function getUserFormData(form, type = 'json') {

  switch (type) {
    case 'json':
      const inputs = form.querySelectorAll('input');
      const body = {};

      for (let input of inputs) {
        body[input.name] = input.value;
      }

      return JSON.stringify(body);
      break;
    case 'formData':
      const formData = new FormData(form);
      console.log(formData)
      return formData;
      break;
    default:
      throw new Error('getUserFormData fn: Incorrect data type')
  }
  
}

function sendRequest({ endpoint, method = 'GET', headers = null, body = null }) {
  const settings = {
    method,
    headers,
    body
  }

  return fetch( `${api_url}${endpoint}`, settings)
}


//Если пользователь залогинился, то скрываем кнопки 'register', 'sign in' и показываем кнопку 'my profile'.
function findToken() {
  const token = localStorage.getItem('token');
  const btn_signin = document.querySelector('.js-btn-signin');
  const btn_register = document.querySelector('.js-btn-register');
  const btn_profile = document.querySelector('.js-btn-profile');

  if(!token) return false;

  btn_signin.classList.add('hidden');
  btn_register.classList.add('hidden');
  btn_profile.classList.remove('hidden');
}
findToken();




;
 const profileImg = document.querySelector('.profile__photo');
const profileName = document.querySelector('.profile__name');
const profileSurname = document.querySelector('.profile__surname');
const profileEmail = document.querySelector('.profile__email');
const profilePass = document.querySelector('.profile__pass');
const profileLocation = document.querySelector('.profile__location');
const profileAge = document.querySelector('.profile__age');

const btnChangeData = document.querySelector('.profile__change-data');
const modalEditData = document.querySelector('#editdata');
const formEditData = document.forms.editUserData;

const btnDeleteAccount = document.querySelector('.profile__delete-acc');





//Получаем данные пользователя и пушим их на странице profile.html
function getUserFormData() {
  sendRequest({
    endpoint: `/users/${localStorage.getItem('id')}`,
    headers: {
      'x-access-token': localStorage.getItem('token')
    },
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    } 
    throw new Error ('Request failed')
  })
  .then(userData => {
    const { name, surname, email, location, age, photoUrl } = userData.data;
    console.log(userData)
    profileImg.src = `${api_url}${photoUrl}`;
    profileName.innerText = `${name}`;
    profileSurname.innerText = `${surname}`;
    profileEmail.innerText = `${email}`;
    profileLocation.innerText = `${location}`;
    profileAge.innerText = `${age}`;
  })
  .catch(err => console.error(err));
}

getUserFormData();



//Изменение данных пользователя
formEditData.addEventListener('submit', e => {
  e.preventDefault();
  editUserData();
})

function editUserData() {
  const userData = getUserFormData(formEditData);

  sendRequest({
    endpoint: `/users`,
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=something',
      'x-access-token': localStorage.getItem('token'),
    },
    body: userData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      
      throw new Error('Error');
    })
    .then(() => {
      modalEditData.classList.remove('modal-view');
      getUserFormData();
    })
    .catch((err) => console.err(err));
}


//Удаление аккаунта
btnDeleteAccount.addEventListener('click', (e) => {
  e.preventDefault();
  deleteAccaount();
});

function deleteAccaount() {
  sendRequest({
    endpoint: `/users/${localStorage.getItem('id')}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
    },
  })
    .then((response) => {
      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        history.back();
      }

      throw new Error('User not found');
    })
    .catch((err) => {
      console.error(err);
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      history.back();
    });
};

/* Открытие popup*/

function openModal() {
  const changepass = document.querySelector('.modal-editpass'),
        changedata = document.querySelector('.modal-editdata');
    
  document.addEventListener('click', (e) => {
    const target = e.target;
    target.preventDefault;
 
    if (target.hasAttribute('data-changepass')) {
      changepass.classList.add('modal-view');
    }
    if (target.hasAttribute('data-changedata')) {
      changedata.classList.add('modal-view');
    }
    if (target.hasAttribute('data-close')) {
      changepass.classList.remove('modal-view');
      changedata.classList.remove('modal-view');
    }
  })
}

openModal();