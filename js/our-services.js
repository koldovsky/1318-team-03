
            const servicesOptions = document.querySelector(".services__options");
            const leftButton = document.querySelector(".services__buttons[aria-label='Scroll left']");
            const rightButton = document.querySelector(".services__buttons[aria-label='Scroll right']");
            const options = document.querySelectorAll(".services__option");

            let currentIndex = 0;
            let visibleOptionsCount = 3;

            const updateVisibleOptionsCount = () => {

                if (window.innerWidth <= 480) {
                    visibleOptionsCount = 1;
                } else if (window.innerWidth <= 768) {
                    visibleOptionsCount = 2;
                } else {
                    visibleOptionsCount = 3;
                }
            };

            const updateCarousel = () => {
                updateVisibleOptionsCount();
                options.forEach((option, index) => {
                    option.style.display = "none";

                    if (index >= currentIndex && index < currentIndex + visibleOptionsCount) {
                        option.style.display = "block";
                    }
                });

                leftButton.disabled = currentIndex === 0;
                rightButton.disabled = currentIndex >= options.length - visibleOptionsCount;
            };

            leftButton.addEventListener("click", () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });


            rightButton.addEventListener("click", () => {
                if (currentIndex < options.length - visibleOptionsCount) {
                    currentIndex++;
                    updateCarousel();
                }
            });


            updateCarousel();

            window.addEventListener("resize", updateCarousel);
