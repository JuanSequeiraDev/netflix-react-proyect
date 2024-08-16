export const obtenerUser = async () =>{
    const response = await fetch(
        '/Data.JSON',
        {
            method: "GET"
        }
    )/*  .then(res => res.json())
    .then(data => data) */
    
    return response.json()
}