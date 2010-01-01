window.onload = function()
{
  var domino = '<a href="http://www.dominos.jp/"><img src="http://www.dominos.uk.com/common/img/ImageGallery/Dom%20Logo%20JPEG.jpg" /></a>';
  var pizzahut = '<a href="http://www.pizzahut.jp/"><img src="http://www.pizzahut.jp/_common/_img/_hea_log.gif" /></a>';
  var pizzala = '<a href="http://www.pizza-la.co.jp/"><img src="http://www.pizza-la.co.jp/Contents/Images/common/logo.jpg" /></a>';
  var body = document.body;

  var incDomino = document.createElement("div");
  incDomino.innerHTML = domino;
  incDomino.style.display = 'none';
  incDomino.id = 'domino';
  var incPizzahut = document.createElement("div");
  incPizzahut.innerHTML = pizzahut;
  incPizzahut.style.display = 'none';
  incPizzahut.id = 'pizzahut';
  var incPizzala = document.createElement("div");
  incPizzala.innerHTML = pizzala;
  incPizzala.style.display = 'none';
  incPizzala.id = 'pizzala';

  body.appendChild(incDomino);
  body.appendChild(incPizzahut);
  body.appendChild(incPizzala);
  body.innerHTML = body.innerHTML.replace(/:?[@＠]pizza|ぴざ|ピザ|ﾋﾟｻﾞ/gi, pizzaMenu());focus();
  $$("a.light_box").each(function(el) {new FancyZoom(el);})
}

function pizzaMenu()
{
  return '<a class="light_box" href="#domino">domino</a>'
       + 'か<a class="light_box" href="#pizzahut">pizzahut</a>'
       + 'か<a class="light_box" href="#pizzala">pizza-la</a>を選んでください';
}
