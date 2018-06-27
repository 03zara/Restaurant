

var MenuIcon = document.querySelector(".navBtn");
 
    MenuIcon.addEventListener("click", function() {

        if (document.querySelector(".menu-items").style.display === "none") {

            document.querySelector(".menu-items").style.display = "block";
        }

        else {
            document.querySelector(".menu-items").style.display = "none";
        }

    });
            
var CloseNavOnceClicked = document.getElementsByClassName("clicked");
//    for (var i = 0; i < 4; i++) {
        CloseNavOnceClicked[0].onclick = function() {
            document.querySelector(".menu-items").style.display = "none";
        }
        CloseNavOnceClicked[1].onclick = function() {
            document.querySelector(".menu-items").style.display = "none";
        }
        CloseNavOnceClicked[2].onclick = function() {
            document.querySelector(".menu-items").style.display = "none";
        }
        CloseNavOnceClicked[3].onclick = function() {
            document.querySelector(".menu-items").style.display = "none";
        }
        CloseNavOnceClicked[4].onclick = function() {
            document.querySelector(".menu-items").style.display = "none";
        }
//    }






            
 