const db = require('./models');

const propos = [

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

const locations =
    {
        zipCode: 97103,
        name: 'Clatsop County, Oregon',
        presCandidates: [],
        propositions: []
    }

db.Location.deleteMany({}, (err, result) =>{
    if (err) {
        console.log(err);
        process.exit();
    }

    console.log(`Cleared ${result.deletedCount} Location`);
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

        db.Location.create(locations, (err, newLocations) => {
            if (err) {
                console.log(err);
                process.exit();
            }
               
                db.Proposition.create(propos, (err, newPropos) => {
                    let location = newLocations
                    if (err) {
                        console.log(err);
                        process.exit();
                    }     
                    location.propositions.push(...newPropos)
                    location.save( (err, savePropos) =>{
                        if (err) {
                            console.log(err);
                            process.exit();
                        }
 
                    console.log(`added ${newPropos.length} propositions to ${location.name}`)
                    })
                
                    db.Officials.create(presOfficals, (err, newOfficials) => {
                        let location = newLocations
                        if (err) {
                            console.log(err);
                            process.exit();
                        }
                        location.presCandidates.push(...newOfficials)
                        location.save( (err, saveOfficials) =>{
                            if (err) {
                                console.log(err);
                                process.exit();
                            }
                        })
                        console.log(`added ${newOfficials.length} officials to ${location.name}`)
                        })
                
            });
            console.log(`Added all loclations`);

            })

    )

);