




const randomMessage = age => {
    let d = new Date(); 
     d.getHours(); 
     d.getMonth(); 
    let timeMessage = "";
    let monthMessage = "";
    let ageName = "";
    
if (d.getHours() > 0 && d.getHours() < 5){ timeMessage = 'Go to bed you'}
else if (d.getHours() > 4 && d.getHours() < 9){ timeMessage = 'Time for breakfast'}
else if (d.getHours() > 9 && d.getHours() < 12){ timeMessage = 'Second breakfast time'}
else if (d.getHours() > 12 && d.getHours() < 15){ timeMessage = 'What about lunch'}
else if (d.getHours() > 15 && d.getHours() < 17){ timeMessage = `It's definitely tea time`}
else if (d.getHours() > 17 && d.getHours() < 20){ timeMessage = `I bet you can't wait until dinner`}
else if (d.getHours() > 20 && d.getHours() < 24){ timeMessage = `You're going to dream about breakfast aren't you,`}
else {return 'error, try again'};

if (d.getMonth() === 1 || d.getMonth() === 2 || d.getMonth() === 12){monthMessage = "And what about a hot chocolate?"}
else if (d.getMonth() > 2 && d.getMonth() < 6){monthMessage = "Longer days and shorter nights make you hungry!"}
else if (d.getMonth() > 5 && d.getMonth() < 9){monthMessage = "Vegan BBQ tomorrow?"}
else if (d.getMonth() > 8 && d.getMonth() < 12){monthMessage = "I love the leaves this time of year."}
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

