export interface Tour {
  id: string;
  title: string;
  price: number;
  duration: string;
  images: string[];
  description: string;
  itinerary: string[];
  category: 'rafting' | 'camping' | 'yoga' | 'aarti' | 'trekking' | 'adventure';
  rating: number;
  reviewsCount: number;
  location: string;
  difficulty: 'easy' | 'medium' | 'hard';
  maxParticipants: number;
  includes: string[];
  excludes: string[];
}









