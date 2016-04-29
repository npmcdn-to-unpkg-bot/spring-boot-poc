import {Component} from 'angular2/core';
import {DemoBean} from './DemoBean';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
	selector:'form',
	directives: [FORM_DIRECTIVES],
	templateUrl: './app/templates/createTemplate.html'
})
export class CreateComponent{	
	//model = new DemoBean(123321, 1,'test',1.3);		//TODO - initialize blank form fields for these values.
	model = new DemoBean(null, null, '', null);
	http:Http;
	
	constructor(http:Http){				//Dependency injection of Http.
		this.http = http;
	}
	msg:string;

	onSubmit(id: number, str: string, num: number, d: number) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.model = new DemoBean(id,num,str,d);
		this.http.post('http://localhost:8080/create', JSON.stringify(this.model),{headers:headers}).map((res) => res.text())
			.subscribe(msg => this.msg = msg);
	}

}

@Component({ templateUrl: './app/templates/readTemplate.html' })
export class ReadComponent{
	demoBeans: DemoBean[];

	constructor(http: Http) {
		http.get('http://localhost:8080/all').map((res)=>res.json()).subscribe(demoBeans => this.demoBeans=demoBeans);
	}
	
}

@Component({ templateUrl: './app/templates/updateTemplate.html' })
export class UpdateComponent {
	
}

@Component({ templateUrl: './app/templates/deleteTemplate.html' })
export class DeleteComponent {
	
	id: number;
	http: Http;
	msg: string;
	response: string;
	errorFlag: boolean;

	constructor(http: Http) {
		this.http = http;
		this.response = '';
	}

	onSubmit(id: number){
		var headers = new Headers();
		headers.append('Content-Type', 'application/jsonp');
		this.http.get('http://localhost:8080/delete?id='+id).map(data => data.text(),{headers:headers}).
			subscribe(response => this.response = response);
		this.errorFlag = (this.response == 'true');
		if (this.errorFlag == false)
			this.msg = 'Bean with id : '+ id +' not found in the database!';
		else
			this.msg = 'Bean with id : ' + id + ' successfully deleted from the database!';
	}
	
}