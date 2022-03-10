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

//MILESTONE 1: stampare su console le informazioni di nome, ruolo e la stringa della foto
for ( i = 0; i < team.length; i++){
    console.log(team[i]);
}

//MILESTONE 2: stampare le stesse informazioni su DOM sottoforma di stringhe
document.getElementById("name-1").innerHTML = team[0]['name'];
document.getElementById("name-2").innerHTML = team[1]['name'];
document.getElementById("name-3").innerHTML = team[2]['name'];
document.getElementById("name-4").innerHTML = team[3]['name'];
document.getElementById("name-5").innerHTML = team[4]['name'];
document.getElementById("name-6").innerHTML = team[5]['name'];
//
document.getElementById("role-1").innerHTML = team[0]['role'];
document.getElementById("role-2").innerHTML = team[1]['role'];
document.getElementById("role-3").innerHTML = team[2]['role'];
document.getElementById("role-4").innerHTML = team[3]['role'];
document.getElementById("role-5").innerHTML = team[4]['role'];
document.getElementById("role-6").innerHTML = team[5]['role'];