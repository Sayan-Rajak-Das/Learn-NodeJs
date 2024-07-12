const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

// const getFacts = async () =>{
//     console.log("Getting the data...");
//     let response = await fetch(URL);
//     console.log(response.status);
//     let data = await response.json();
//     factpara.innerText = data[2].text;
// };



function getFacts(){
    fetch(URL)
    .then((Response) =>{
        return Response.json();
    })
    .then((data) =>{
        console.log(data);
        factpara.innerText = data[0].text;
    });
}

btn.addEventListener("click", getFacts);



