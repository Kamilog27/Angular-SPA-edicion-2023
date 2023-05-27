import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  public countries:Country[]=[];
  public isloading:boolean=false;
  public initialValue:string='';
  constructor(private countriesService:CountriesService){

  }
  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCapital.countries;
    this.initialValue=this.countriesService.cacheStore.byCapital.term;
  }
  searchByCapital(term:string){
    this.isloading=true;
    this.countriesService.searchCapital(term).subscribe(countries=>{
      this.countries=countries;
      this.isloading=false;
    })
  }
}
