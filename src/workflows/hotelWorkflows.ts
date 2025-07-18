import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/supplierActivities';

const { getSupplierAHotels, getSupplierBHotels } = proxyActivities<typeof activities>({
  startToCloseTimeout: '5 seconds'
});

export async function hotelComparisonWorkflow(city: string) {
  const [hotelsA, hotelsB] = await Promise.all([
    getSupplierAHotels(city),
    getSupplierBHotels(city)
  ]);

  // Deduplicate by hotel name and pick cheapest
  const mergedHotels: Record<string, any> = {};

  hotelsA.forEach(hotel => {
    mergedHotels[hotel.name] = { ...hotel, supplier: 'Supplier A' };
  });

  hotelsB.forEach(hotel => {
    const existing = mergedHotels[hotel.name];
    if (!existing || hotel.price < existing.price) {
      mergedHotels[hotel.name] = { ...hotel, supplier: 'Supplier B' };
    }
  });

  return Object.values(mergedHotels);
}
