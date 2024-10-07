$(document).ready(function() {
    let currentSlide = 0;
    let totalSlides = $('.slide').length;
    let timer;
    let seconds = 0;

    // Function to show the current slide
    function showSlide(index) {
        $('.slide').hide();
        $($('.slide')[index]).show();
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Navigate to the next slide
    $('#next').click(function() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    });

    // Navigate to the previous slide
    $('#prev').click(function() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    });

    // Start the timer for automatic slide change
    $('#start').click(function() {
        clearInterval(timer); // Clear any existing timers
        seconds = 0; // Reset seconds
        $('#time').text(seconds); // Reset displayed time
        showSlide(currentSlide); // Show current slide

        timer = setInterval(function() {
            seconds++;
            $('#time').text(seconds);
            
            // Change slide every 5 seconds
            if (seconds % 5 === 0) {
                if (currentSlide < totalSlides - 1) {
                    currentSlide++;
                } else {
                    currentSlide = 0; // Loop back to the first slide
                }
                showSlide(currentSlide);
            }
        }, 1000);
    });

    // Make text bold on button click
    $('#boldButton').click(function() {
        document.execCommand('bold');
    });

    // Make text italic on button click
    $('#italicButton').click(function() {
        document.execCommand('italic');
    });

    // New Slide Functionality
    $('#newSlide').click(function() {
        const newSlideCount = totalSlides + 1;
        const newSlide = `
            <div class="slide" id="slide${newSlideCount}" contenteditable="true" style="display: none;">
                <h1>Slide ${newSlideCount} Title</h1>
                <p>This is slide ${newSlideCount} content. Click to edit.</p>
            </div>
        `;
        $('.slides').append(newSlide);
        totalSlides++; // Update total slides count
        currentSlide = totalSlides - 1; // Set current slide to the new slide
        showSlide(currentSlide); // Show the new slide
    });

    // Table, Picture, Screenshot, Date, Time Functionality (Placeholders)
    $('#insertTable').click(function() {
        alert("Table insertion functionality can be implemented here.");
    });

    $('#insertPicture').click(function() {
        alert("Picture insertion functionality can be implemented here.");
    });

    $('#insertScreenshot').click(function() {
        alert("Screenshot functionality can be implemented here.");
    });

    $('#insertDate').click(function() {
        const date = new Date().toLocaleDateString();
        document.execCommand('insertText', false, date);
    });

    $('#insertTime').click(function() {
        const time = new Date().toLocaleTimeString();
        document.execCommand('insertText', false, time);
    });
});
document.getElementById('underlineButton').addEventListener('click', function() {
    document.execCommand('underline');
});