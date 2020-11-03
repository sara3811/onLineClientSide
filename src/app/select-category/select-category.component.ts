import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent implements OnInit {

  @Output() outputCategory = new EventEmitter<any>();
  categories: any[];
  selectedCategory: any;
  apiUri = '/categories';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.http.get(environment.apiUrl + this.apiUri).subscribe((categories: any[]) => {
      this.categories = categories;
      console.log('categories', this.categories);  
    });
  }
 
  dataChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('selectedCategory:', this.selectedCategory); 
    this.outputCategory.emit(this.selectedCategory);
  }
  

}
