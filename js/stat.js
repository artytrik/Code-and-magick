'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var GAP_X = 20;
var GAP_Y = 30;
var FONT_GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_GAP = 20;
var SPACE_GAP = 50;
var barHeight = CLOUD_HEIGHT - GAP_Y - FONT_GAP - GAP_Y - CLOUD_Y;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X, CLOUD_Y + GAP_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X, CLOUD_Y + GAP_Y + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP_X + BAR_GAP + (SPACE_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_Y + FONT_GAP + barHeight + TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + BAR_GAP + (SPACE_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_Y + FONT_GAP + barHeight - (barHeight * times[i] / maxTime) - CLOUD_Y);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP_X + BAR_GAP + (SPACE_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_Y + FONT_GAP + barHeight, BAR_WIDTH, -(barHeight * times[i] / maxTime));
  }
};
