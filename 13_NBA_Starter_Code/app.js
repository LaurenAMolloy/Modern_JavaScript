const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");

//loop over the object
for(let game of games) {
  const gameLi = document.createElement('li');
  gameLi.innerHTML = getScore(game);
  //isWinner(game, targetTeam);
  gameLi.classList.add(isWinner(game, targetTeam)?"win":"loss");

  ulParent.append(gameLi);
}
return ulParent;
};

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}

const getScore = ( {homeTeam, awayTeam}) => {
//Destructuring
  const { team:hTeam, points: hPoints} = homeTeam
  const { team:aTeam, points: aPoints} = awayTeam

  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;

    //Compare the points and add a bold tag
  if(aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    scoreLine = `${aPoints} - <b>${hPoints}</b> `;
  }
  return `${teamNames} ${scoreLine}`
}

const gsSection = document.getElementById("gs");
const hrSection = document.getElementById("hr");
const chart1 = makeChart(warriorsGames, "Golden State");
const chart2 = makeChart(warriorsGames, "Houston");
gsSection.append(chart1);
hrSection.append(chart2);
//document.body.prepend(chart1);

const duels = [
  {
    firstDueler: { house: "Gryffindor", points: 120, isWinner: true },
    secondDueler: { house: "Slytherin", points: 110, isWinner: false }
  },
  {
    firstDueler: { house: "Ravenclaw", points: 130, isWinner: true },
    secondDueler: { house: "Gryffindor", points: 90, isWinner: false }
  },
  {
    firstDueler: { house: "Hufflepuff", points: 85, isWinner: false },
    secondDueler: { house: "Gryffindor", points: 100, isWinner: true }
  }
];

//👉 How do I loop over an array of objects in JavaScript?

for(let dueler of duels){
  //👉 How do I use destructuring to grab values from an object?
  const { firstDueler, secondDueler } = dueler;
  //console.log(firstDueler.house);
  //console.log(secondDueler.house);
  //If the first dueler’s house is Gryffindor, then use the first dueler; otherwise, use the second dueler.”
  //Point to the gryffindor object
  const gryffindor = firstDueler.house === "Gryffindor"? firstDueler : secondDueler;

  // Prompt: How do I figure out which object is “the other dueler”? 
  //Point to the other object
  const otherDuler = firstDueler.house === "Gryffindor" ? secondDueler : firstDueler;

  //"How do I look at the boolean property isWinner inside my gryffindor object, and branch my code with an if statement?"
  const winningTeam = gryffindor.isWinner?"Gryffindor is the winner":"Gryffindor is the loser";

  console.log(`${winningTeam} ${gryffindor.house} ${gryffindor.points} - ${otherDuler.house} ${otherDuler.points} `);
  }

