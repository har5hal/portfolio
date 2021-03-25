var projects = [
    { 
        name: 'Manama Toppings',
        img: 'img/projects/ManamaToppings.png',
        link: 'https://www.manamatoppings.com/index/'
    },
    { 
        name: 'Brassline Hirer',
        img: 'img/projects/BrasslineHirer.png',
        link: 'http://www.brasslinehirer.com/index/'
    },
    { 
        name: 'Brassline India',
        img: 'img/projects/BrasslineIndia.png',
        link: 'https://www.brasslineindia.com/index/'
    },
    { 
        name: 'Kings Developers Group',
        img: 'img/projects/KingsDevelopersLtd.png',
        link: 'https://www.kingsdevelopers.com/index/'
    },
    { 
        name: 'Probott',
        img: 'img/projects/Probott.png',
        link: 'https://probott.com/index/'
    },
    { 
        name: 'SL Agarbattis',
        img: 'img/projects/SLAgarbattis.png',
        link: 'http://slagarbatti.com/index/'
    },
    { 
        name: 'Veeana Perfumary Works',
        img: 'img/projects/VeeanaPerfumery.png',
        link: 'http://veeana.com/index/'
    },
    { 
        name: 'Classic International',
        img: 'img/projects/ClassicInternational.png',
        link: 'http://classicinternational.net/index/'
    },
    { 
        name: 'A2Z Party Deco',
        img: 'img/projects/A2Z.png',
        link: 'http://a2zpartydeco.com/'
    },
    { 
        name: 'JREIC - Events, Ideaas & Concept',
        img: 'img/projects/JREIC.png',
        link: 'http://jreic.in/'
    },
    { 
        name: 'Ojas Rajani - Portfolio',
        img: 'img/projects/OjasRajani.png',
        link: 'http://ojasrajani.com/'
    },
    { 
        name: 'Span - IT Solutions',
        img: 'img/projects/SpanSystems.png',
        link: 'https://www.span.co/'
    },
    { 
        name: 'Vaibhav Jani - Astrologer',
        img: 'img/projects/VaibhavJani.png',
        link: 'http://vaibhavjani.com/'
    },
    { 
        name: 'Cinthol Lime',
        img: 'img/projects/GodrejCintholLime.png',
        link: 'https://lime.cinthol.com/en/'
    },
    { 
        name: 'MPower - Mind Matters',
        img: 'img/projects/Mpower.png',
        link: 'https://mpowerminds.com/'
    },
    { 
        name: 'RPACS',
        img: 'img/projects/RPACS.png',
        link: 'http://rpacs.in/'
    },
    { 
        name: 'Shree Krishna Group',
        img: 'img/projects/ShreeKrishnaGroup.png',
        link: 'http://shreekrishnagroup.co.in/'
    }
];



document.getElementById('projectGrid').innerHTML = projects.map(pro=> {
    return `
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid-item col-portfolio-2">
        <a href="${pro.link}" target="_blank">
        <div class="bg-portfolio">
            <img src="${pro.img}">
        </div>
        <div class="items-portfolio-name">
            <h2>${pro.name}</h2>
        </div>
        </a>
    </div>
    `}
    ).join('');