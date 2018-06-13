'use strict';

var FIRST_NAMES = ['Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var SECOND_NAMES = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomItem = function (array) {
  var randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
};

var createWizards = function (length) {
  for (var i = 0, wizards = []; i < length; i++) {
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
