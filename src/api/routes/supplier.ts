import { Router } from 'express';

export default function suppliersRouter(supplier: string) {
  const router = Router();

  router.get('/hotels', (req, res) => {
    const city = req.query.city;
    // For demo: simple static/hardcoded response
    const hotels = [
      { hotelId: `${supplier}1`, name: 'Holtin', price: supplier === 'A' ? 6000 : 3340, city, commissionPct: 10 },
      { hotelId: `${supplier}2`, name: 'Radison', price: supplier === 'A' ? 6500 : 5900, city, commissionPct: 12 },
      { hotelId: `${supplier}3`, name: 'Taj Hotels', price: supplier === 'A' ? 3000 : 5900, city, commissionPct: 13 },
      { hotelId: `${supplier}4`, name: 'Mayo Hotels', price: supplier === 'A' ? 2399 : 5900, city, commissionPct: 14 }
    ];
    res.json(hotels);
  });

  return router;
}
