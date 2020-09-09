const db = require('./models');

const props = [

    {
        name: 'Prop 1457',
        details: 'Hello my honey hello my baby hello my ragtime gal',
        url: 'www.WTF.com'
    },
    {
        name: 'Prop 612',
        details: 'And behold I am become death',
        url: 'www.WTF.com'
    }

];

const presOfficals = [
    {
        name: 'Howard the duck',
        photo: 'duck.jpg',
        website: 'www.WTF.com',
        party: 'Heghog'
    },
    {
        name: 'Sonic the Hehog',
        photo: 'sonic.jpg',
        website: 'www.WTF.com',
        party: 'Guck'
    }
]

const localtions = [
    {
        zipCode: 60625,
        name: 'Memesvill',
        officials: [],
        propositions: []
    },
    {
        zipCode: 312773,
        name: 'Villa of memes',
        officials: [],
        propositions: []
    }
]

db.Localtion.deleteMany({}, (err, result) =>{
    if (err) {
        console.log(err);
        process.exit();
    }

    console.log(`Cleared ${result.deletedCount} Localtion`);
})

.then( 
    () => (

    db.Officials.deleteMany({}, (err, result) =>{
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log(`Cleared ${result.deletedCount} Officials`);
    })
    )  
)

.then( 
    () => (

    db.Proposition.deleteMany({}, (err, result) =>{
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log(`Cleared ${result.deletedCount} Proposition`);
    })
    )  
)

.then( 
    () => (

        db.Localtion.create(localtions, (err, newLocaltions) => {
            if (err) {
                console.log(err);
                process.exit();
            }
            for (let i = 0; i < newLocaltions.length; i++){
               
                db.Proposition.create(props, (err, newProps) => {
                    let localtion = newLocaltions[i]
                    if (err) {
                        console.log(err);
                        process.exit();
                    }
                    localtion.propositions.push(...newProps)
                    localtion.save( (err, saveProps) =>{
                        if (err) {
                            console.log(err);
                            process.exit();
                        }
                    })
                    console.log(`added ${newProps.length} to ${localtion.name}`)
                    })
                
            };
            console.log(`Added ${newLocaltions.length} loclations`);

        })

    )

);