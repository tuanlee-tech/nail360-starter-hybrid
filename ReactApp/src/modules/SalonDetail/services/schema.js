import { z } from 'zod';

/**
 * 🛡️ SALON SCHEMA (Hợp đồng dữ liệu)
 * Giúp Junior biết chắc chắn API trả về cái gì và chặn đứng lỗi undefined.
 */
export const SalonSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Tên tiệm không được để trống'),
  address: z.string(),
  rating: z.number().min(0).max(5).default(5),
  reviews_count: z.number().default(0),
  is_favorite: z.boolean().default(false),
  description: z.string().optional(),
  thumbnail: z.string().url().optional(),
});

export const ReviewSchema = z.object({
  id: z.number(),
  author: z.string(),
  content: z.string(),
  rating: z.number(),
  date: z.string(),
});

export const SalonDetailSchema = SalonSchema.extend({
  reviews: z.array(ReviewSchema).default([]),
});
