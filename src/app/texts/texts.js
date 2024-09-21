const title = "Creaciones M Y M";
const email = "jimenezdiasmaritza@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573232319856"; // O también puedes usar el otro número proporcionado

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Creaciones M Y M ofrece una variedad de productos creativos, incluyendo fuentes y muñecos de Navidad, entre otros artículos decorativos. Cada creación está elaborada con dedicación para añadir un toque especial a tus festividades y decoraciones.",
        description2: "Nos apasiona proporcionar productos únicos y personalizados que reflejen la alegría de la temporada navideña y la creatividad en cada pieza. Descubre la calidad y el encanto de nuestras creaciones."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Dulce navidad!",
            p2: "" // Información no proporcionada
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100009135271755&mibextid=ZbWKwL",
        instagram: "", // Información no proporcionada
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
