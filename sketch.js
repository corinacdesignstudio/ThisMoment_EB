//----This sketch showes you how to use space bar to jump to next page


// !!!important!!! in order for this to work, you need to make sure you have a title for each of your.html file (line 9 <title></title>)

//initialize the page
function setup() {}


//This function defines what happens when pressing a key
function keyPressed() {
    if (key == ' ') { //if space bar is pressed 
        if (document.title == "intro") { //if the page title is "intro"
            window.location.replace("page1.html"); //go to page1.html
        }
        if (document.title == "page1") {
            window.location.replace("page2.html");
        }
        if (document.title == "page2") {
            window.location.replace("page3.html");
        }
        if (document.title == "page3") {
            window.location.replace("page4.html");
        }
        if (document.title == "page4") {
            window.location.replace("page5.html");
        }
        if (document.title == "page5") {
            window.location.replace("page6.html");
        }
        if (document.title == "page6") {
            window.location.replace("page7.html");
        }
        if (document.title == "page7") {
            window.location.replace("page8.html");
        }
        if (document.title == "page8") {
            window.location.replace("page9.html");
        }
        if (document.title == "page9") {
            window.location.replace("page10.html");
        }
        if (document.title == "page10") {
            window.location.replace("page11.html");
        }
        if (document.title == "page11") {
            window.location.replace("page12.html");
        }
        if (document.title == "page12") {
            window.location.replace("page13.html");
        }
        if (document.title == "page13") {
            window.location.replace("page14.html");
        }
        if (document.title == "page14") {
            window.location.replace("page15.html");
        }
        if (document.title == "page15") {
            window.location.replace("page16.html");
        }
        if (document.title == "page16") {
            window.location.replace("page17.html");
         }
        if (document.title == "page17") {
            window.location.replace("page18.html");
        }
        if (document.title == "page18") {
            window.location.replace("page19.html");
          }
        if (document.title == "page19") {
            window.location.replace("index.html");
          }
    } 
        
}
