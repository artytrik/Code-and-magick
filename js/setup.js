'use strict';

(function () {
  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SECOND_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

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

  var createWizards = function (length) {
    var wizards = [];
    for (var i = 0; i < length; i++) {
      wizards.push({
        name: getRandomItem(FIRST_NAMES) + ' ' + getRandomItem(SECOND_NAMES),
        coatColor: getRandomItem(COAT_COLORS),
        eyesColor: getRandomItem(EYE_COLORS)
      });
    }
    return wizards;
  };

  var wizardsList = createWizards(4);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var createElement = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsList.length; i++) {
      fragment.appendChild(renderWizard(wizardsList[i]));
    }
    similarListElement.appendChild(fragment);
  };

  createElement();

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

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

