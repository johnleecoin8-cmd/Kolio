export type Creator = {
  id: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'x';
  handle: string;
  display_name: string;
  avatar_url: string | null;
  bio: string | null;
  category: string | null;
  country: string | null;
  language: string | null;
  followers: number;
  engagement_rate: number;
  avg_views: number;
  avg_likes: number;
  is_verified: boolean;
  fake_follower_pct: number;
};

export type CreatorFilters = {
  q?: string;
  platform?: string;
  category?: string;
  country?: string;
  followers_min?: number;
  followers_max?: number;
  engagement_min?: number;
  sort?: 'followers' | 'engagement';
  limit?: number;
  offset?: number;
};

export type AudienceRow = {
  dimension: 'country' | 'age' | 'gender' | 'interest';
  bucket: string;
  share: number;
};
