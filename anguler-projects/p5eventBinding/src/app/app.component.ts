import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p5eventBinding';
  name="default value";
  name1="default value";
  name2="default value";
  count =0;

  nameChange(){
    this.name = "name changed"
    return this.name; 
  }

  name1Change(event:any){
    console.log(event);
    return this.name1; 
  }

  name2Change(event:any){
    this.name2 = event.target.value;
    return this.name2; 
  }

  countReduce(){
    return this.count--;
  }

  countIncrement(){
    return this.count++;
  }
}
