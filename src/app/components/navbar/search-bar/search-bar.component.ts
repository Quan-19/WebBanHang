import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }
}
