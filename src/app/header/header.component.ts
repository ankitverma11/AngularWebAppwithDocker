import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent implements OnInit{
  @Output() featureSelect = new EventEmitter<string>();
  //enviromentType = '';
  //apiEndPoint = '';
  @Input() enviromentType = '';
  @Input() apiEndPoint = '';

  ngOnInit(): void {
      
  }
    
onSelect(feature : string)
    {
    this.featureSelect.emit(feature);
    }

}