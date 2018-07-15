'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var userDialog = document.querySelector('.setup');
  var setupWizard = userDialog.querySelector('.setup-player');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
  var eyesColorInput = setupWizard.querySelector('#eyes-color-input');
  var coatColorInput = setupWizard.querySelector('#coat-color-input');
  var fireballColorInput = setupWizard.querySelector('#fireball-color-input');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = getRandomItem(COAT_COLORS);
    var newColor = randomCoatColor;
    coatColorInput.value = randomCoatColor;
    wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var randomEyesColor = getRandomItem(EYE_COLORS);
    var newColor = randomEyesColor;
    wizardEyes.style.fill = newColor;
    eyesColorInput.value = randomEyesColor;
    wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var randomFireballColor = getRandomItem(FIREBALL_COLORS);
    wizardFireball.style.background = randomFireballColor;
    fireballColorInput.value = randomFireballColor;
  });

  window.wizard = wizard;
})();
