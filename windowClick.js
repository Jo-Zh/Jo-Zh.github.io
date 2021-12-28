$(document).ready(() => {
    $( "body" ).click(
        (e)=>{
            
            $(".pop-up").css("animation-play-state", "running")
                        .css("animation-iteration-count", "infinite")
                        .css("left", e.pageX+"px")
                        .css("top", e.pageY+"px");
        
            const Timeout=setTimeout(
                ()=>{$(".pop-up").css("animation-play-state", "paused")}, 2000
            );

});
});
