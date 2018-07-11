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

  var WIZARD_NUMBER = 4;

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var setupWizard = userDialog.querySelector('.setup-player');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
  var eyesColorInput = setupWizard.querySelector('#eyes-color-input');
  var coatColorInput = setupWizard.querySelector('#coat-color-input');
  var fireballColorInput = setupWizard.querySelector('#fireball-color-input');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = getRandomItem(COAT_COLORS);
    wizardCoat.style.fill = randomCoatColor;
    coatColorInput.value = randomCoatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var randomEyesColor = getRandomItem(EYE_COLORS);
    wizardEyes.style.fill = randomEyesColor;
    eyesColorInput.value = randomEyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var randomFireballColor = getRandomItem(FIREBALL_COLORS);
    wizardFireball.style.background = randomFireballColor;
    fireballColorInput.value = randomFireballColor;
  });

  var onSumbitSuccess = function () {
    userDialog.classList.add('hidden');
  };

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSumbitSuccess, errorHandler);
    evt.preventDefault();
  });
  window.backend.load(successHandler, errorHandler);
})();

