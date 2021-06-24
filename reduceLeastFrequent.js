const array=[2,1,2,5,5];

const result = [...array.reduce((r, n) =>
  r.set(n, (r.get(n) || 0) + 1), new Map()
)]
  .reduce((r, v) => v[1] < r[1] ? v : r)[0]

  console.log(result);
