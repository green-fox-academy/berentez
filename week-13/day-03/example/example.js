let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'http://444.hu/feed', true); 


httpRequest.send(null);