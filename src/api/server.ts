import express from 'express';
import hotelsRouter from './routes/hotel';
import suppliersRouter from './routes/supplier';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Supplier mock APIs
app.use('/supplierA', suppliersRouter('A'));
app.use('/supplierB', suppliersRouter('B'));

// Hotels API
app.use('/api', hotelsRouter());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
