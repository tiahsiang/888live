<!--  登录注册模态框JS  -->
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




/** 添加收款账号 modal **/
let button = $('#add-account-btn');
let layout = $('.modal-layout');
let box = $('.modal-box');
let comfirmBtn = $('.confirm-btn');
let hide = $('.modal-close');

button.on('click', function () {
  layout.css('display', 'block');
  box.css('display', 'block');
});

hide.on('click', function () {
  layout.css('display', 'none');
  box.css('display', 'none');
});

/** 收款类型下拉选项 切换 暂时没有做这个效果 **/

