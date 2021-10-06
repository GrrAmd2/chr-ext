// Extension filtering configurations
const allWords = [
    {
        palabra: "arquitecto",
        texto: "¿Sabías que la carrera de Arquitectura tiene paridad de género en sus estudiantes? (CET, 2020)"
    },
    {
        palabra: "programador",
        texto: "De las personas que estudian carreras vinculadas a la programación en Argentina, sólo el 16% son mujeres. (CET, 2018)",
        small: "El 16% de quienes estudian carreras vinculadas a programación en Argentina son mujeres. (CET, 2020) En esta nota hay personas que se están quedando afuera."
    },
    {
        palabra: "programadora",
        texto: "De las personas que estudian carreras vinculadas a la programación en Argentina, sólo el 16% son mujeres. (CET, 2018)",
        small: "El 16% de quienes estudian carreras vinculadas a programación en Argentina son mujeres. (CET, 2020) En esta nota hay personas que se están quedando afuera."
    },
    {
        palabra: "ingeniero",
        texto: "En las carreras vinculadas a Ingeniería del sistema universitario argentino, la participación de estudiantes mujeres es menor al 25%. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "desarrollador",
        texto: "6 de cada 100 personas inscriptas en el sistema universitario argentino corresponden a carreras relacionadas con Informática. Sólo 1 de esas 6 personas es mujer. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "diseñador",
        texto: "En Diseño de indumentaria y textil, de cada 100 personas inscriptas, más de 95 son mujeres. En el otro extremo, el Diseño de videojuegos cuenta con 5 mujeres de cada 100 personas inscriptas. (CET, 2020)",
        small: "El 5% del estudiantado de diseño de videojuegos son mujeres. (CET, 2020)  En esta nota hay personas que se están quedando afuera."
    },
    {
        palabra: "diseñadora",
        texto: "En Diseño de indumentaria y textil, de cada 100 personas inscriptas, más de 95 son mujeres. En el otro extremo, el Diseño de videojuegos cuenta con 5 mujeres de cada 100 personas inscriptas. (CET, 2020)",
        small: "El 5% del estudiantado de diseño de videojuegos son mujeres. (CET, 2020)  En esta nota hay personas que se están quedando afuera."
    },
    {
        palabra: "experto",
        texto: "En el ámbito laboral CTIM, las mujeres enfrentan sesos de género como la manifiesta desconfianza de los jefes en sus capacidades técnicas para resolver problemas. (INTAL BID - Chicas en Tecnología, 2019) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "candidato",
        texto: "Las mujeres atraviesan situaciones de discriminación y dificultades que condicionan sus posibilidades de promoción a puestos jerárquicos y roles de liderazgo. (INTAL BID – CET, 2019) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "técnico",
        texto: "En el sistema universitario de Argentina, incluso en las carreras con más del 70% de estudiantes mujeres, cuando la disciplina tiene que ver con Tecnología, Programación o Informática, decrece el porcentaje de mujeres que la estudian. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "administrador",
        texto: "Las mujeres jóvenes se auto perciben como menos capaces para desempeñarse en determinados empleos vinculados a disciplinas CTIM que los varones (Equals, 2018) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "científico",
        texto: "Entre las autoridades de Organismos de Ciencia y Tecnología de Argentina, el 78% son varones y 22% mujeres. (Datos abiertos Diputados, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "director",
        texto: "En la Argentina, existe una subrepresentación de mujeres en posiciones de liderazgo en las instituciones educativas universitarias vinculadas a disciplinas CTIM que dificulta la influencia femenina en la comunidad educativa. (INTAL BID – CET, 2019) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "presidente",
        texto: "Una mayor diversidad de género en la gestión de las organizaciones produce un impacto positivo, con mejores resultados financieros para la economía (McKinsey Global Institute, 2015) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "jefe",
        texto: "En Argentina, los ámbitos laborales en CTIM no suelen fomentar el equilibrio entre la vida privada y profesional, lo que lleva a algunas mujeres a descartar el avance hacia posiciones de liderazgo. (INTAL BID – CET, 2019) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "investigador",
        texto: "Sólo el 28% de quienes investigan en el mundo son mujeres (UNESCO, 2018)",
        small: "El 28% de quienes investigan en el mundo son mujeres (UNESCO, 2018). En esta nota hay personas que se están quedando afuera."
    }, {
        palabra: "investigadora",
        texto: "Sólo el 28% de quienes investigan en el mundo son mujeres (UNESCO, 2018)",
        small: "El 28% de quienes investigan en el mundo son mujeres (UNESCO, 2018). En esta nota hay personas que se están quedando afuera."
    },
    {
        palabra: "editor",
        texto: "En el campo de las disciplinas CTIM, las áreas educativas más dominadas por los hombres son las TIC y la ingeniería, en las que las tasas globales de matriculación de mujeres son del 27% y 28% respectivamente (UNESCO, 2017) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "empresario",
        texto: "Sólo el 4% de las empresas en América Latina y el Caribe tiene una mujer como Gerente General (ONU Mujeres, 2017) Conocé #MásDatos para dar vuelta la brecha de género.\nhttps://www.unwomen.org/es/what-we-do/economic-empowerment/facts-and-figures#notes"
    },
    {
        palabra: "emprendedor",
        texto: "En más de 800 emprendimientos de LATAM, sólo el 23% cuenta con al menos una mujer dentro del equipo fundador (Endeavor, 2021) Conocé #MásDatos para dar vuelta la brecha de género. https://www.endeavor.org.mx/women-in-tech/ En latinoamérica Las mujeres son las que montan un negocio por necesidad en un 40% más que los hombres."
    },
    {
        palabra: "emprendedora",
        texto: "En latinoamérica Las mujeres son las que montan un negocio por necesidad en un 40% más que los hombres. (Endeavor, 2021)"
    },
    {
        palabra: "fundador",
        texto: "Sólo el 23% de las organizaciones cuenta con al menos una mujer dentro del equipo fundador y únicamente 9% tiene una sola mujer fundadora o un equipo femenino. (Endeavor, 2021)"
    },
    {
        palabra: "creador",
        texto: "Del total de profesionales que trabajan en el campo de la inteligencia artificial en todo el mundo, sólo el 22% son mujeres (WEF, 2018) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "autor",
        texto: "En Argentina, de las personas profesionales de la industria del software, el 30% son mujeres y el 70% son hombres. (OPSSI 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "depurador",
        texto: "9 de cada 10 niñas entre 6 y 8 años asocia la Ingeniería con habilidades masculinas (UNESCO, 2019). Conocé #MásDatos para dar vuelta la brecha de género.\nhttps://lac.unwomen.org/es/noticias-y-eventos/en-la-mira/dia-internacional-de-las-ninas-en-las-tic"
    },
    {
        palabra: "gerente",
        texto: "Las mujeres en trabajos CTIM ganan 33% más que aquellas en ocupaciones de otras disciplinas fuera del ámbito CTIM (BID, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "biólogo",
        texto: "En las carreras universitarias de Argentina vinculadas a Cs. Naturales, las mujeres representan alrededor del 53% de las inscripciones. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "químico",
        texto: "En Argentina, las carreras universitarias vinculadas a Química cuentan con un 65% de estudiantes mujeres. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "química",
        texto: "Química tiene un 65% de inscripciones de mujeres. (CET, 2020)"
    },
    {
        palabra: "licenciado",
        texto: "En disciplinas CTIM de Argentina con titulación en Licenciatura, la proporción de mujeres es del 45%. (INTAL BID – CET, 2019) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "inscriptos",
        texto: "Entre 2011 y 2016, la carrera Ingeniería en Computación del sistema universitario argentino contó con 1 mujer cada 10 personas inscriptas. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género. De quienes estudian carreras en CTIM en Argentina, el 33% son mujeres"
    },
    {
        palabra: "inscriptas",
        texto: "De quienes estudian carreras en CTIM en Argentina, el 33% son mujeres (INTAL BID - CET, 2019)"
    },
    {
        palabra: "egresados",
        texto: "En 2016, la tasa de graduación de las estudiantes de las carreras universitarias de grado en CTIM de Argentina fue del 29%, y la de los varones fue del 24%. (INTAL BID – CET, 2019) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "neurocientífico",
        texto: "La escasez de mujeres con roles científicos visibles e influyentes desalienta a las mujeres a elegir disciplinas CTIM. (INTAL BID – CET, 2019) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "físico",
        texto: "De las personas que se inscriben a la carrera de física menos del 30% son mujeres. (CET, 2020)"
    },
    {
        palabra: "física",
        texto: "De las personas que se inscriben a la carrera de física menos del 30% son mujeres. (CET, 2020)"
    },
    {
        palabra: "sismóloga",
        texto: "En el nivel universitario, las mujeres se concentran en las Ciencias Sociales y en ciertas áreas de las Ciencias Naturales o Médicas y poseen una presencia limitada en las CTIM. (ONU Mujeres, 2020) Conocé #MásDatos para dar vuelta la brecha de género."
    },
    {
        palabra: "meteoróloga",
        texto: "En 2017, sólo se inscribieron 128 mujeres a la carrera de Ciencias de la atmósfera en todo el país. (CET, 2020)"
    },
    {
        palabra: "meteorologo",
        texto: "En 2017 sólo se inscribieron 128 mujeres a la carrera de Ciencias de la atmósfera en todo el país."
    },
    {
        palabra: "educador",
        texto: "De las personas que eligen especializarse en tecnología en el sistema universitario argentino, 6 de cada 10 son mujeres. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género. En Ciencias de la Educación, el grupo de estudiantes cuenta con un 75% de mujeres, pero en la especialidad en Tecnología educativa esa representación decrece al 60%."
    },
    {
        palabra: "educadora",
        texto: "En Ciencias de la Educación, el grupo de estudiantes cuenta con un 75% de mujeres, pero en la especialidad en Tecnología educativa esa representación decrece al 60%. (CET, 2020)"
    },
    {
        palabra: "profesor",
        texto: "En el caso de los profesorados dentro de Informática se pasa de un 15% de mujeres en el grupo en general a un 25% en los profesorados. (CET, 2020)"
    },
    {
        palabra: "profesora",
        texto: "En el caso de los profesorados dentro de Informática se pasa de un 15% de mujeres en el grupo en general a un 25% en los profesorados. (CET, 2020)"
    },
    {
        palabra: "informática",
        texto: "Sólo 6 de cada 100 personas inscriptas en la universidad corresponden a carreras relacionadas con Informática y que solo 1 de esas 6 personas es mujer. (CET, 2020)"
    },
    {
        palabra: "informático",
        texto: "Sólo 6 de cada 100 personas inscriptas en la universidad corresponden a carreras relacionadas con Informática y que solo 1 de esas 6 personas es mujer.”"
    }
]

const settings = {
    male: {
        className: "male",
    },
    female: {
        className: "female",
    },
};

// Functionalities
const replaceWords = (className = "default-mark") => {
    let tempCounter = [];
    let body = document.body;
    const context = document.querySelector("html");
    const instance = new Mark(context);

    allWords.forEach((word) => {
        const reg = new RegExp(`\\b${word.palabra}\\b`, "gim");

        if (reg.test(body.innerText)) {
            // Cuenta solo una vez la palabra en el texto
            if (!tempCounter.includes(word)) {
                const findWord = allWords.find(v => v.palabra.toLowerCase() === word.palabra.toLowerCase());

                tempCounter.push(findWord);
            }

            // Cuenta todas las veces que aparece la palabra en el texto
            //counter += body.innerText.match(reg).length;
        }
        instance.mark(word.palabra, { className, accuracy: "exactly" });
    });
    return tempCounter
};

const filterContent = () => {
    return replaceWords();
};

// Message listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "run-filter") {
        const data = filterContent();
        chrome.runtime.sendMessage({
            status: "run-filter-successful",
            counters: data,
        });
    }
    return true;
});
