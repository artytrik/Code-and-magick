'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var dialogHandle = userDialog.querySelector('.upload');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var setupUserName = userDialog.querySelector('.setup-user-name');

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEFAULT_DIALOG_TOP = 80;
  var DEFAULT_DIALOG_LEFT = 50;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      userDialog.classList.add('hidden');
    }
  };

  var onInputFocus = function () {
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onInputBlur = function () {
    document.addEventListener('keydown', onPopupEscPress);
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupUserName.addEventListener('focus', onInputFocus);
    setupUserName.addEventListener('blur', onInputBlur);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    userDialog.style.top = DEFAULT_DIALOG_TOP + 'px';
    userDialog.style.left = DEFAULT_DIALOG_LEFT + '%';
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinats = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoordinats.x - moveEvt.clientX,
        y: startCoordinats.y - moveEvt.clientY
      };

      startCoordinats = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (removeEvt) {
          removeEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
