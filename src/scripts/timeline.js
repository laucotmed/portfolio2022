document.addEventListener('DOMContentLoaded', function() {
    const dotWrappers = document.querySelectorAll('.dot-wrapper');
    const wavyLinePath = document.querySelector('.wavy-line svg path');
    const dots = document.querySelectorAll('.dot'); 
    const lineContainer = document.querySelector('.line-container');
    const nextButton = document.querySelector('.next-slide');
    const prevButton = document.querySelector('.prev-slide');

    let currentIndex = 0; // Start with the first dot
    let scrollAmount = 0; // Initialize scrollAmount
    const scrollStep = 300;

    // Adjust the wavy line and other settings
    if (dotWrappers.length > 1) {
        const firstDot = dotWrappers[0].querySelector('.dot').getBoundingClientRect();
        const lastDot = dotWrappers[dotWrappers.length - 1].querySelector('.dot').getBoundingClientRect();

        const lineWidth = lastDot.right - firstDot.left;
        const firstDotOffset = firstDot.left - dotWrappers[0].getBoundingClientRect().left;

        const adjustedLineWidth = lineWidth - (lastDot.width / 2);
        const viewBoxHeight = 500;
        const viewBoxWidth = adjustedLineWidth;

        wavyLinePath.parentElement.setAttribute('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
        wavyLinePath.parentElement.style.width = `${viewBoxWidth}px`;
        wavyLinePath.parentElement.style.height = `${viewBoxHeight}px`;

        const offsetAdjustment = 10; // Adjust this value to fine-tune the starting position
        wavyLinePath.parentElement.parentElement.style.left = `${firstDotOffset + offsetAdjustment}px`;

        const pathData = `
            M0,50
            C${viewBoxWidth / 6},200 ${viewBoxWidth / 3},-50 ${viewBoxWidth / 2},50
            S${(5 * viewBoxWidth) / 6},150 ${viewBoxWidth},50
        `;
        wavyLinePath.setAttribute('d', pathData);
    }

    // Function to center the dot and trigger a click
    function centerDot(index) {
        const dotWrapper = dotWrappers[index];
        const dot = dotWrapper.querySelector('.dot');
        const dotPosition = dotWrapper.getBoundingClientRect();
        const containerCenter = window.innerWidth / 2;

        const scrollOffset = dotPosition.left - containerCenter + (dotPosition.width / 2);

        scrollAmount -= scrollOffset;
        lineContainer.style.transform = `translateX(${scrollAmount}px)`;

        // Trigger the click event to show the info
        setTimeout(() => {
            dot.click();
        }, 300); // Adjust timing as needed to match the scroll transition duration
    }

    nextButton.addEventListener('click', function() {
        if (currentIndex < dotWrappers.length - 1) {
            currentIndex++;
            centerDot(currentIndex);
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            centerDot(currentIndex);
        }
    });

    // Handle dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const parentWrapper = this.parentElement;

            if (parentWrapper.classList.contains('active')) {
                // If active, remove the class to trigger hide animation
                parentWrapper.classList.remove('active');
                this.classList.remove('clickado');
            } else {
                // Remove active class and clickado class from all dot-wrappers
                dots.forEach(dot => {
                    dot.parentElement.classList.remove('active');
                    dot.classList.remove('clickado');
                });

                // Add active class to the clicked dot's parent (dot-wrapper)
                parentWrapper.classList.add('active');
                this.classList.add('clickado');
            }
        });
    });

    // Initial centering and activation of the first dot
    setTimeout(() => {
        centerDot(currentIndex);
    }, 100); // Delay to ensure the DOM is fully rendered
});
