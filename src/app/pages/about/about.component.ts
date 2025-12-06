import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TeamService } from '../../services/team.service';
import { TeamMember } from '../../models/team-member.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, ScrollAnimationDirective, NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getTeamMembers().subscribe(members => {
      this.teamMembers = members;
    });
  }

  values = [
    {
      icon: 'safety_check',
      title: 'Safety First',
      description: 'Your safety is our top priority. All activities are conducted with certified guides and proper safety equipment.'
    },
    {
      icon: 'eco',
      title: 'Sustainable Tourism',
      description: 'We are committed to preserving the natural beauty of Rishikesh for future generations.'
    },
    {
      icon: 'groups',
      title: 'Local Community',
      description: 'We work closely with local communities to provide authentic experiences while supporting local economy.'
    },
    {
      icon: 'verified',
      title: 'Certified Excellence',
      description: 'All our guides and instructors are certified professionals with years of experience.'
    }
  ];
}




