export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (c >= b && c >= a) {
    return c;
  } else if (b >= c && b >= a) {
    return a;
  }
}

export function median(pool: number[]): number[] {
  let medianArray: number[] = [];
  for (let i: number = 0; i < pool.length; i++) {
    for (let n: number = 1; n < pool.length; n++) {
      if (pool[i] > pool[n]) {
        [pool[i], pool[n]] = [pool[n], pool[i]];
      }
    }
  }
  if (pool.length % 2 === 0) {
    medianArray.push(pool[Math.floor((pool.length - 1) / 2)]);
    medianArray.push(pool[Math.floor(pool.length / 2)]);
  } else {
    medianArray.push(pool[Math.floor((pool.length - 1) / 2)]);
  }
  return medianArray;
}
console.log(median([9, 8, 7, 6]));

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some((vowel) => vowel === character.toLowerCase());
}

export function translate(hungarian) {
  let teve = hungarian;
  let length = teve.length;
  let usedCharacters: string[] = [];

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      if (usedCharacters.indexOf(c) === -1) {
        teve = teve.split(c).join(`${c}v${c}`);
        usedCharacters.push(c);
        i += 2;
        length += 2;
      }
    }
  }
  return teve;
}

// Check out the folder. There's a work file and a test file.
//  -  Run the tests, all 10 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong(You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed
