const formulario = document.querySelector(".decode")

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    const textField = document.querySelector(".text-field").value
    const textArea = document.querySelector(".text-area")

    const texto = textField.split(" ");
    const codificado = [];

    texto.forEach(element => {

        let coded = element.replaceAll("a", "ai")
        coded = coded.replaceAll("e", "enter")
        coded = coded.replaceAll("i", "imes")
        coded = coded.replaceAll("o", "ober")
        coded = coded.replaceAll("u", "ufat")

        codificado.push(coded)
        
        })

    textArea.value = codificado.join(" ")

    });

    
const decodificar = document.querySelector(".decode-button")

function decodificador(){
    const textArea = document.querySelector(".text-area")
    const texto = textArea.value.split(" ");

    const codificado = [];

    texto.forEach(element => {

        let coded = element.replaceAll("ufat", "u")
        coded = coded.replaceAll("ober", "o")
        coded = coded.replaceAll("imes", "i")
        coded = coded.replaceAll("enter", "e")
        coded = coded.replaceAll("ai", "a")
        
        
        
        

        codificado.push(coded)
        
        });

        textArea.value = codificado.join(" ")

}

decodificar.addEventListener("click", decodificador)