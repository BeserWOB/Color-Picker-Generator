
/////////////////* ELEMENTS *///////////////////////////
////////////////////////////////////////////////////////
const colorDiv1 = document.getElementById('color-div-1')
const colorDiv2 = document.getElementById('color-div-2')
const colorDiv3 = document.getElementById('color-div-3')
const colorDiv4 = document.getElementById('color-div-4')
const colorDiv5 = document.getElementById('color-div-5')

const colorCode1 = document.getElementById('color-code-1')
const colorCode2 = document.getElementById('color-code-2')
const colorCode3 = document.getElementById('color-code-3')
const colorCode4 = document.getElementById('color-code-4')
const colorCode5 = document.getElementById('color-code-5')



const hexValueDivs = document.querySelectorAll('.color-code')

/////////////////* HEADER ELEMENTS *///////////////////////////
///////////////////////////////////////////////////////////////

const colorPicker = document.getElementById('color-picker')
const modesSelector = document.getElementById('modes-selector')
const colorSchemeBtn = document.getElementById('get-btn')


/////////////////* EVENT LISTENER *////////////////////////////
///////////////////////////////////////////////////////////////

for (let i = 0; i < hexValueDivs.length; i++){
    hexValueDivs[i].addEventListener('click', ()=>{
        let hexText = hexValueDivs[i].textContent
        
        
                /* Copy to Clipboard */
        const tempInput = document.createElement("input");
            tempInput.setAttribute("value", hexText);
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            
/////////////////* CLASS REMOVING *////////////////////////////
///////////////////////////////////////////////////////////////
            hexValueDivs.forEach((valueDiv) =>{
                valueDiv.addEventListener('click', () =>{
                removeActiveClass();
                valueDiv.classList.add('copied')
                })
            })
            const removeActiveClass = function(){
                hexValueDivs.forEach((valueDiv) =>{
                    valueDiv.classList.remove('copied');
                })
            }
            
            
/////////////////* ICON CHANGING *////////////////////////////
///////////////////////////////////////////////////////////////
             let selectedBtn = document.getElementById(hexValueDivs[i].id)
                if (!selectedBtn.classList.contains("copied")) {
                    selectedBtn.classList.add('copied')
                } 

    })
    
    
    
}

colorSchemeBtn.addEventListener('click', (e)=>{
    e.preventDefault()
        let hexColor = colorPicker.value.slice(1,7)
        let mode = modesSelector.value.toLowerCase()
           getNewColors(hexColor, mode) 

})


////////////////////////////* LOGIC */////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function getNewColors(hex, mode){
                fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
            .then(res => res.json())
            .then(color => {
                colorDiv1.style.backgroundColor = `${color.colors[0].hex.value}`;
                colorDiv2.style.backgroundColor = `${color.colors[1].hex.value}`;
                colorDiv3.style.backgroundColor = `${color.colors[2].hex.value}`;
                colorDiv4.style.backgroundColor = `${color.colors[3].hex.value}`;
                colorDiv5.style.backgroundColor = `${color.colors[4].hex.value}`;
                
                colorCode1.innerText = `${color.colors[0].hex.value}`
                colorCode2.innerText = `${color.colors[1].hex.value}`
                colorCode3.innerText = `${color.colors[2].hex.value}`
                colorCode4.innerText = `${color.colors[3].hex.value}`
                colorCode5.innerText = `${color.colors[4].hex.value}`
        })
}


getNewColors("000000", 'monochrome')


    
    
    
    
    
