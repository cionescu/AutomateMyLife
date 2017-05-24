import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { CardService } from './card.service';

@Component({
  selector: 'card',
  template: `
    <div *ngIf="user">
      <p *ngIf="user.card_count > 0" class="text-muted text-center">
        Mai ai inca {{user.card_count}} Craving Cards
      </p>
      <create-card [user]="user" (newCard)="onNewCard($event)"></create-card>
    </div>
  `
})
export class CardComponent implements OnInit {
  user: any;

  constructor(private userService: UserService,
    private cardService: CardService) {
  }

  ngOnInit(): void {
    this
      .userService
      .get((<any>window).Config.user_id)
      .then((user) => this.user = user)
  }

  onNewCard(card) {
    this.cardService.create(card).then((card: any) => {
      console.log(card);
      (<any>window).swal("Success!", `Cravingul tau (${card.text}) este aproape rezolvat`, "success");
    });
  }
}
