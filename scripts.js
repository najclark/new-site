$(document).ready(function (){
    $("#experience").click(function() {
        seamless.scrollIntoView(document.querySelector("#experience-carousel"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    });
    
    $("#projects").click(function() {
        seamless.scrollIntoView(document.querySelector("#projects-carousel"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    });

    $("#resume").click(function() {
        window.open("assets/Nicholas-Clark-Resume.pdf", '_blank')
    });
});