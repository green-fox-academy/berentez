function median(pool: number[]): number {
  return pool[Math.floor((pool.length - 1) / 2)];
}

let pool = [1, 5, 10, 62, 342];
pool[Math.floor((pool.length - 1) / 2)];

console.log(median(pool));
