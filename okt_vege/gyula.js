let pers={}
let hiba={}

function kuldes(){
    let uzenet=document.getElementById('uzenet').value
    console.log(uzenet)
    if(uzenet.length>0){
        pers.uzenet=uzenet
    }
    else{
        hiba.push("Az üzenet mező üres!")
    }

    let nev=document.getElementById('nev').value
    console.log(nev)
    if(nev.length>2){
        pers.nev=nev
    }
    else{
        hiba.push("A név mező kitöltése kötelező!")
    }

    let email=document.getElementById('email').value
    console.log(email)
    if(email.length>10){
        pers.email=email
    }
    else{
        hiba.push("Az email mező kitöltése kötelező!")
    }
}