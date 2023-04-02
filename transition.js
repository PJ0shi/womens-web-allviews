window.onload = () =>{
    const transition_el = document.querySelector(".transition");
    const anchors = document.querySelectorAll("transit");

    setTimeout (() => {
        transition_el.classList.remove("is-active");
    }, 500);

    for (let i=0; i <anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener("click", e=>{
            e.preventDefault();
            let target = e.target.href;

            console.log(target);
            transition_el.classList.add("is-active");

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }



