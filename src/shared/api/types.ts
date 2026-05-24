export type SkinType = 'oily' | 'dry' | 'normal' | 'combination';
export type AnalysisStatus = 'processing' | 'completed' | 'failed';
export type Gender = 'male' | 'female';

export interface User {
  id: string;
  email: string;
  name: string;
  birth_date: string | null;
  gender: Gender | null;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface Photo {
  id: string;
  user_id: string;
  file_url: string;
  uploaded_at: string;
}

export interface Analysis {
  id: string;
  photo_id: string;
  file_url: string;
  status: AnalysisStatus;
  skin_type: SkinType | null;
  analysis_data: any | null;
  recommendations?: Recommendation[];
  ingredients?: Ingredient[];
  created_at: string;
  updated_at: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
}

export interface HealthStatus {
  status: string;
}
