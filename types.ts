export interface Service {
  id: number;
  title: string;
  description: string;
  icon: 'monitor' | 'palette' | 'megaphone' | 'rocket';
}

export interface Solution {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface AIResponse {
  text: string;
}
