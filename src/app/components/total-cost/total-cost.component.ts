import {Component, Input} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-total-cost',
  standalone: true,
  imports: [],
  templateUrl: './total-cost.component.html',
  styleUrl: './total-cost.component.scss'
})
export class TotalCostComponent {
    @Input() total !: number ;
    constructor(public storeService: StoreService) {
    }

}
