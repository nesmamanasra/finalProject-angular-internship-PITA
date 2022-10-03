import { Recipe } from './../models/Recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }


  getRecipeByName(recipeName:string){
    // const headers = new HttpHeaders().append('X-Api-Key' , 'zSZdKrKWJarNI9n9I8M/qg==6kuTBz3ju4MKRf1z')

    const headers = new HttpHeaders().append('X-Api-Key' , 'CIckCSgByIWKRq1fhZGTAg==yFTKTPQRlEUONEQc')
   return  this.http.get(`https://api.api-ninjas.com/v1/recipe?query=${recipeName} `,{
      headers ,
    });

  }
/*

.subscribe((data) => {
      // console.log(data);
      console.log(data,"this is recipes from servises");
     return data ;
    },(error) => {
      console.log(error);
       return null;
    })

*/


  getCocktailByName(cocktailName:string){
    const headers = new HttpHeaders().append('X-Api-Key' , 'zSZdKrKWJarNI9n9I8M/qg==6kuTBz3ju4MKRf1z')
     return   this.http.get(`https://api.api-ninjas.com/v1/cocktail?name= ${cocktailName} `,{
      headers ,
    });

  }

  getImge(name:string){
return  this.http.get(`https://api.unsplash.com/search/photos?query=${name}&client_id=LGZSzHidNBf3r1O_tffut92ZyBJlQ9TOZj3JKHaAkD8`)
  }
}
