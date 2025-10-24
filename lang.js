const translations = {
    en: {

        //Title page
        heroTitle: "Abel Belarre",
        heroSubtitle: "Communicator and Storyteller",

        CardAboutTitle: "About me",
        CardAboutSubtitle: "Discover who I am.",
        CardAboutButton: "Learn More",

        CardPortfolioTitle: "Portfolio",
        CardPortfolioSubtitle: "Check out some of my projects.",
        CardPortfolioButton: "See projects",

        CardContactTitle: "Contact",
        CardContactSubtitle: "Get in touch with me.",
        CardContactButton: "Contact",

        //About page
        AboutTitle: "About Me",
        AboutSubtitle: "Communicator and Storyteller",

        AboutHeader: "Hello, I’m Abel Belarre.",
        AboutText1: "I’m a communiactor and storyteller based in Barcelona, working in all areas of production and speciallized on creative rols such as script.",
        AboutText2: "My work attempts to blend entertainment and quality — I believe that there's humor everywhere in life. It's not only about what you tell, but also how you do it.",
        AboutText3: "I’ve worked on short films, series and marketing, trying to make something memorable each time. My ambition is to go higher and my recurring theme is human nature.",
        AboutText4: "Let’s create something meaningful together.",

        AboutBrandsTitle: "Brands & Collabs",

        //Portfolio page
        PortfolioTitle: "Portfolio",
        PortfolioSubtitle: "Selected works & visual experiments",
        CtaPrivate: "Contact me",
        PrivateTitle: "Private project",
        PrivateMsg: "Still in market - Available on demand.",
        PrivateContact: "Contact",

        //Contact page
        ContactTitle: "Lets talk",
        ContactSubtitle: "About your next story",

        FormName: "Name",
        FormEmail: "Email",
        FormMessage: "Mensaje",
        FormSend: "Send",

        ExtraContactHeader: "Get in Touch",
        ContactLocation: "Barcelona, Spain",

        //Other

        BackButton: "← Back to home",

        NavigatePortfolioButton: "See my work",
        NavigateContactButton: "Get in touch",
        NavigateAboutButton: "Get to know me",


    },
    es: {
        //Title page
        heroTitle: "Abel Belarre",
        heroSubtitle: "Comunicador y Storyteller",
        CardAboutTitle: "Sobre mí",
        CardAboutSubtitle: "Descubre quién soy.",
        CardAboutButton: "Saber más",
        CardPortfolioTitle: "Portfolio",
        CardPortfolioSubtitle: "Mira mis proyectos.",
        CardPortfolioButton: "Ver proyectos",
        CardContactTitle: "Contacto",
        CardContactSubtitle: "Habla conmigo.",
        CardContactButton: "Contactar",

        //About page
        AboutTitle: "Sobre mí",
        AboutSubtitle: "Comunicador y Storyteller",

        AboutHeader: "Hola, soy Abel Belarre",
        AboutText1: "Soy comunicador y narrador con sede en Barcelona, trabajando en todas las áreas de la producción y especializado en roles creativos como el de guionista.",
        AboutText2: "Mi trabajo intenta combinar el entretenimiento y la calidad. Creo que hay humor en todas partes de la vida, y no se trata solo de lo que cuentas, sino también de cómo lo haces.",
        AboutText3: "He trabajado en cortometrajes, series y marketing, intentando hacer algo memorable cada vez. Mi ambición es llegar más lejos y mi tema recurrente es la naturaleza humana.",
        AboutText4: "Creemos algo significativo juntos.",

        AboutBrandsTitle: "Brands & Collabs",

        //Portfolio page
        PortfolioTitle: "Portfolio",
        PortfolioSubtitle: "Trabajos y experimentos",
        CtaPrivate: "Contáctame",

        PrivateTitle: "Proyecto privado",
        PrivateMsg: "En circulación - Disponible bajo petición.",
        PrivateContact: "Contactar",

        //Contact page
        ContactTitle: "Hablemos",
        ContactSubtitle: "De tu próxima historia",

        FormName: "Nombre",
        FormEmail: "Email",
        FormMessage: "Mensaje",
        FormSend: "Enviar",

        ExtraContactHeader: "Contacta",
        ContactLocation: "Barcelona, España",

        //Other

        BackButton: "← Volver",

        NavigatePortfolioButton: "Ver mis Proyectos",
        NavigateContactButton: "Contacta conmigo",
        NavigateAboutButton: "Descubre quién soy",
    },

    ca: {
        //Title page
    heroTitle: "Abel Belarre",
    heroSubtitle: "Comunicador i Storyteller",
    CardAboutTitle: "Sobre mi",
    CardAboutSubtitle: "Esbrina qui soc.",
    CardAboutButton: "Saber-ne més",
    CardPortfolioTitle: "Portfoli",
    CardPortfolioSubtitle: "Mira els meus projectes.",
    CardPortfolioButton: "Veure projectes",
    CardContactTitle: "Contacte",
    CardContactSubtitle: "Parla amb mi.",
    CardContactButton: "Contactar",

//About page
    AboutTitle: "Sobre mi",
    AboutSubtitle: "Comunicador i Storyteller",

    AboutHeader: "Hola, soc Abel Belarre",
    AboutText1: "Soc un comunicador i narrador de Barcelona, treballant en totes les àrees de la producció i especialitzat en rols creatius com el guió.",
    AboutText2: "El meu treball intenta combinar l'entreteniment i la qualitat. Crec que hi ha humor a tot arreu de la vida, i que no es tracta només del que expliques, sinó també de com ho fas.",
    AboutText3: "He treballat en curtmetratges, sèries i màrqueting, intentant fer alguna cosa memorable cada vegada. La meva ambició és arribar més lluny i el meu tema recurrent és la naturalesa humana.",
    AboutText4: "Creem alguna cosa significativa junts.",

    AboutBrandsTitle: "Brands & Collabs",

//Portfolio page
    PortfolioTitle: "Portfoli",
    PortfolioSubtitle: "Treballs i experiments",
        PrivateTitle: "Projecte privat",
        PrivateMsg: "En circulació - Disponible sota demanda.",
        PrivateContact: "Contactar",


 //Contact page
    ContactTitle: "Parlem",
    ContactSubtitle: "De la teva pròxima història",

    FormName: "Nom",
    FormEmail: "Email",
    FormMessage: "Missatge",
    FormSend: "Enviar",

    ExtraContactHeader: "Contacta",
    ContactLocation: "Barcelona, Espanya",

    //Other

    BackButton: "← Tornar",

    NavigatePortfolioButton: "Veure els meus Projectes",
    NavigateContactButton: "Contacta amb mi",
    NavigateAboutButton: "Descobreix qui soc",

    },
};

    // Cambiar idioma
    function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll(".lang-btn").forEach(btn =>
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang)
    );
    }

    // Detectar idioma guardado o por defecto
    document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        setLanguage(lang);
        });
    });
});