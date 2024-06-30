import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private animes = [
    {
      id: 1,
      name: 'Attack on Titan',
      image: 'assets/attack_titan.jpg',
      category: ['Ação'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        },
        {
          id: 2,
          name: 'Temporada 2',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'My Hero Academia',
      image: 'assets/my_hero_academia.jpg',
      category: ['Super-herói', 'Ação'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Death Note',
      image: 'assets/death_note.jpg',
      category: ['Suspense', 'Terror'],
      seasons: []
    },
    {
      id: 4,
      name: 'Dr Stone',
      image: 'assets/Dr_stone.jpg',
      category: ['Ficção Científica', 'Ação'],
      seasons: []
    },
    {
      id: 5,
      name: 'Ultraman',
      image: 'assets/ultraman.jpg',
      category: ['Ficção Científica', 'Ação'],
      seasons: []
    },
    {
      id: 6,
      name: 'Naruto',
      image: 'assets/Naruto.jpg',
      category: ['Ação', 'Aventura'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'One Piece',
      image: 'assets/One_piece.jpg',
      category: ['Ação', 'Aventura'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 8,
      name: 'Sword Art Online',
      image: 'assets/Sao.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 9,
      name: 'Demon Slayer',
      image: 'assets/Demon_Slayer.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 10,
      name: 'Fullmetal Alchemist: Brotherhood',
      image: 'assets/fullmetal_alchemist.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 11,
      name: 'Tokyo Ghoul',
      image: 'assets/tokyo_ghoul.jpg',
      category: ['Horror', 'Supernatural'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 12,
      name: 'Bleach',
      image: 'assets/bleach.jpg',
      category: ['Ação', 'Supernatural'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 13,
      name: 'Hunter x Hunter',
      image: 'assets/hunter_x_hunter.jpg',
      category: ['Ação', 'Adventure'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 14,
      name: 'Dragon Ball Z',
      image: 'assets/dragon_ball_z.jpg',
      category: ['Ação', 'Adventure'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 15,
      name: 'Fairy Tail',
      image: 'assets/fairy_tail.jpg',
      category: ['Ação', 'Adventure'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 16,
      name: 'Nanatsu no Taizai',
      image: 'assets/nanatsu_no_taizai.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 17,
      name: 'Shingeki no Kyojin',
      image: 'assets/shingeki_no_kyojin.jpg',
      category: ['Ação', 'Drama'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 18,
      name: 'Soul Eater',
      image: 'assets/soul_eater.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 19,
      name: 'Neon Genesis Evangelion',
      image: 'assets/neon_genesis_evangelion.jpg',
      category: ['Ação', 'Mecha'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 20,
      name: 'Cowboy Bebop',
      image: 'assets/cowboy_bebop.jpg',
      category: ['Ação', 'Sci-Fi'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 21,
      name: 'Code Geass',
      image: 'assets/code_geass.jpg',
      category: ['Ação', 'Mecha'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 22,
      name: 'Black Clover',
      image: 'assets/black_clover.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 23,
      name: 'Dragon Ball Super',
      image: 'assets/dragon_ball_super.jpg',
      category: ['Ação', 'Adventure'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 24,
      name: 'Ao no Exorcist',
      image: 'assets/ao_no_exorcist.jpg',
      category: ['Ação', 'Supernatural'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 25,
      name: 'The Promised Neverland',
      image: 'assets/the_promised_neverland.jpg',
      category: ['Mystery', 'Thriller'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 26,
      name: 'Gurren Lagann',
      image: 'assets/gurren_lagann.jpg',
      category: ['Ação', 'Mecha'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 27,
      name: 'Steins;Gate',
      image: 'assets/steins_gate.jpg',
      category: ['Sci-Fi', 'Thriller'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 28,
      name: 'Attack on Titan: Final Season',
      image: 'assets/attack_titan_final.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: [
        {
          id: 1,
          name: 'Temporada 1',
          episodes: [
            { id: 1, title: 'Episódio 1', videoUrl: 'path/to/video1.mp4' },
            { id: 2, title: 'Episódio 2', videoUrl: 'path/to/video2.mp4' }
          ]
        }
      ]
    },
    {
      id: 29,
      name: 'Boku no Hero Academia: The Movie',
      image: 'assets/my_hero_academia_movie.jpg',
      category: ['Super-herói', 'Ação'],
      seasons: []
    },
    {
      id: 30,
      name: 'Demon Slayer: Mugen Train',
      image: 'assets/demon_slayer_movie.jpg',
      category: ['Ação', 'Fantasia'],
      seasons: []
    }
  ];

  constructor() { }

  getAnimes(): Observable<any[]> {
    return of(this.animes);
  }
}
