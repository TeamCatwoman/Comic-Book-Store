import { dataServer } from './dataServer.js';
import { templateLoader as tl } from './template-loader.js';

var router = (() => {
    let navigo;
    function init() {
        navigo = new Navigo(null, false);

        navigo
        .on('home', () => {
            // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
            //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
            //     .catch(console.log);
        })
        .on('about', () => {
            // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
            //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
            //     .catch(console.log);
        })
        .on('contact', () => {
            // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
            //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
            //     .catch(console.log);
        })
        .on('register', () => {
            // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
            //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
            //     .catch(console.log);
        })
        .on('log-in', () => {
            // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
            //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
            //     .catch(console.log);
        })
        .on('log-out', () => {
            // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
            //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
            //     .catch(console.log);
        }).resolve();
    }
    return {
        init
    };

})();
export { router };