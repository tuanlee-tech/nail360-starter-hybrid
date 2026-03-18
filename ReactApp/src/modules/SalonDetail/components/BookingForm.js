import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '../../../components/ui/Button';
import useToastStore from '../../../store/useToastStore';

// 🛡️ FORM SCHEMA
const BookingSchema = z.object({
  name: z.string().min(2, 'Tên phải từ 2 ký tự trở lên'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Số điện thoại phải có 10 chữ số'),
  date: z.string().min(1, 'Vui lòng chọn ngày'),
  time: z.string().min(1, 'Vui lòng chọn giờ'),
});

const BookingForm = () => {
  const addToast = useToastStore((state) => state.addToast);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(BookingSchema),
  });

  const onSubmit = async (data) => {
    // Giả lập gửi API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Booking Data:', data);
    addToast('Đặt lịch thành công! Chúng tôi sẽ liên hệ sớm.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
        <input
          {...register('name')}
          className={`w-full p-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-500 outline-none transition`}
          placeholder="Nguyễn Văn A"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
        <input
          {...register('phone')}
          className={`w-full p-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-500 outline-none transition`}
          placeholder="0901234567"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ngày</label>
          <input
            type="date"
            {...register('date')}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Giờ</label>
          <input
            type="time"
            {...register('time')}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
        </div>
      </div>

      <Button type="submit" variant="secondary" className="w-full mt-4" isLoading={isSubmitting}>
        XÁC NHẬN ĐẶT LỊCH
      </Button>
    </form>
  );
};

export default BookingForm;
