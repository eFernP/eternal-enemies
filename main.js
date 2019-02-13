'use strict';


const main = () => {
  
  console.log("heeey");
  
  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html; 

    return main
  };

  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
    <section class="splash-screen">
    <h1>Eternal enemies</h1>
    <button>Start</button>
    </section>`);

  };

  buildSplashScreen();

};


window.addEventListener('load', main);
