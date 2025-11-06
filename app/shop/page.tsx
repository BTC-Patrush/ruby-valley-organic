import ProduceCategory from '@/components/section/shop/ProduceCategory';
import DairyCategory from '@/components/section/shop/DairyCategory';
import CrystalsCategory from '@/components/section/shop/CrystalsCategory';
import WaterCategory from '@/components/section/shop/WaterCategory';

export default function ShopPage() {
  return (
    <>
    
    <div className="fixed inset-0 page-bg-shop -z-10" />
    <main className="max-w-7xl mx-auto px-6 py-16  space-y-20">
      <div className="border-b pb-6">
        <p className="text-sm text-gray-500 font-medium">Home / Shop</p>
        <h1 className="font-header text-5xl font-bold mt-2 text-charcoal">Himalayan Treasure Categories</h1>
        <p className="text-lg text-gray-700 mt-2">
          Explore the authentic harvest, categorized for your browsing convenience.
        </p>
      </div>

      <ProduceCategory />
      <DairyCategory />
      <CrystalsCategory />
      <WaterCategory />
    </main>
    </>
  );
}
