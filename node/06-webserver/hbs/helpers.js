const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', text => {
    let tokens = text.split(' ');
    tokens = tokens.map((word, index) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    return tokens.join(' ');
});