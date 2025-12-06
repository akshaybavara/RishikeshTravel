import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  heroImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080';
  videoLoaded = false;

  ngOnInit() {
    console.log('🎬 Hero section initialized');
  }

  ngOnDestroy() {
    // Clean up any intervals if needed
  }

  ngAfterViewInit() {
    console.log('🎬 Hero video element initialized');

    if (this.heroVideo?.nativeElement) {
      const video = this.heroVideo.nativeElement;

      video.addEventListener('loadeddata', () => {
        console.log('✅ Video loaded successfully');
        this.videoLoaded = true;
      });

      video.addEventListener('error', (e) => {
        console.error('❌ Video failed to load:', video.error);
        this.videoLoaded = false;
      });

      video.addEventListener('canplay', () => {
        console.log('🎵 Video can play');
      });
    }
  }

  onVideoLoaded() {
    console.log('🎬 onVideoLoaded called');
    this.videoLoaded = true;
  }

  onVideoError() {
    console.error('🎬 onVideoError called');
    this.videoLoaded = false;
  }
}


