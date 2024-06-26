function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                'Reggie Evans': { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 17 },
                'Brook Lopez': { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 10, blocks: 3, slamDunks: 15 },
                'Mason Plumlee': { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                'Jason Terry': { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                'Bismack Biyombo': { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                'DeSagna Diop': { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                'Ben Gordon': { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                'Brendan Haywood': { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}
console.log(gameObject());
function numPointsScored(playerName) {
    for (let player in gameObject().home.players) {
        if (player === playerName) {
            return gameObject().home.players[player].points;
        }
    }

    for (let player in gameObject().away.players) {
        if (player === playerName) {
            return gameObject().away.players[player].points;
        }
    }

    return null;
}
console.log(numPointsScored('Alan Anderson'));
function shoeSize(playerName) {
    for (let player in gameObject().home.players) {
        if (player === playerName) {
            return gameObject().home.players[player].shoe;
        }
    }

    for (let player in gameObject().away.players) {
        if (player === playerName) {
            return gameObject().away.players[player].shoe;
        }
    }

    return null;
}
console.log(shoeSize('Ben Gordon'));

function teamColors(teamName) {
    if ( gameObject().home.teamName === teamName) {
            return gameObject().home.colors;
        }
    

    if( gameObject().away.teamName === teamName) {
            return gameObject().away.colors;
        }
        

    return null;
    }

console.log(teamColors('Charlotte Hornets'))

function playerNumbers(playerName) {
    for (let player in gameObject().home.players) {
        if (player === playerName) {
            return gameObject().home.players[player].number;
        }
    }

    for (let player in gameObject().away.players) {
        if (player === playerName) {
            return gameObject().away.players[player].number;
        }
    }

    return null;

}
console.log(playerNumbers('Mason Plumlee'));

function playerStats(playerName){
        for (let player in gameObject().home.players) {
            if (player === playerName) {
                return gameObject().home.players[player];
            }
        }
    
        for (let player in gameObject().away.players) {
            if (player === playerName) {
                return gameObject().away.players[player];
            }
        }
    
        return null;
    }
    
console.log(playerStats('Alan Anderson'));
function bigShoeRebounds() {
        let largestShoeSize = 0;
        let rebounds = 0;
            for (let player in gameObject().home.players) {
            const shoeSize = gameObject().home.players[player].shoe;
            if (shoeSize > largestShoeSize) {
                largestShoeSize = shoeSize;
                rebounds = gameObject().home.players[player].rebounds;
            }
        }
    
        for (let player in gameObject().away.players) {
            const shoeSize = gameObject().away.players[player].shoe;
            if (shoeSize > largestShoeSize) {
                largestShoeSize = shoeSize;
                rebounds = gameObject().away.players[player].rebounds;
            }
        }
            return rebounds;
    }
    console.log(bigShoeRebounds());