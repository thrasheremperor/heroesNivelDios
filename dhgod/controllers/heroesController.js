const fs=require('fs');
const heroes=JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'));

module.exports={
    heroes:(req,res)=>{
        res.render('heroes', {
            title: 'Digital Heroes',
            heroes: heroes
        });
    },
    heroesDetalles:(req,res)=>{
        let heroe = heroes.find(heroe => heroe.id === Number(req.params.id));	
        res.render('heroes-detail', {
            title: 'Digital Heroes',
            text: "Heroe no encontrado",
            heroe: heroe
        });
    },
    heroesBio:(req,res)=>{
        let status = req.params.ok;
        let heroe = heroes.find(heroe => heroe.id === Number(req.params.id));
        res.render('heroes-bio', {
            title: 'Digital Heroes',
            textNotFound: "No encontramos un heroe para mostrarte su biografia",
            status: status,
            heroe: heroe
        });
    }
};