/*Name this external file gallery.js*/

// global variables used for storage of the original information of the div "image"
var original_text;
var original_bgd;

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

    // get the goal url, the goal text
    var goal_url = previewPic.src;
    var goal_text = previewPic.alt;
    // select the goal object (div "image"):
    var goal_area = document.getElementById("image");
    // save the previous background:
    original_bgd = goal_area.style.background;
    // change the background:
    goal_area.style.background = "url('" + goal_url + "') repeat-x scroll center center";
    // save the previous text:
    original_text = goal_area.innerHTML;
    // change the text:
    goal_area.innerHTML = goal_text;
  
}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    // select the goal object (div "image"):
    var goal_area = document.getElementById("image");
    // restore the previous background:
    goal_area.style.background = original_bgd; //goal_area.style.background = "#8e68ff";
    // restore the previous text:
    goal_area.innerHTML = original_text; // goal_area.innerHTML = goal_text;
		
}