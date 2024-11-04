function joinMetrics(obj1, obj2) {
  const result = {};

  for (let [key, val] of Object.entries(obj1)) {
    result[key] = val;
  }

  for (let [key, val] of Object.entries(obj2)) {
    if (!result[key]) result[key] = val;
    else result[key] += val;
  }

  return result;
}

function getMetricNames(obj) {
  const result = [];
  for (let key of Object.keys(obj)) {
    if (key !== "unknown") result.push(key);
  }

  return result;
}

function countMetrics(obj, prop) {
  return obj[prop] ? (obj[prop] += 1) : (obj.unknown += 1);
}

function calculateRating({ comments = 0, likes = 0, views = 0 }) {
  return Math.floor(
    (comments * 10 + likes * 3 + views) / (comments + likes + views)
  );
}

module.exports = {
  joinMetrics,
  getMetricNames,
  countMetrics,
  calculateRating,
};
