/* This function is used to toggle between the summary of a 
section and the detailed list. It is passed the name of the section
and changes the CSS according to the window size, which section
was clicked, and which part was already displayed. */

function ToggleInfo(section){
    var list = document.getElementById(section+"-list");
    var summary = document.getElementById(section+"-summary");
    var width = window.innerWidth;
    
    if (summary.style.display === "none") { 
        //Toggle from list to summary
        summary.style.display = "block";
        list.style.display = "none";   
    } else if (list.style.display === "none"){ 
        //Toggle from summary to list 
        summary.style.display = "none";
        list.style.display = "block";
    } else if (width < 768 ) {
        /*If a user shrinks their tab from >768px to less <768px, 
        neither div is set to none. This else if assures it can toggle anyway*/  
        summary.style.display = "none"; 
        list.style.display = "block";
    }
}

/* If a user's tab is <768px and they toggle a section, this function assures 
that both sections appear if the tab then is expanded to >768px.
If this function is used and the tab is then reduced in size again, the media 
query no longer functions as intended because the function setting the divs to block
display overrides it. The else section below checks for this problem and if the screen
is resized to less <768px and both parts of a section are set to 'block' display, it
sets the display for the details section to None.*/

function checkFullScreen() {
    var width = window.innerWidth;
    var summaries =  document.querySelectorAll(".summary");
    var details =  document.querySelectorAll(".detail");
    if (width >= 768) {
        for (let i=0; i < summaries.length; i++){
            summaries[i].style.display="block";
        }
        for (let i=0; i < details.length; i++){
            details[i].style.display="block";
        }
    } else {
        for (let i=0; i < summaries.length; i++){
            if (summaries[i].style.display ==="block" && details[i].style.display === "block"){
                details[i].style.display="none";
            }
        }

    }
}