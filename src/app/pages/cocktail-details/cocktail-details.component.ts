import { Cocktail } from './../../models/Cocktail';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';
import { CardDataService } from 'src/app/services/card-data.service';
import { Comment } from '../../models/Comment';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css'],
})
export class CocktailDetailsComponent implements OnInit {
  rating: number = 0;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  cocktail: Cocktail;
  comment: string = '';
  cardComments?: Comment[];

  constructor(
    router: Router,
    public activeRouter: ActivatedRoute,
    public cdetser: CardDataService
  ) {
    this.cocktail = JSON.parse(
      JSON.parse(
        JSON.stringify(this.activeRouter.snapshot.paramMap.get('data'))
      )
    );
    this.rating = cdetser.getRating(this.cocktail);
  }

  ngOnInit() {
    this.cdetser.getcardCommits(this.cocktail).subscribe((params) => {
      this.cardComments = params as Comment[];
    });
  }
  onRatingChanged(rating: any) {
    this.rating = rating;
    this.cdetser.addRating(this.rating, this.cocktail);
  }
  addComment() {
    this.cdetser.addCommit(this.comment, this.cocktail);
    this.comment = '';
  }
}
