export class Router {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

     route(event) {
        event = event || window.event;
        event.preventDefault();
        
        window.history.pushState({}, "", event.target.href);
        this.handle();

        const links = document.querySelectorAll(".routeLink")
        links.forEach(link => {
            link.classList.remove("ativo")
        })

        event.target.classList.add("ativo");
    }
    
     handle() {
        const {pathname} = window.location;
        const route = this.routes[pathname] || this.routes[404];
        
        fetch(route).then(data => data.text()).then(html => document.querySelector('#app').innerHTML = html);
        
    }
};