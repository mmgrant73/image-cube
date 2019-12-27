const template = document.createElement('template');
template.innerHTML = `
<style>
figure {
    float: left;
    height: 6em;
    margin: 1.5em;
    width: 12em;
    -webkit-transform: perspective(500);
    -webkit-transform-style: preserve-3d;
    -webkit-transition: .5s;
}
figure:hover {
    -webkit-transform: perspective(500) rotateX(90deg) translateY(-3em) translateZ(3em);
}
img {
    background-color: #222;
    box-shadow: 0 20px 15px -10px hsla(0,0%,0%,.25);
    display: block;
    height: 100%;
    -webkit-transition: .5s;
}
figure:hover img {
    box-shadow: none;
}
figcaption {
    background-color: #222;
    color: #fff;
    padding: 0.5em; /* 1.5em */
    -webkit-transform: rotateX(-90deg);
    -webkit-transform-origin: 100% 0;
    -webkit-transition: .5s;
}
figure:hover figcaption {
    box-shadow: 0 20px 15px -10px hsla(0,0%,0%,.25);
}

h3 {
    font-weight: bold;
}​
</style>

<figure> 
	<img src="" alt="Portfolio Item">
	<figcaption>
		<h3>Title</h3>
		<p>Description.</p>
	</figcaption>
</figure>
`;


class Imgcube extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
	this.img = this._shadowRoot.querySelector('img');
	this.head3 = this._shadowRoot.querySelector('h3');
	this.par1 = this._shadowRoot.querySelector('p');
  }
  get src() {
    return this.getAttribute('src');
  }
  get title() {
    return this.getAttribute('title');
  }
  get detail() {
    return this.getAttribute('detail');
  }
  static get observedAttributes() {
    return ['src', 'title', "detail"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if(name == 'src'){
		this.img.setAttribute("src", newVal);
	}
	else if(name == 'title'){
	    this.head3.innerHTML = newVal;
	}
	else{
		this.par1.innerHTML = newVal;
	}
  }
}

window.customElements.define('img-cube', Imgcube);


