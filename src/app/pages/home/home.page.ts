import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  animes: any[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getAnimes().subscribe(data => {
      this.animes = data;
    });
  }
}
