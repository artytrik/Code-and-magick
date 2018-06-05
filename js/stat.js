'use strict';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10
};

var Gap = {
  SHADOW: 10,
  X: 20,
  Y: 30,
  FONT: 50,
  BAR: 20,
  SPACE: 50
};

var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = Cloud.HEIGHT - Gap.Y - Gap.FONT - Gap.Y - Cloud.Y;

var paddingX = Cloud.X + Gap.X + Gap.BAR;
var paddingY = Cloud.Y + Gap.Y + Gap.FONT;
var spaceX = Gap.SPACE + BAR_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
};

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var getRandomColor = function () {
  return Math.random();
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, Cloud.X + Gap.SHADOW, Cloud.Y + Gap.SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, Cloud.X, Cloud.Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', Cloud.X + Gap.X, Cloud.Y + Gap.Y);
  ctx.fillText('Список результатов:', Cloud.X + Gap.X, Cloud.Y + Gap.Y + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var proportionY = (barHeight * times[i] / maxTime);
    var playerTime = Math.round(times[i]);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], paddingX + spaceX * i, paddingY + barHeight + TEXT_HEIGHT);
    ctx.fillText(playerTime, paddingX + spaceX * i, paddingY + barHeight - proportionY - Cloud.Y);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomColor() + ')';
    }
    ctx.fillRect(paddingX + spaceX * i, paddingY + barHeight, BAR_WIDTH, -proportionY);
  }
};
