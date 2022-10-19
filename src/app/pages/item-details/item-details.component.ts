import { AuthService } from 'src/app/services/auth.service';
// import { ShareDialogComponent } from './../../components/share-dialog/share-dialog.component';
// import { Recipe } from './../../models/Recipe';
// import { CardDataService } from './../../services/card-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';
import { Comment } from '../../models/Comment';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { ShareDialogComponent } from 'src/app/components/share-dialog/share-dialog.component';
import { Recipe } from 'src/app/models/Recipe';
import { CardDataService } from 'src/app/services/card-data.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  rating: number = 0;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  recipe: Recipe;
  comment: string = '';
  cardComments?: Comment[];
  constructor(
    router: Router,
    public activeRouter: ActivatedRoute,
    public cdetser: CardDataService,
    public dialog: MatDialog
  ) {
    this.recipe = JSON.parse(
      JSON.parse(
        JSON.stringify(this.activeRouter.snapshot.paramMap.get('data'))
      )
    );
    this.rating = cdetser.getRating(this.recipe);
  }

  ngOnInit() {
    this.cdetser.getcardCommits(this.recipe).subscribe((params) => {
      this.cardComments = params as Comment[];
    });
  }
  onRatingChanged(rating: any) {
    this.rating = rating;
    this.cdetser.addRating(this.rating, this.recipe);
  }
  addComment() {
    this.cdetser.addCommit(this.comment, this.recipe);
    this.comment = '';
  }
  openDialog() {
    this.dialog.open(ShareDialogComponent, {
      data: this.recipe,
    });
  }
}
