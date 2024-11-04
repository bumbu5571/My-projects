const {
  calculateRating, countMetrics, getMetricNames, joinMetrics,
} = require('../metrics');

describe('Part 3 tests', () => {
  let metricsStore;
  let anotherStore;
  let fullMetricsStore;
  beforeEach(() => {
    metricsStore = {
      likes: 10,
      comments: 5,
      unknown: 2,
    };
    anotherStore = {
      likes: 30,
      views: 150,
      unknown: 21,
    };
    fullMetricsStore = {
      likes: 35,
      comments: 29,
      views: 220,
      unknown: 40,
    };
  });

  describe('Функция getMetricNames', () => {
    it('Должна вернуть список названий метрик без "unknown"', () => {
      expect(getMetricNames(metricsStore)).toStrictEqual(['likes', 'comments']);
      expect(getMetricNames(anotherStore)).toStrictEqual(['likes', 'views']);
      expect(getMetricNames(fullMetricsStore)).toStrictEqual(['likes', 'comments', 'views']);
    });
  });

  describe('Функция calculateRating', () => {
    it('Должна посчитать рейтинг относительно метрики по формуле', () => {
      // Формула: округлить вниз (comments * 10 + likes * 3 + views) / (comments + likes + views)
      expect(calculateRating(metricsStore)).toEqual(5);
      expect(calculateRating(anotherStore)).toEqual(1);
      expect(calculateRating(fullMetricsStore)).toEqual(2);
    });
  });

  describe('Функция countMetrics', () => {
    it('Должна увеличить метрику на 1, если она присутствует в объекте', () => {
      countMetrics(metricsStore, 'likes');
      expect(metricsStore.likes).toEqual(11);

      countMetrics(metricsStore, 'likes');
      expect(metricsStore.likes).toEqual(12);

      countMetrics(metricsStore, 'comments');
      expect(metricsStore.comments).toEqual(6);
    });

    it('Если такая метрика не хранится в объекте, то увеличить на 1 "unknown"', () => {
      countMetrics(fullMetricsStore, 'reviews');
      expect(fullMetricsStore.unknown).toEqual(41);
      expect(fullMetricsStore.reviews).toBeUndefined();

      countMetrics(metricsStore, 'views');
      expect(metricsStore.unknown).toEqual(3);
      expect(metricsStore.views).toBeUndefined();

      countMetrics(anotherStore, 'comments');
      expect(anotherStore.unknown).toEqual(22);
      expect(anotherStore.comments).toBeUndefined();
    });
  });

  describe('Функция joinMetrics', () => {
    it('Должна сложить метрики двух объектов в один объект', () => {
      const likes1 = { likes: 10, unknown: 2 };
      const likes2 = { likes: 30, unknown: 21 };
      const resultLikes = joinMetrics(likes1, likes2);
      expect(resultLikes).toStrictEqual({ likes: 40, unknown: 23 });

      const views1 = { views: 150, unknown: 21 };
      const views2 = { views: 220, unknown: 40 };
      const resultViews = joinMetrics(views1, views2);
      expect(resultViews).toStrictEqual({ views: 370, unknown: 61 });
    });

    it('Должна обработать объекты с разными метриками', () => {
      const result1 = joinMetrics(metricsStore, anotherStore);
      expect(result1).toStrictEqual({
        likes: 40,
        comments: 5,
        views: 150,
        unknown: 23,
      });

      const result2 = joinMetrics(metricsStore, fullMetricsStore);
      expect(result2).toStrictEqual({
        likes: 45,
        comments: 34,
        views: 220,
        unknown: 42,
      });
    });

    it('Должна корректно работать, если метрики равны 0', () => {
      const likes = { likes: 0, unknown: 2 };
      const resultLikes = joinMetrics(likes, metricsStore);
      expect(resultLikes).toStrictEqual({ likes: 10, comments: 5, unknown: 4 });

      const views = { views: 0, unknown: 21 };
      const resultViews = joinMetrics(metricsStore, views);
      expect(resultViews).toStrictEqual({
        likes: 10, comments: 5, unknown: 23, views: 0,
      });
    });
  });
});
