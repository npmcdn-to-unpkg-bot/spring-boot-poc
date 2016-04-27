import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {CreateComponent, ReadComponent, UpdateComponent, DeleteComponent} from './crud';

@Component({
	selector: 'my-app',
	viewProviders: [HTTP_PROVIDERS],
	templateUrl: 'app/template.html',
	directives: [ROUTER_DIRECTIVES, CreateComponent, ReadComponent, UpdateComponent, DeleteComponent]
})
@RouteConfig([
	{ path: '/create', name: 'Create', component: CreateComponent },
	{ path: '/read', name: 'Read', component: ReadComponent },
	{ path: '/update', name: 'Update', component: UpdateComponent },
	{ path: '/delete', name: 'Delete', component: DeleteComponent }
])
export class AppComponent {
	msg: string = '';
	/*constructor(http: Http) {
		http.get('http://localhost:8080/demo?id=1&str=Manas&num=32112&d=1.2D')
			.map((res) => res.json())
			.subscribe(msg => this.msg = msg);
	}*/
}