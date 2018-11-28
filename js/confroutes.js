var el = document.querySelector('#app');
const ANIMACIONo = 'animviewso'


function $id(id) {
    return document.getElementById(id);
}


function loadHTML(url, id) {
    req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = () => {
        $id(id).innerHTML = req.responseText;
        el.classList.remove(ANIMACIONo)
        animViews();
    };
}



var router = new Router({
    mode: 'hash',
    root: '/index.html',
    hooks: {
        before: function(newPage) {
            console.info('Before page loads hook', newPage);
        }
    },
    page404: function(path) {
        console.log('"/' + path + '" Page not found');
    }
});


router
    .add('', function() {
        loadHTML('/home.html', 'app');
    })
    .add('home', function() {
        loadHTML('/home.html', 'app');

    })
    .add('somes', function() {
        loadHTML('/algunos.html', 'app');
    })
    .add('about', function() {
        loadHTML('/home.html', 'app');
    })

.add('contact', function() {
    loadHTML('/algunos.html', 'app');
})

.check()
    .addUriListener()
    .navigateTo('hello/World', { foo: "bar" })
    .refresh();
window.router = router



function animViews() {

    el.classList.add(ANIMACIONo)
    el.addEventListener('animationend', () => {
        el.classList.remove(ANIMACIONo)

    })
}