const Wszystko = {
    template:
        `<div><div class="result">
        <div class="sitelink"><a href="#">Lorem Ipsum - All the facts - Lipsum generator</a></div>
        <div class="urladress"><a href="#">https://pl.lipsum.com/</a></div>
        <div class="description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
        </div>
    </div>
    <div class="result">
        <div class="sitelink"><a href="#">Lorem ipsum – Wikipedia, wolna encyklopedia</a></div>
        <div class="urladress"><a href="#">https://pl.wikipedia.org/wiki/Lorem_ipsum Wikipedia</a></div>
        <div class="description">
            Lorem ipsum – tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej
            łacinie, wzorowany na fragmencie traktatu Cycerona ...
        </div>
    </div>
    <div class="result">
        <div class="sitelink"><a href="#">Lorem Ipsum – Generator, Origins and Meaning</a></div>
        <div class="urladress"><a href="#">https://loremipsum.io/ Richard McClintock.</a></div>
        <div class="description">
            Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins
            for your favorite writing, design and blogging tools.
        </div>
    </div>
    <div class="result">
        <div class="sitelink"><a href="#">Wypełniacz Tekstu - Lorem Ipsum - by How2HTML</a></div>
        <div class="urladress"><a href="#">how2html.pl/lorem-ipsum/ </a></div>
        <div class="description">
            Lorem Ipsum – wypełniacz tekstu. Pewnie zastanawiacie się jak używać nagłówków oraz paragrafów przy większej
            ilości tekstu. W takim razie podajmy jakiś ...
        </div>
    </div></div>` }
const Grafika = { template: '<div class="result">Hello Grafika</div>' }
const Filmy = { template: '<div class="result">Hello Filmy</div>' }
const Zakupy = { template: '<div class="result">Hello Zakupy</div>' }
const Wiadomości = { template: '<div class="result">Hello Wiadomości</div>' }
const Więcej = { template: '<div class="result">Hello Więcej</div>' }
const Ustawienia = { template: '<div class="result">Hello Ustawienia</div>' }
const Narzędzia = { template: '<div class="result">Hello Narzędzia</div>' }

const routes = [
    { path: '/Wszystko', component: Wszystko },
    { path: '/Grafika', component: Grafika },
    { path: '/Filmy', component: Filmy },
    { path: '/Zakupy', component: Zakupy },
    { path: '/Wiadomości', component: Wiadomości },
    { path: '/Więcej', component: Więcej },
    { path: '/Ustawienia', component: Ustawienia },
    { path: '/Narzędzia', component: Narzędzia }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')