import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilesService {

  constructor(private http: Http) { }


  public getBucketFiles(): Observable<any> {
    let url = 'https://storage.googleapis.com/consent-bucket';
    return this.http.get(url)
      .map((res: Response) => res.json());
  }
 }
