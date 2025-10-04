function myfunction(){
        document.getElementById("img-1")
}

document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper('.swiper', {
                loop:true,
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                grabcursor:true,
                spaceBetween:30,

                pagination: {
                        el: ".swiper-pagination",
                },
                navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                        0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                        },
                        480: {
                                slidesPerView: 1,
                                spaceBetween: 20
                        },
                        560: {
                                slidesPerView: 2,
                                spaceBetween: 30
                        },
                        768: {
                                slidesPerView: 2,
                                spaceBetween: 40
                        },
                        992: {
                                slidesPerView: 3,
                                spaceBetween: 50
                        }
                }
        });
});


function playVideo() {
        const videoContainer = document.getElementById("videocontainer");
        videoContainer.innerHTML = `
           <iframe class="videoSize"
            src="https://www.youtube.com/embed/c_FjIggQjN8?si=kroyu0dC3uo_I85w&autoplay=1&mute=1"
             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
             clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}  
        


  

function playVideo1() {
        const videoContainer1 = document.getElementById("videocontainer1");
        videoContainer1.innerHTML = `
           <iframe class="videoSize" src="https://www.youtube.com/embed/K8l7EDXk_bk?si=FOJ0LJBtS8bTUGHn&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           `;
}

document.querySelector(".custom-prev").addEventListener("click", () => {
        document.querySelector(".swiper-button-prev").click();
    });
    
    document.querySelector(".custom-next").addEventListener("click", () => {
        document.querySelector(".swiper-button-next").click();
    });