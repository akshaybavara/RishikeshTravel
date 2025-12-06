import { Component, ElementRef, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
export class HeroSectionComponent implements OnInit, OnDestroy, AfterViewInit {
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
      console.log('🎬 Video element found:', video);

      video.addEventListener('loadstart', () => {
        console.log('🎬 Video load started');
      });

      video.addEventListener('loadedmetadata', () => {
        console.log('🎬 Video metadata loaded, duration:', video.duration);
      });

      video.addEventListener('loadeddata', () => {
        console.log('✅ Video loaded successfully');
        this.videoLoaded = true;
      });

      video.addEventListener('error', (e) => {
        console.error('❌ Video failed to load:', video.error);
        console.error('❌ Video error code:', video.error?.code);
        console.error('❌ Video error message:', video.error?.message);
        console.error('❌ Video src:', video.src);
        console.error('❌ Video currentSrc:', video.currentSrc);
        this.videoLoaded = false;
      });

      video.addEventListener('canplay', () => {
        console.log('🎵 Video can play');
      });

      video.addEventListener('playing', () => {
        console.log('▶️ Video is playing');
      });

      video.addEventListener('pause', () => {
        console.log('⏸️ Video is paused');
      });

      // Force load the video
      console.log('🎬 Forcing video load...');
      video.load();

      // Try to play after a short delay
      setTimeout(() => {
        console.log('🎬 Attempting to play video...');
        video.play().catch(error => {
          console.error('❌ Auto-play failed:', error);
        });
      }, 1000);
    } else {
      console.error('❌ Hero video element not found!');
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


