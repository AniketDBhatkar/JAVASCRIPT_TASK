
let addnotebutton=document.getElementById("add-notes-button");

addnotebutton.addEventListener("click",function(){
    let notespopup=document.getElementById("notes-popup");

    if(notespopup){
        notespopup.remove();

    }

    else
    {
        let popup=document.createElement('div');
        popup.id='notes-popup';
        popup.className='popup';

        let text=document.createElement('p');
        text.innerText='this  daily task notes';

        popup.append(text)
        document.body.append(popup)

        
    }
});