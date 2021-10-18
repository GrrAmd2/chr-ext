// Extension filtering configurations
const allWords = [
    {
        palabra: 'arquitecto',
        texto: 'La carrera de Arquitectura tiene paridad de género en sus estudiantes. ',
        fuente: 'CET, 2020',
        small: 'En esta nota hay personas que no están representadas. '
    },
    {
        palabra: 'programador',
        texto: 'El 16% de las personas que estudian carreras vinculadas a la programación en Argentina son mujeres.',
        fuente: 'CET, 2018',
        small: ''
    },
    {
        palabra: 'programadora',
        texto: 'El 16% de las personas que estudian carreras vinculadas a la programación en Argentina son mujeres.',
        fuente: 'CET, 2018',
        small: ''
    },
    {
        palabra: 'ingeniero',
        texto: 'En las carreras vinculadas a Ingeniería del sistema universitario argentino, la participación de estudiantes mujeres es menor al 25%. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'desarrollador',
        texto: '6 de cada 100 personas inscriptas en el sistema universitario argentino corresponden a carreras relacionadas con Informática. Sólo 1 de esas 6 personas es mujer.',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'diseñador',
        texto: 'En Diseño de Indumentaria y Textil, de cada 100 personas inscriptas, más de 95% son mujeres. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'diseñadora',
        texto: '¿Sabías que 5 de cada 100 personas inscriptas en la carrera de Diseño de Videojuegos son mujeres? ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'experto',
        texto: 'En el ámbito laboral CTIM, las mujeres enfrentan sesgos de género como la manifiesta desconfianza de los jefes en sus capacidades técnicas para resolver problemas. ',
        fuente: 'INTAL BID - Chicas en Tecnología, 2019',
        small: ''
    },
    {
        palabra: 'candidato',
        texto: 'Las mujeres atraviesan situaciones de discriminación y dificultades que condicionan sus posibilidades de promoción a puestos jerárquicos y roles de liderazgo.',
        fuente: '(INTAL BID – CET, 2019)',
        small: undefined
    },
    {
        palabra: 'técnico',
        texto: 'En Argentina, incluso en las carreras con mayoría de estudiantes mujeres, cuando la disciplina tiene que ver con tecnología, programación o informática, decrece el porcentaje de las mimas a medida que avanzan. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'administrador',
        texto: 'Las mujeres jóvenes se autoperciben como menos capaces para desempeñarse en determinados empleos vinculados a disciplinas STEM que los varones.',
        fuente: 'Equals, 2018',
        small: ''
    },
    {
        palabra: 'científico',
        texto: 'El 22% de las autoridades de Organismos de Ciencia y Tecnología son mujeres en Argentina.',
        fuente: 'Datos abiertos Diputados, 2020',
        small: ''
    },
    {
        palabra: 'director',
        texto: 'Existe una subrepresentación de mujeres en posiciones de liderazgo en las instituciones educativas universitarias vinculadas a disciplinas CTIM que dificulta la influencia femenina en ese ámbito.',
        fuente: 'INTAL BID – CET, 2019 ',
        small: ''
    },
    {
        palabra: 'presidente',
        texto: 'Una mayor diversidad de género en la gestión de las organizaciones produce un impacto positivo, con mejores resultados financieros para la economía.',
        fuente: 'McKinsey Global Institute, 2015 ',
        small: ''
    },
    {
        palabra: 'jefe',
        texto: 'Los ámbitos laborales en CTIM no suelen fomentar el equilibrio entre la vida privada y profesional, lo que lleva a algunas mujeres a descartar el avance hacia posiciones de liderazgo. ',
        fuente: 'INTAL BID – CET, 2019',
        small: ''
    },
    {
        palabra: 'investigador',
        texto: 'El 28% de quienes investigan en el mundo son mujeres.',
        fuente: 'UNESCO, 2018',
        small: ''
    },
    {
        palabra: 'investigadora',
        texto: 'Sólo el 28% de quienes investigan en el mundo son mujeres ',
        fuente: '(UNESCO, 2018)',
        small: undefined
    },
    {
        palabra: 'editor',
        texto: 'En el campo de las disciplinas CTIM, las áreas educativas más dominadas por los hombres son las TIC y la ingeniería.',
        fuente: 'UNESCO, 2017',
        small: ''
    },
    {
        palabra: 'empresario',
        texto: 'Sólo el 4% de las empresas en América Latina y el Caribe tiene una mujer como Gerente General.',
        fuente: 'ONU Mujeres, 2017',
        small: ''
    },
    {
        palabra: 'emprendedor',
        texto: 'En más de 800 emprendimientos de LATAM, el 23% cuenta con al menos una mujer dentro del equipo fundador.',
        fuente: 'Endeavor, 2021',
        small: ''
    },
    {
        palabra: 'emprendedora',
        texto: 'En latinoamérica Las mujeres son las que montan un negocio por necesidad en un 40% más que los hombres. ',
        fuente: '(Endeavor, 2021)',
        small: undefined
    },
    {
        palabra: 'fundador',
        texto: 'El 23% de las organizaciones cuenta con al menos una mujer dentro del equipo fundador. El 9% tiene una sola mujer fundadora o un equipo femenino.',
        fuente: 'Endeavor, 2021',
        small: ''
    },
    {
        palabra: 'creador',
        texto: 'Del total de profesionales que trabajan en el campo de la inteligencia artificial en todo el mundo, el 22% son mujeres.',
        fuente: 'WEF, 2018 ',
        small: ''
    },
    {
        palabra: 'autor',
        texto: 'En Argentina, el 30% de las personas profesionales de la industria del software son mujeres.',
        fuente: 'OPSSI, 2020',
        small: ''
    },
    {
        palabra: 'depurador',
        texto: '9 de cada 10 niñas entre 6 y 8 años asocia la Ingeniería con habilidades masculinas. ',
        fuente: 'UNESCO, 2019',
        small: ''
    },
    {
        palabra: 'gerente',
        texto: 'Las mujeres en trabajos CTIM ganan 33% más que aquellas en ocupaciones de otras disciplinas fuera del ámbito CTIM.',
        fuente: 'BID, 2020',
        small: ''
    },
    {
        palabra: 'biólogo',
        texto: 'Las mujeres representan alrededor del 53% de las inscripciones en las carreras universitarias de Argentina vinculadas a ciencias naturales.',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'químico',
        texto: 'Las carreras universitarias vinculadas a química cuentan con un 65% de estudiantes mujeres en Argentina.',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'química',
        texto: 'Química tiene un 65% de inscripciones de mujeres.',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'licenciado',
        texto: 'La proporción de mujeres en disciplinas CTIM con titulación en Licenciatura es del 45% en Argentina. ',
        fuente: 'INTAL BID – CET, 2019',
        small: ''
    },
    {
        palabra: 'inscriptos',
        texto: 'Entre 2011 y 2016, 1 cada 10 personas inscriptas en las carreras de Ingenieria en Computación en Argentina fueron mujeres.',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'inscriptas',
        texto: 'El 33% de quienes estudian carreras en CTIM en Argentina son mujeres. ',
        fuente: 'INTAL BID – CET, 2019',
        small: ''
    },
    {
        palabra: 'egresados',
        texto: 'En 2016, la tasa de graduación de las estudiantes de las carreras universitarias de grado en CTIM de Argentina fue del 29%, y la de los varones fue del 24%.',
        fuente: 'INTAL BID – CET, 2019',
        small: ''
    },
    {
        palabra: 'neurocientífico',
        texto: 'La escasez de mujeres con roles científicos visibles e influyentes desalienta a las mujeres a elegir disciplinas CTIM. ',
        fuente: 'INTAL BID – CET, 2019',
        small: ''
    },
    {
        palabra: 'físico',
        texto: 'De las personas que se inscriben a la carrera de Física menos del 30% son mujeres. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'física',
        texto: 'De las personas que se inscriben a la carrera de Física menos del 30% son mujeres. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'sismóloga',
        texto: 'En el nivel universitario, las mujeres se concentran en las Ciencias Sociales y en ciertas áreas de las Ciencias Naturales o Médicas. Su participación en áreas CTIM es reducida.',
        fuente: 'ONU Mujeres, 2020',
        small: ''
    },
    {
        palabra: 'meteoróloga',
        texto: 'En 2017, se inscribieron 128 mujeres a la carrera de Ciencias de la atmósfera en todo el país.',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'meteorologo',
        texto: 'En 2017, se inscribieron 128 mujeres a la carrera de Ciencias de la Atmósfera en todo en Argentina.',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'educador',
        texto: '6 de cada 10 personas que eligen especializarse en tecnología en el sistema universitario argentino son mujeres. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'educadora',
        texto: 'El 75% de las personas estudiantes de Ciencias de la Educación son mujeres; en la especialidad de Tecnología Educativa esa representación decrece al 60%. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'profesor',
        texto: 'El 25% de las personas estudiantes de profesorado son mujeres, en los profesorados de Informatica ese numero se reduce a un 15%. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'profesora',
        texto: 'El 25% de las personas estudiantes de profesorado son mujeres, en los profesorados de informatica ese numero se reduce a un 15%. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'informática',
        texto: 'Sólo 6 de cada 100 personas inscriptas en la universidad corresponden a carreras relacionadas con Informática y que solo 1 de esas 6 personas es mujer. ',
        fuente: 'CET, 2020',
        small: ''
    },
    {
        palabra: 'informático',
        texto: 'Sólo 6 de cada 100 personas inscriptas en la universidad corresponden a carreras relacionadas con Informática y que solo 1 de esas 6 personas es mujer.',
        fuente: 'CET, 2020',
        small: ''
    }
];

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
                const findWord = allWords.find(
                    (v) => v.palabra.toLowerCase() === word.palabra.toLowerCase()
                );

                tempCounter.push(findWord);
            }

			// Cuenta todas las veces que aparece la palabra en el texto
			//counter += body.innerText.match(reg).length;
		}
		instance.mark(word.palabra, { className, accuracy: "exactly" });
	});

	const markedElements = document.getElementsByClassName("default-mark");

	for (const iElement = 0; iElement < markedElements.length; iElement++) {
		markedElements[iElement].style.backgroundColor = "#ffc800 !important";
	}

	return tempCounter;
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
