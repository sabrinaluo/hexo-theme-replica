var mocha = require('mocha');
var should = require('chai').should();
var moment = require('moment');

describe('getLongestStreak', function() {
  it('should 0, when no posts', function() {
    var posts = [];
    getLongestStreak(posts).should.deep.equal({
      count: 0,
      start: null,
      end: null
    })
  });

  it('should 1, when 1 posts', function() {
    var date = '2015-01-12';
    var posts = [{date: date}];
    getLongestStreak(posts).should.deep.equal({
      count: 1,
      start: date,
      end: date
    })
  });

  it('should 1, when multiple post in one day', function() {
    var date = '2015-01-12';
    var posts = [{date: date}, {date: date}];
    getLongestStreak(posts).should.deep.equal({
      count: 1,
      start: date,
      end: date
    })
  });

  it('should 3, when 3 days streak, and one post each day', function() {
    var posts = [{date: '2016-03-01'}, {date: '2016-03-03'}, {date: '2016-03-04'}, {date: '2016-03-05'}, {date: '2016-03-08'}];
    getLongestStreak(posts).should.deep.equal({
      count: 3,
      start: '2016-03-03',
      end: '2016-03-05'
    });
  });

  it('should 2, when 2days streak, and multiple post each day', function() {
    var posts = [{date: '2016-03-01'}, {date: '2016-03-03'},
      {date: '2016-03-03'}, {date: '2016-03-04'}, {date: '2016-03-04'}];
    getLongestStreak(posts).should.deep.equal({
      count: 2,
      start: '2016-03-03',
      end: '2016-03-04'
    });
  });

});

describe('getLatestStreak', function() {
  it('should 0, when no posts', function() {
    var posts = [];
    getLongestStreak(posts).should.deep.equal({
      count: 0,
      start: null,
      end: null
    })
  });

  it('should 1, when 1 posts', function() {
    var date = '2015-01-12';
    var posts = [{date: date}];
    getLongestStreak(posts).should.deep.equal({
      count: 1,
      start: date,
      end: date
    })
  });

  it('should 1, when multiple post in one day', function() {
    var date = '2015-01-12';
    var posts = [{date: date}, {date: date}];
    getLongestStreak(posts).should.deep.equal({
      count: 1,
      start: date,
      end: date
    })
  });

  it('should 2, when 2days streak, and multiple post each day', function() {
    var posts = [{date: '2016-03-05'}, {date: '2016-03-07'}, {date: '2016-03-07'},
      {date: '2016-03-08'}, {date: '2016-03-08'}, {date: '2016-03-10'}];
    getLongestStreak(posts).should.deep.equal({
      count: 2,
      start: '2016-03-07',
      end: '2016-03-08'
    });
  });

});

describe('getColorByLength', function() {
  var colors = ['#eee', '#d6e685', '#8cc665', '#44a340', '#1e6823'];
  it('should #eee, when max=0', function() {
    getColorByLength(0, 0).should.equal(colors[0]);
  });

  it('should return correct color when max<5', function() {
    getColorByLength(0, 3).should.equal(colors[0]);
    getColorByLength(1, 3).should.equal(colors[1]);
    getColorByLength(2, 4).should.equal(colors[2]);
    getColorByLength(4, 4).should.equal(colors[4]);
  });

  it('should return correct color when max>5', function() {
    getColorByLength(0, 10).should.equal(colors[0]);
    getColorByLength(1, 10).should.equal(colors[1]);
    getColorByLength(2, 10).should.equal(colors[1]);
    getColorByLength(4, 10).should.equal(colors[2]);
    getColorByLength(8, 10).should.equal(colors[4]);
    getColorByLength(5, 6).should.equal(colors[4]);
  });

});

/**
 *
 * @param posts
 * @returns {*}
 */
function getLongestStreak(posts) {
  if (!posts.length) return {count: 0, start: null, end: null};

  var endTemp = 0;
  var lenTemp = 1;
  var endIndex = 0;
  var lenMax = 1;

  for (var i = 0; i < posts.length - 1; i++) {
    var date0 = posts[i].date;
    var date1 = posts[i + 1].date;
    var isContinuousDates = moment(date1).diff(date0, 'days') < 2;

    if (isContinuousDates) {
      lenTemp++;
      endTemp = i + 1;
    } else {
      lenTemp = 1;
    }

    if (lenTemp > lenMax) {
      endIndex = endTemp;
      lenMax = lenTemp;
    }
  }

  var startDate = posts[endIndex - lenMax + 1].date;
  var endDate = posts[endIndex].date;
  var count = moment(endDate).diff(startDate, 'days') + 1;
  return {
    count: count,
    start: startDate,
    end: endDate
  }
}

/**
 * because it is static, but TODAY is dynamic, so we CANNOT get current streak directly
 *
 * @param posts sorted by date from old to new
 * @returns {{count: *, start: string, end: string}}
 */
function getLatestStreak(posts) {
  if (!posts.length) return {count: 0, start: null, end: null};
  posts.reverse();

  var endTemp = 0;
  var lenTemp = 1;
  var endIndex = 0;
  var lenMax = 1;

  for (var i = 0; i < posts.length - 1; i++) {
    var date0 = posts[i].date;
    var date1 = posts[i + 1].date;
    var isContinuousDates = moment(date0).diff(date1, 'days') < 2;

    if (isContinuousDates) {
      lenTemp++;
      endTemp = i + 1;
    } else {
      lenTemp = 1;
      break;
    }

    if (lenTemp > lenMax) {
      endIndex = endTemp;
      lenMax = lenTemp;
    }
  }

  var endDate = posts[endIndex - lenMax + 1].date;
  var startDate = posts[endIndex].date;
  var count = moment(endDate).diff(startDate, 'days') + 1;
  return {
    count: count,
    start: startDate,
    end: endDate
  }
}

/**
 *
 * @param len
 * @param max
 * @returns {string}
 */
function getColorByLength(len, max) {
  var colors = ['#eee', '#d6e685', '#8cc665', '#44a340', '#1e6823'];
  var colorsLen = colors.length - 1;
  var color = len ? colors[0] : colors[1];
  var interval = max / colorsLen;
  if (max < colorsLen) {
    color = colors[len];
  } else {
    color = colors[Math.ceil(len / interval)];
  }
  return color;
}
