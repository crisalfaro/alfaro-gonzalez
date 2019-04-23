// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "APP VECO",
    about: "Aplicación creada para comunicar vecinos en emergencia",
}, {
    figure: "media/foto-02.jpg",
    title: "NUTRIAS",
    about: "Técnica de corte de papel e ilustración de nutrias",
}, {
    figure: "media/foto-03.jpg",
    title: "VILLA GARCÍA",
    about: "Proyecto de la fiesta del Castañal",
}, {
    figure: "media/foto-04.jpg",
    title: "PEKES URBANOS - VALDIVIA",
    about: "Trabajo de publicidad para tienda",
}, {
    figure: "media/foto-05.jpg",
    title: "LAS PICARAS",
    about: "Creación de plato e identidad de marca para comida callejera",
}, {
    figure: "media/foto-06.jpg",
    title: "DIANA MUÑECAS",
    about: "Creación de marca y productos para microemprendedor",
}, {
    figure: "media/foto-07.jpg",
    title: "GOOD ENOUGH",
    about: "Ilustración digital hecha para mural",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
