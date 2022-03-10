const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


for ( i = 0; i < team.length; i++){
    console.log(team[i]);
    document.getElementById('output').innerHTML += `   
    <div class="row">
        <div class="card my-card text-center py-3 px-3">
            <img src="img/${team[i].image}" alt="${team[i].name}">
            <h5 class="fs-5 mb-1 mt-3">${team[i].name}</h5> 
            <h6>${team[i].role}</h6>
        </div>
    </div>`  
}

