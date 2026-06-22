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

export type MetricRow = {
  captured_on: string;
  followers: number;
  engagement_rate: number;
  avg_views: number;
};

export type ContentRow = {
  id: string;
  thumbnail_url: string | null;
  post_url: string | null;
  kind: string;
  likes: number;
  comments: number;
  posted_at: string;
};

export type CreatorStats = {
  total: number;
  verified: number;
  avg_engagement: number;
  total_reach: number;
  by_platform: Record<string, number>;
  by_category: Record<string, number>;
};
