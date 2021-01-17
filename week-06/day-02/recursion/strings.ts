// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

let string: string = 'Artaxerxész';

function rewriteXToY(string: string, n: number): string {
    if (n === string.length - 1) {
      return string;
    } else {
			
      if (string[n] === 'x') {
				let array: string[] = string.split('');
				array[n] = 'y';
				string = array.join('');
      }
		}
		return rewriteXToY(string, n+1);
  }

console.log(rewriteXToY(string, 0));
