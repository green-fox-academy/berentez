'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

console.log(url);


let urlSplitted = url.split("/");
urlSplitted[4] = 'nevertellmetheodds';
urlSplitted.splice(0, 1, 'https:');
console.log(urlSplitted)

let url2: string = urlSplitted.join('/');
console.log(url2);

