const here = document.getElementById("here");

fetchdata("https://pokeapi.co/api/v2/pokemon/vaporeon");
async function fetchdata(api){
    try{
        const response = await fetch(api);
        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

fetchdata("https://pokeapi.co/api/v2/pokemon/jolteon");
fetchdata("https://pokeapi.co/api/v2/pokemon/umbreon");
fetchdata("https://pokeapi.co/api/v2/pokemon/espeon");
fetchdata("https://pokeapi.co/api/v2/pokemon/sylveon");


async function fetchdata2(api){
        try{
            const pkmname = document.getElementById("pkmname").value.toLowerCase();
            let api = `https://pokeapi.co/api/v2/pokemon/${pkmname}`;


            const response = await fetch(api);
            if(!response.ok){
                throw new Error("could not fetch resource");
            }
            const data = await response.json();
            const pkmsprite = data.sprites.front_default;
            const imgelement = document.getElementById("pkmsprite");

            imgelement.src = pkmsprite;
            imgelement.style.visibility = "	visible";

        }
        catch(error){
            console.error(error);
        }
    }
