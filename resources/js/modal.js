<!--  登录注册模态框 + Tab JS  -->
let login = $('#login-btn');
let signUp = $('#signUp-btn');
let modal = $('.dialog');
let dialog = $('.dialog-box');
let close = $('.dialog-close');

login.on('click', function () {
  modal.css('display', 'block');
  dialog.css('display', 'block');
});
signUp.on('click', function () {
  modal.css('display', 'block');
  dialog.css('display', 'block');
});
close.on('click', function () {
  modal.css('display', 'none');
  dialog.css('display', 'none');
});

$('.dialog-tab').on('click', 'li', function (e) {
  e.preventDefault();
  let idx = $(this).index();
  $(this).siblings().removeClass('current');
  $(this).addClass('current');

  $(this).parents('.dialog-wrap').find('.tab-items>li').eq(idx).siblings().removeClass('current');
  $(this).parents('.dialog-wrap').find('.tab-items>li').eq(idx).addClass('current');
});


/** 通用模态框 **/
let button1 = $('#add-account-btn'); /* 添加收款账号 btn */
let button2 = $('#add-gly'); /* 添加管理员 btn */
let button3 = $('#add-black'); /* 添加封禁名单 btn */
let button4 = $('.set-atv'); /* 设置广告位价格 btn */


let layout = $('.modal-layout');
let box = $('.modal-box');
let comfirmBtn = $('.confirm-btn');
let hide = $('.modal-close');

button1.on('click', function () {
  layout.css('display', 'block');
  box.css('display', 'block');
});
button2.on('click', function () {
  layout.css('display', 'block');
  box.css('display', 'block');
});
button3.on('click', function () {
  layout.css('display', 'block');
  box.css('display', 'block');
});
button4.on('click', function () {
  layout.css('display', 'block');
  box.css('display', 'block');
});

hide.on('click', function () {
  layout.css('display', 'none');
  box.css('display', 'none');
});





