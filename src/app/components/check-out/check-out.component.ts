import { Component } from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {
constructor(public storeService: StoreService) { }
}

