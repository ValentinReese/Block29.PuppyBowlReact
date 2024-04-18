const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-et-web-pt-1/players'

export async function fetchPuppies() {
    try {
        const response = await fetch(`${APIURL}`);
        const result = await response.json();
        if (result.success) {
            return result.data.players;
        }
    } catch (error) {
        console.log(error);
    }
}