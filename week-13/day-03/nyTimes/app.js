const httpRequest = new XMLHttpRequest();
const search = 'apollo-11';
const search2 = 'moonlanding';
const apiKey = 'y40nCpVQYOD9mhgLwXwqSUTwWA5ExsWv';

httpRequest.open(
  'GET',
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&q=${search2}&api-key=${apiKey}`,
  true
);

httpRequest.onload = function () {
  if (httpRequest.status >= 200 && httpRequest.status < 400) {
    const myData = JSON.parse(httpRequest.response);
    const articles = myData.response.docs;
    printStories(articles);
  } else {
    console.log('We connected to the server, but it returned an error');
  }
};

httpRequest.send();

function printStories(n) {
  const ulTag = document.querySelector('ul');
  for (let i = 0; i < n.length; i++) {
    const newListElement = document.createElement('li');
    newListElement.innerHTML = `<strong>${n[i].headline.main}</strong>  ---  ${n[i].snippet} --- ${n[i].pub_date.substr(
      0,
      10
    )}  ---  <a href="${n[i].web_url}">${n[i].web_url}</a>`;
    ulTag.appendChild(newListElement);
  }
}
