
const randomMessage = age => {
    let d = new Date(); 
    let time = d.getHours(); 
    let month = d.getMonth(); 
    let timeMessage = "";
    let monthMessage = "";
    let ageName = "";

if (time > 0 && time < 5){ timeMessage = 'Go to bed you '}
else if (time > 4 && time < 9){ timeMessage = 'Time for breakfast '}
else if (time > 9 && time < 12){ timeMessage = 'Second breakfast time '}
else if (time > 12 && time < 15){ timeMessage = 'What about lunch '}
else if (time > 15 && time < 17){ timeMessage = `It's definitely tea time `}
else if (time > 17 && time < 20){ timeMessage = `I bet you can't wait until dinner `}
else if (time > 20 && time < 24){ timeMessage = `You're going to dream about breakfast aren't you, `}
else {return 'error, try again'};

if (month === 1 || month === 2 || month === 12){monthMessage = " And what about a hot chocolate?"}
else if (month > 2 && month < 6){monthMessage = " Longer days and shorter nights make you hungry!"}
else if (month > 5 && month < 9){monthMessage = " Vegan BBQ tomorrow?"}
else if (month > 8 && month < 12){monthMessage = " I love the leaves this time of year."}
else {return 'error, try again'};

if (age > 0 && age < 18){ageName = 'rizzler!'}
else if (age > 18 && age < 22){ageName = 'cringelord!'}
else if (age > 22 && age < 34){ageName = 'bellend!'}
else if (age > 35 && age < 46){ageName = 'bae!'}
else if (age > 46 && age < 60){ageName = 'boomer!'}
else if (age > 60 && age < 80){ageName = 'whippersnapper!'}
else if (age > 80 && age < 130){ageName = 'square!'}
else {ageName = 'undead'}

console.log(`${timeMessage} ${ageName} ${monthMessage}`)

}

