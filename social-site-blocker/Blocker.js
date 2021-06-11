const generateSTYLES = () => {
    return `<style>@import 'https://fonts.googleapis.com/css?family=Inconsolata';

    html {
      min-height: 100%;
    }
    
    body {
        overflow: hidden;
      box-sizing: border-box;
      height: 100%;
      background-color: #000000;
      background-image: radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
      background-repeat: no-repeat;
      background-size: cover;
      font-family: 'Inconsolata', Helvetica, sans-serif;
      font-size: 2rem;
      color: rgba(128, 255, 128, 0.8);
      text-shadow:
          0 0 1ex rgba(51, 255, 51, 1),
          0 0 2px rgba(255, 255, 255, 0.8);
    }
    
    .noise {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      opacity: .02;
    }
    
    .overlay {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      background:
          repeating-linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0) 100%);
      background-size: auto 4px;
      z-index: 1;
    }
    
    .overlay::before {
      content: "";
      pointer-events: none;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
          0deg,
          transparent 0%,
          rgba(32, 128, 32, 0.2) 2%,
          rgba(32, 128, 32, 0.8) 3%,
          rgba(32, 128, 32, 0.2) 3%,
          transparent 100%);
      background-repeat: no-repeat;
      animation: scan 7.5s linear 0s infinite;
    }
    
    @keyframes scan {
      0%        { background-position: 0 -100vh; }
      35%, 100% { background-position: 0 100vh; }
    }
    
    .terminal {
      box-sizing: inherit;
      position: absolute;
      height: 100%;
      width: 1000px;
      max-width: 100%;
      padding: 4rem;
      text-transform: uppercase;
    }
    
    .output {
      color: rgba(128, 255, 128, 0.8);
      text-shadow:
          0 0 1px rgba(51, 255, 51, 0.4),
          0 0 2px rgba(255, 255, 255, 0.8);

      width: 100%;
    }
    
    .output::before {
      content: "> ";
    }
    
    /*
    .input {
      color: rgba(192, 255, 192, 0.8);
      text-shadow:
          0 0 1px rgba(51, 255, 51, 0.4),
          0 0 2px rgba(255, 255, 255, 0.8);
    }
    
    .input::before {
      content: "$ ";
    }
    */
    
    .errorcode {
      color: white;
    }
     </style>`;
  };

  
const generateHTML = (pageName) => {
    return `<div class="noise"></div>
    <div class="overlay"></div>
    <div class="terminal">
      <h1>Error <span class="errorcode">404</span></h1>
      <p class="output">I will not open ${pageName} </p>
      <p class="output">Now just don't stare at me </p>
      <p class="output">You can't do anything to me .</p>
      <p class="output">Cut the tab right now 😡 </p>
      <p class="output">Concentrate on your work 👨‍💻 </p>
    </div>`;
  };


switch(window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;

    case "www.instagram.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;

    case "www.facebook.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;

    case "www.netflix.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("NETFLIX");
        break;

    case "www.primevideo.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("PRIME");
        break;

    case "twitter.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("TWITTER");
        break;  

    case "www.tumblr.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("TUMBLR");
        break; 
         
    case "www.flickr.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("FLICKER");
        break; 

    case "www.snapchat.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("SNAPCHAT");
        break; 

    case "www.reddit.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("REDDIT");
        break; 

         
        

}