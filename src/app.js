import express from 'express';
import stockRoutes from './routes/bettas.routes.js';
/*import indexRoutes from './routes/index.routes.js';
import productRoutes from './routes/products.routes.js';
import usersRoutes from './routes/users.routes.js';*/
import cors from "cors";

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(cors());

app.use('/api/', stockRoutes);
/*app.use('/api/', productRoutes);
app.use('/api/', usersRoutes);*/

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});

export default app;