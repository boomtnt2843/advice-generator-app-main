const apiLink = 'https://api.adviceslip.com/advice';
const getAdvice = () =>{
    const textAdvice = document.getElementById("text-advice");
    const idAdvice = document.getElementById("id-advice");
    let advice = {};
    fetch(apiLink)
        .then((response) => response.json())
        .then((res) => {
            console.log(res)
            if(res.slip){
                advice = res.slip;
                idAdvice.innerText= "ADVICE #"+advice.id;
                textAdvice.innerText= "“"+advice.advice+"”"; 
            }else{
                idAdvice.innerText= "ADVICE #_ _ _";
                textAdvice.innerText= "“ Null ”"; 
            }
        })
        .catch((error) => console.error(`Error fetching data: ${error.message}`));
}
