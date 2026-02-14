//V32  

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // RANDOM IMG
    const images = [
        'imgs/ver/VER_1.jpg',
        'imgs/ver/VER_2.jpg',
        'imgs/ver/VER_3.jpg',
        'imgs/ver/VER_4.jpg',
        'imgs/ver/VER_5.jpg',
        'imgs/ver/VER_6.jpg',
        'imgs/ver/VER_7.jpg',
        'imgs/ver/VER_8.jpg',
        'imgs/ver/VER_9.jpg',
        'imgs/ver/VER_10.jpg',
        'imgs/ver/VER_11.jpg',
        'imgs/ver/VER_12.jpg',
        'imgs/ver/VER_13.jpg',
        'imgs/ver/VER_14.jpg',
        'imgs/ver/VER_15.jpg',
        'imgs/ver/VER_16.jpg',
        'imgs/ver/VER_17.jpg',
        'imgs/ver/VER_18.jpg'
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('random-image').src = randomImage;

    // Mobile Image
    const mobileImages = [
        'imgs/hor/HOR_1.jpg',
        'imgs/hor/HOR_2.jpg',
        'imgs/hor/HOR_3.jpg',
        'imgs/hor/HOR_4.jpg',
        'imgs/hor/HOR_5.jpg',
        'imgs/hor/HOR_6.jpg',
        'imgs/hor/HOR_7.jpg',
        'imgs/hor/HOR_8.jpg'
    ];
    const mobileRandomIndex = Math.floor(Math.random() * mobileImages.length);
    const mobileRandomImage = mobileImages[mobileRandomIndex];
    document.getElementById('random-image_mob').src = mobileRandomImage;







// COLOR HOVER
const bookElements = document.querySelectorAll('.BOOKB');
const bookOptions = document.querySelectorAll('.BOOK_OPT');

function applyHoverStyles(bookId) {
    const dayElement = document.querySelector(`#${bookId.replace('BOOKB', 'DAYB')}`);
    const infoElement = document.querySelector(`#${bookId.replace('BOOKB', 'INFOB')}`);

    if (dayElement) {
        switch (bookId) {
            case 'BOOKB_1':
            case 'BOOKB_11':
                dayElement.style.color = '#2682ff';
                if (infoElement) {
                    infoElement.style.backgroundColor = '#2682ff';
                    infoElement.querySelectorAll('a, p, span, h2').forEach(el => {
                        el.style.color = 'white';
                    });
                }
                break;
            case 'BOOKB_2':
            case 'BOOKB_22':
                dayElement.style.color = '#009c3b';
                if (infoElement) {
                    infoElement.style.backgroundColor = '#009c3b';
                    infoElement.querySelectorAll('a, p, span, h2').forEach(el => {
                        el.style.color = 'white';
                    });
                }
                break;
            case 'BOOKB_3':
            case 'BOOKB_33':
                dayElement.style.color = '#ff2e47';
                if (infoElement) {
                    infoElement.style.backgroundColor = '#ff2e47';
                    infoElement.querySelectorAll('a, p, span, h2').forEach(el => {
                        el.style.color = 'white';
                    });
                }
                break;
            case 'BOOKB_44':
                dayElement.style.color = 'orange';
                if (infoElement) {
                    infoElement.style.backgroundColor = 'orange';
                    infoElement.querySelectorAll('a, p, span, h2').forEach(el => {
                        el.style.color = 'white';
                    });
                }
                break;
            case 'BOOKB_4':
                dayElement.style.color = '#a3bfe3';
                if (infoElement) {
                    infoElement.style.backgroundColor = '#a3bfe3';
                    infoElement.querySelectorAll('a, p, span, h2').forEach(el => {
                        el.style.color = 'white';
                    });
                }
                break;
        }
    }
}

function clearHoverStyles(bookId) {
    const dayElement = document.querySelector(`#${bookId.replace('BOOKB', 'DAYB')}`);
    const infoElement = document.querySelector(`#${bookId.replace('BOOKB', 'INFOB')}`);

    if (dayElement) {
        dayElement.style.color = '';
    }
    
    if (infoElement) {
        infoElement.style.backgroundColor = '';
        infoElement.querySelectorAll('a, p, span, h2').forEach(el => {
            el.style.color = '';
        });
    }
}

bookElements.forEach(book => {
    const bookId = book.id;
    // Skip hover behavior for private events (BOOKB_4)
    if (bookId === 'BOOKB_4') {
        return;
    }
    
    book.addEventListener('mouseenter', (event) => {
        const bookId = event.currentTarget.id;
        applyHoverStyles(bookId);
    });

    book.addEventListener('mouseleave', (event) => {
        const bookId = event.currentTarget.id;
        clearHoverStyles(bookId);
    });
});

// Add event listeners for .BOOK_OPT
bookOptions.forEach(option => {
    const bookBElement = option.closest('.eventB').querySelector('.BOOKB');
    if (!bookBElement) return;
    const bookId = bookBElement.id; // Get the corresponding BOOKB id
    
    // Skip hover behavior for private events (BOOKB_4)
    if (bookId === 'BOOKB_4') {
        return;
    }

    option.addEventListener('mouseenter', () => {
        applyHoverStyles(bookId);
    });

    option.addEventListener('mouseleave', () => {
        clearHoverStyles(bookId);
    });
});







// EQUAL TITLE HEIGHTS
function synchronizeTitleBHeights() {
    const titleBs = document.querySelectorAll('.TITLEB');
    let maxHeight = 0;

    titleBs.forEach(titleB => {
        titleB.style.height = 'auto';
        maxHeight = Math.max(maxHeight, titleB.offsetHeight);
    });

    titleBs.forEach(titleB => {
        titleB.style.height = `${maxHeight}px`;
    });
}

window.addEventListener('resize', synchronizeTitleBHeights);
window.addEventListener('load', synchronizeTitleBHeights);

// EQUAL WHERE HEIGHTS
function synchronizeWhereBHeights() {
    const whereBs = document.querySelectorAll('.WHEREB');
    let maxHeight = 0;

    whereBs.forEach(whereB => {
        whereB.style.height = 'auto';
        maxHeight = Math.max(maxHeight, whereB.offsetHeight);
    });

    whereBs.forEach(whereB => {
        whereB.style.height = `${maxHeight}px`;
    });
}

window.addEventListener('resize', synchronizeWhereBHeights);
window.addEventListener('load', synchronizeWhereBHeights);

// Scroll Event
const scrollButton = document.getElementById('scroll');
if (scrollButton) {
    scrollButton.addEventListener('click', function() {
        const container = document.querySelector('#archive_EVENTS');
        container.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
}









//EQUAL FOOTERS
function adjustFooterHeight() {
const footer = document.getElementById('footer_LX');
const archiveBtn = document.getElementById('ARCHIVE_BTN');

if (footer && archiveBtn) {
    // Get the height of the ARCHIVE_BTN and add 1px
    const archiveHeight = archiveBtn.offsetHeight + 2;
    // Set the footer height to match
    footer.style.height = `${archiveHeight}px`;
    }
}

// Call the function on page load
window.onload = adjustFooterHeight;

// Call the function on window resize
window.onresize = adjustFooterHeight;    



//SINGLE EVENT
const events = document.querySelectorAll('#EVENTS .eventB');
const eventsContainer = document.getElementById('EVENTS');

if (events.length === 1) {
  eventsContainer.classList.add('single-event');
}





// BOOKING OPTIONS
// Function to handle booking options toggle
function setupBookingToggle(bookId, bookOptId) {
    const bookButton = document.getElementById(bookId);
    const bookOptions = document.getElementById(bookOptId);

    // If there's a booking button but no booking options,
    // it means we only have one purchasable link. Just skip the toggle logic.
    if (bookButton && !bookOptions) {
        return;
    }

    if (bookButton && bookOptions) {
        bookButton.addEventListener('click', function() {
            console.log(`${bookId} clicked`);
            bookOptions.style.display = 'block';
            this.style.display = 'none';
        });

        bookOptions.addEventListener('click', function() {
            console.log(`${bookOptId} clicked`);
            bookOptions.style.display = 'none';
            bookButton.style.display = 'flex';
        });
    }
}


// Desktop BOOKB elements
setupBookingToggle('BOOKB_1', 'BOOK_OPT_1');
setupBookingToggle('BOOKB_2', 'BOOK_OPT_2');
setupBookingToggle('BOOKB_3', 'BOOK_OPT_3');
setupBookingToggle('BOOKB_11', 'BOOK_OPT_11');
setupBookingToggle('BOOKB_22', 'BOOK_OPT_22');
setupBookingToggle('BOOKB_33', 'BOOK_OPT_33');
setupBookingToggle('BOOKB_44', 'BOOK_OPT_44');

// Mobile BOOK_mob elements
setupBookingToggle('BOOK_mob_1', 'BOOK_OPT_mob_1');
setupBookingToggle('BOOK_mob_2', 'BOOK_OPT_mob_2');
setupBookingToggle('BOOK_mob_3', 'BOOK_OPT_mob_3');
setupBookingToggle('BOOK_mob_11', 'BOOK_OPT_mob_11');
setupBookingToggle('BOOK_mob_22', 'BOOK_OPT_mob_22');
setupBookingToggle('BOOK_mob_33', 'BOOK_OPT_mob_33');
setupBookingToggle('BOOK_mob_44', 'BOOK_OPT_mob_44');



//ABOUT SECTION
const aboutLink = document.getElementById('about-link');
const aboutText = document.getElementById('about-text');

if (aboutLink && aboutText) {
    aboutLink.addEventListener('click', function () {
        const isVisible = aboutText.style.display === 'block';
        aboutText.style.display = isVisible ? 'none' : 'block';
        leaderboardText.style.display = 'none'; 
    });
}

const closeBtn = document.getElementById('close-about');
const about = document.getElementById('about-text');

if (closeBtn && about) {
    closeBtn.addEventListener('click', () => {
        about.style.display = 'none';
    });
}

//mobile
const aboutLinkMob = document.querySelector('#about-link-mob a');
const aboutOverlayMob = document.getElementById('about-text-mob');
const closeAboutMob = document.getElementById('close-about-mob');

if (aboutLinkMob && aboutOverlayMob && closeAboutMob) {
  aboutLinkMob.addEventListener('click', () => {
    aboutOverlayMob.style.display = 'flex';
    leaderboardOverlayMob.style.display = 'none'; 
    document.body.style.overflow = 'hidden';
  });

  closeAboutMob.addEventListener('click', () => {
    aboutOverlayMob.style.display = 'none';
    document.body.style.overflow = '';
  });
}


// LEADERBOARD SECTION
const leaderboardLink = document.getElementById('leaderboard-link');
const leaderboardText = document.getElementById('leaderboard-text');

if (leaderboardLink && leaderboardText) {
    leaderboardLink.addEventListener('click', function () {
        const isVisible = leaderboardText.style.display === 'block';
        leaderboardText.style.display = isVisible ? 'none' : 'block';
        aboutText.style.display = 'none'; // 👈 added line
    });
}

const closeLeaderboardBtn = document.getElementById('close-leaderboard');
const leaderboard = document.getElementById('leaderboard-text');

if (closeLeaderboardBtn && leaderboard) {
    closeLeaderboardBtn.addEventListener('click', () => {
        leaderboard.style.display = 'none';
    });
}

//mobile
const leaderboardLinkMob = document.querySelector('#leaderboard-link-mob a');
const leaderboardOverlayMob = document.getElementById('leaderboard-text-mob');
const closeLeaderboardMob = document.getElementById('close-leaderboard-mob');

if (leaderboardLinkMob && leaderboardOverlayMob && closeLeaderboardMob) {
  leaderboardLinkMob.addEventListener('click', () => {
    leaderboardOverlayMob.style.display = 'flex';
    aboutOverlayMob.style.display = 'none'; // 👈 added line
    document.body.style.overflow = 'hidden';
  });

  closeLeaderboardMob.addEventListener('click', () => {
    leaderboardOverlayMob.style.display = 'none';
    document.body.style.overflow = '';
  });
}






// LEADERBOARD NAME LENGTH ADJUSTMENT
function adjustLeaderboardNameSizes() {
    const nameElements = document.querySelectorAll('.podium-person h2');
    
    nameElements.forEach(nameElement => {
        // Reset all size classes first
        nameElement.classList.remove('long-name', 'medium-name', 'small-name', 'tiny-name');
        nameElement.style.fontSize = ''; // Reset inline styles
        
        // Get the container and its dimensions
        const container = nameElement.closest('.podium-person');
        const containerWidth = container.offsetWidth;
        const isMobile = window.innerWidth <= 800;
        
        // Account for padding and margins
        const availableWidth = containerWidth - 22; // 11px padding-left + some margin
        
        // Get original font size
        const computedStyle = window.getComputedStyle(nameElement);
        const baseFontSize = isMobile ? 15 : 18;
        
        // Get date element
        const dateElement = container.querySelector('.leaderboard-date');
        const dateText = dateElement ? dateElement.textContent : '';
        const baseDateFontSize = 12;
        const baseNameFontSize = isMobile ? 15 : 18;
        const maxContainerHeight = isMobile ? 40 : 50; // CSS max-height
        
        // Function to test if text fits width-wise
        function testFontSizeWidth(fontSize) {
            const tempElement = document.createElement('span');
            tempElement.style.visibility = 'hidden';
            tempElement.style.position = 'absolute';
            tempElement.style.whiteSpace = 'nowrap';
            tempElement.style.fontSize = fontSize + 'px';
            tempElement.style.fontFamily = computedStyle.fontFamily;
            tempElement.style.fontWeight = computedStyle.fontWeight;
            tempElement.style.textTransform = computedStyle.textTransform;
            tempElement.textContent = nameElement.textContent;
            
            document.body.appendChild(tempElement);
            const textWidth = tempElement.offsetWidth;
            document.body.removeChild(tempElement);
            
            return textWidth <= availableWidth;
        }
        
        // Function to test if ACTUAL rendered container fits height
        function testActualHeight(nameFontSize, dateFontSize) {
            // Apply font sizes temporarily to measure actual height
            const originalNameFontSize = nameElement.style.fontSize;
            const originalDateFontSize = dateElement ? dateElement.style.fontSize : '';
            
            nameElement.style.fontSize = nameFontSize + 'px';
            if (dateElement) {
                dateElement.style.fontSize = dateFontSize + 'px';
            }
            
            // Force reflow
            container.offsetHeight;
            
            // Measure actual rendered height
            const actualHeight = container.scrollHeight;
            
            // Restore original sizes
            nameElement.style.fontSize = originalNameFontSize;
            if (dateElement) {
                dateElement.style.fontSize = originalDateFontSize;
            }
            
            return actualHeight <= maxContainerHeight;
        }
        
        // Find the largest font size that fits both width and height
        let finalNameFontSize = baseNameFontSize;
        let finalDateFontSize = baseDateFontSize;
        let foundFit = false;
        
        // Start from base size and shrink until it fits
        for (let testNameSize = baseNameFontSize; testNameSize >= 7; testNameSize -= 0.5) {
            // Calculate proportional date size
            const dateSizeRatio = testNameSize / baseNameFontSize;
            const testDateSize = Math.max(7, Math.round(baseDateFontSize * dateSizeRatio));
            
            // Test both width and actual rendered height
            if (testFontSizeWidth(testNameSize) && testActualHeight(testNameSize, testDateSize)) {
                finalNameFontSize = testNameSize;
                finalDateFontSize = testDateSize;
                foundFit = true;
                break;
            }
        }
        
        // If we didn't find a fit, use minimum size
        if (!foundFit) {
            finalNameFontSize = 7;
            finalDateFontSize = 7;
        }
        
        // Apply the font sizes
        if (finalNameFontSize < baseNameFontSize || (dateElement && dateText)) {
            nameElement.style.fontSize = finalNameFontSize + 'px';
            if (dateElement) {
                dateElement.style.fontSize = finalDateFontSize + 'px';
            }
        } else {
            // Reset to default if no shrinking needed
            nameElement.style.fontSize = '';
            if (dateElement) {
                dateElement.style.fontSize = '';
            }
        }
    });
}

// Helper function to run adjustment with proper delays for Safari
function runAdjustment() {
    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(function() {
        setTimeout(function() {
            adjustLeaderboardNameSizes();
            // Run again after a short delay to catch any Safari rendering quirks
            setTimeout(adjustLeaderboardNameSizes, 100);
        }, 50);
    });
}

// Run the function when leaderboard is shown
if (leaderboardLink) {
    leaderboardLink.addEventListener('click', function() {
        runAdjustment();
    });
}

// Run for mobile leaderboard too
if (leaderboardLinkMob) {
    leaderboardLinkMob.addEventListener('click', function() {
        runAdjustment();
    });
}

// Run on window resize in case layout changes
let resizeTimeout;
window.addEventListener('resize', function() {
    // Debounce resize events for better performance
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Only run if leaderboard is visible
        if (leaderboardText && leaderboardText.style.display === 'block') {
            runAdjustment();
        }
        if (leaderboardOverlayMob && leaderboardOverlayMob.style.display === 'flex') {
            runAdjustment();
        }
    }, 100);
});

// Run on initial load in case leaderboard is already visible
setTimeout(runAdjustment, 200);

});
