'use strict';

// let herobutton = document.querySelector("#hero-button");
// console.log(herobutton);
let modalWindow_Open_Btn = document.getElementById('hero-button');
console.log(modalWindow_Open_Btn);
modalWindow_Open_Btn.addEventListener('click', function () {
  ModalWindow_Open();
});

let modalWindow_Close_Btn = document.getElementById('modal-window-close');
modalWindow_Close_Btn.addEventListener('click', function () {
  ModalWindow_Close();
});

let modalWindow_Send_Btn = document.getElementById('modal-form-send-button');
modalWindow_Send_Btn.addEventListener('click', function () {
  ModalWindow_Send();
});

function ModalWindow_Open() {
  let modalForm = document.querySelector('#modal-form');
  modalForm.classList.remove('is-hidden');
  modalForm.classList.add('is-open');
}

function ModalWindow_Close() {
  let modalForm = document.querySelector('#modal-form');
  modalForm.classList.remove('is-open');
  modalForm.classList.add('is-hidden');
}

function ModalWindow_Send() {
  console.log('Send.click()');
  // console.log(event);
  // console.log(event.Target);
}
