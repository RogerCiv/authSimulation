
export async function fecthUsersApi(url){

    try{
        const response = await fetch(url);
        const data = await response.json();
    //console.log(data);
    return data;

    }catch(err){
        console.error("Error: ",err.message)
    }
}