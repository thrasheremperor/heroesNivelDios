module.exports = {
    credits: (req,res) => {
        res.render('credits', {
            title: 'Digital Heroes',
            header: 'Creditos',
            text: 'Ejercicio realizado por Matt G'});
    }
}