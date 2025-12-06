import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamMember } from '../models/team-member.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Arjun Singh',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Passionate about adventure tourism and sustainable travel. 15+ years of experience in the Himalayas.',
      experience: '15+ years'
    },
    {
      id: '2',
      name: 'Meera Patel',
      role: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
      bio: 'Certified yoga teacher with expertise in Hatha and Ashtanga yoga. Trained in Rishikesh for over 10 years.',
      experience: '10+ years'
    },
    {
      id: '3',
      name: 'Vikram Thakur',
      role: 'Adventure Guide',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
      bio: 'Expert rafting and trekking guide. Certified in wilderness first aid and rescue operations.',
      experience: '12+ years'
    },
    {
      id: '4',
      name: 'Kavita Reddy',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Ensuring smooth operations and customer satisfaction. Expert in travel logistics and hospitality.',
      experience: '8+ years'
    }
  ];

  getTeamMembers(): Observable<TeamMember[]> {
    return of(this.teamMembers);
  }
}








