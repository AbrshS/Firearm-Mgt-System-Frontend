import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-warning-card',
  templateUrl: './warning-card.component.html',
  styleUrls: ['./warning-card.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class WarningCardComponent implements OnInit {
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
  showCard = false;

  ngOnInit() {
    setTimeout(() => {
      this.showCard = true;
    }, 3000); // 3 seconds delay
  }

  confirmAction() {
    this.confirmed.emit();
  }

  cancelAction() {
    this.cancelled.emit();
  }
}
