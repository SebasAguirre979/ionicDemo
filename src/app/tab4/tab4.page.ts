import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  characters: []
  public name: string
  

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllEvents()
    .subscribe(resp =>{
      console.log(resp)
      this.characters = resp.results;
    })
  }

}
