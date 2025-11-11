
$(function () {
    
    // Navigation
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    const close = $("#close");
    
    navToggle.on("click", function (event) {
       
        event.preventDefault();
        nav.toggleClass("show");
        $("body").addClass('no-scroll');
        
    });

    close.on("click", function (event) {

        event.preventDefault();
        nav.removeClass("show")
        $("body").removeClass('no-scroll');

    });


    /* FILTER */
    let filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault();
        
       let cat = $(this).data('filter');
        
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            
            $("[data-cat]").each(function () {
           
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

            });
        }
    });


    // Modal
    const modalOpen = $("#modal-open");
    const closeModal = $("#close-modal");
    const modal = $("#modal");
    const modalContent = $("#modal-content");

    modalOpen.on("click", function (event) {
        event.preventDefault();

        modal.addClass("showmodal");
        $("body").addClass('no-scroll');

        setTimeout(function () {
            modalContent.css({
                transform: "scale(1)"
            }, 200);
        });
    })

    closeModal.on("click", function (event) {
        event.preventDefault(); 

        modal.removeClass("showmodal");
        $("body").removeClass('no-scroll');

        setTimeout(function () {
            modalContent.css({
                transform: "scale(0)"
            }, 300);
        });
    });

})