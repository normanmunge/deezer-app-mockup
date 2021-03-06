import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; //-> use to navigate back to the view that navigated here

import { ArtistService } from 'src/app/services/artist/artist.service';
import { Artist } from 'src/app/interfaces/artist-details';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  artist: Artist = {};
  isBanner: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getArtistDetails();
  }

  getArtistDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.artistService.getArtist(id).subscribe((res: any) => {
      console.log('THE ARTIST DETAILS', res);
      this.artist = res.data;
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}
