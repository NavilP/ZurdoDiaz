import {pool} from '../db.js';

// Recuperar todo el stock
export const getStock = async (req, res)=> {
    try{
        const [rows] = await pool.query('SELECT * FROM betta');
        console.log(rows);
        res.json(rows);
    } catch {
        return res.status(500).json({
            message: 'Algo salio mal'
        });
    }
};

// Recuperar un betta por nombre
export const getBettaByName= async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.betta);
        const [rows] = await pool.query('SELECT * FROM betta WHERE nombreBetta=?', [req.params.betta])
    
        if (rows.length === 0){
            return res.status(404).json({
                message: "Ningun betta no encontrado"
            });
        }

        res.json(rows);
    } catch {
        console.log(error);
    }
};

// Recuperar un betta por id
export const getBettaById= async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.idBetta);
        const [rows] = await pool.query('SELECT * FROM betta WHERE idBetta=?', [req.params.idBetta])
    
        if (rows.length === 0){
            return res.status(404).json({
                message: "Ningun betta no encontrado"
            });
        }

        res.json(rows[0]);
    } catch {
        console.log(error);
    }
};

// Recuperar betta por genero
export const getBettaByGenre= async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.genre);
        const [rows] = await pool.query('SELECT * FROM betta WHERE generoBetta=?', [req.params.genre])
    
        if (rows.length === 0){
            return res.status(404).json({
                message: "Ningun betta no encontrado"
            });
        }

        res.json(rows);
    } catch {
        console.log(error);
    }
};

// Recuperar betta por linea
export const getBettaByLine= async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.idLinea);
        const [rows] = await pool.query('SELECT * FROM betta WHERE idLinea=?', [req.params.idLinea])
    
        if (rows.length === 0){
            return res.status(404).json({
                message: "Ningun betta no encontrado"
            });
        }

        res.json(rows);
    } catch {
        console.log(error);
    }
};

// Recuperar betta por país
export const getBettaByCountry= async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.country);
        const [rows] = await pool.query('SELECT * FROM betta WHERE paisProcedencia=?', [req.params.country])
    
        if (rows.length === 0){
            return res.status(404).json({
                message: "Ningun betta no encontrado"
            });
        }

        res.json(rows);
    } catch {
        console.log(error);
    }
};

// Agregar un nuevo ingrediente
/*export const createIngredients = async (req, res)=> {
    console.log(req.body);
    const {nombre, cantidad, categoria, precio} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO stock(ingrediente, cantidad, categoria, precio) VALUES (?, ?, ?, ?)', [nombre, cantidad, categoria, precio]);

        res.send({
            id: rows.insertId,
            nombre,
            cantidad,
            categoria,
            precio
        });
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

// Eliminar un ingrediente
export const deleteIngredients = async (req, res)=> {
    try {
        const [result]= await pool.query('DELETE FROM stock WHERE ingrediente=?', [req.params.ingred]);
    
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: "Ingrediente no encontrado"
            });
        }
        
        res.sendStatus(204);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

export const updateIngredients = async (req, res)=> {
    const {nombre} = req.params.ingred;
    console.log(req.params.ingred);
    const {precio, cantidad} = req.body;
    
    try {

        const [rows] = await pool.query('SELECT * FROM stock WHERE ingrediente=?', [req.params.ingred]);
        const id = rows[0].idstock;

        const [result] = await pool.query('UPDATE stock SET precio=IFNULL(?, precio), cantidad=IFNULL(?,cantidad) WHERE idstock=?', [precio, cantidad, id]);
        
        if(result.affectedRows === 0){
            return res.status(404).json({
                message: "Ingrediente no encontrado"
            });
        }

        const [rows_result] = await pool.query('SELECT * FROM stock WHERE ingrediente=?', [req.params.ingred]);
        res.json(rows_result);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};*/