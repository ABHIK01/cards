import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this',
    },
    {
      title: 'Snow Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'maountainlover',
      content: 'Picture of mountain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biing123',
      content: 'I saw I did some biking',
    },
  ];
}
