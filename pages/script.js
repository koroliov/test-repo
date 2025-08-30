'use strict';

(async () => {
  const res = await fetch('./file.json');
  const json = await res.json();
  console.log('json', json);
})();

