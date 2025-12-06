import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' = 'fade-in';
  @Input() delay: number = 0;
  @Input() threshold: number = 0.1;

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.setupObserver();
    this.applyInitialStyles();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    const options = {
      threshold: this.threshold,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.animateIn();
          }, this.delay);
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  private applyInitialStyles() {
    const element = this.element.nativeElement;
    element.style.opacity = '0';

    switch (this.animationType) {
      case 'fade-in':
        // Default is already set
        break;
      case 'slide-up':
        element.style.transform = 'translateY(30px)';
        break;
      case 'slide-in-left':
        element.style.transform = 'translateX(-30px)';
        break;
      case 'slide-in-right':
        element.style.transform = 'translateX(30px)';
        break;
      case 'scale-in':
        element.style.transform = 'scale(0.9)';
        break;
    }

    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  }

  private animateIn() {
    const element = this.element.nativeElement;
    element.style.opacity = '1';

    switch (this.animationType) {
      case 'fade-in':
        // Already handled by opacity
        break;
      case 'slide-up':
        element.style.transform = 'translateY(0)';
        break;
      case 'slide-in-left':
        element.style.transform = 'translateX(0)';
        break;
      case 'slide-in-right':
        element.style.transform = 'translateX(0)';
        break;
      case 'scale-in':
        element.style.transform = 'scale(1)';
        break;
    }
  }
}

