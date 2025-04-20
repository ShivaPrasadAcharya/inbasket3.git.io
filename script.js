// DOM Element References
const filterButton = document.getElementById('filterButton');
const filterPanel = document.getElementById('filterPanel');
const itemFilter = document.getElementById('itemFilter');

// Initialize the letter pad
document.addEventListener('DOMContentLoaded', function() {
    // Populate filter dropdown with options
    populateFilterOptions();
    
    // Show first letter by default
    if (letterData.length > 0) {
        displayLetter(letterData[0]);
    }
    
    // Set up event listeners
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    // Toggle filter panel
    filterButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        filterPanel.classList.toggle('show');
    });
    
    // Close filter panel when clicking outside
    document.addEventListener('click', function(event) {
        if (!filterPanel.contains(event.target) && event.target !== filterButton) {
            filterPanel.classList.remove('show');
        }
    });
    
    // Handle filter selection
    itemFilter.addEventListener('change', function() {
        const selectedValue = this.value;
        
        if (selectedValue === 'all') {
            // Show the first letter when "All" is selected
            if (letterData.length > 0) {
                displayLetter(letterData[0]);
            }
        } else {
            // Find and display the selected letter
            const selectedLetter = letterData.find(letter => letter.itemNo === selectedValue);
            if (selectedLetter) {
                displayLetter(selectedLetter);
            }
        }
    });
}

// Populate filter options from data
function populateFilterOptions() {
    // Clear existing options
    itemFilter.innerHTML = '';
    
    // Add the default "All" option
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'All Letters';
    itemFilter.appendChild(allOption);
    
    // Add options from letterData
    letterData.forEach((letter, index) => {
        const option = document.createElement('option');
        option.value = letter.itemNo || `item_${index + 1}`;
        option.textContent = letter.itemNo ? `Item No: ${letter.itemNo}` : `Item ${index + 1}`;
        itemFilter.appendChild(option);
    });
    
    // Log to console to verify filter is populated
    console.log('Filter options populated:', itemFilter.options.length);
}

// Display letter data in the letter pad
function displayLetter(letter) {
    // Helper function to handle array data with line breaks
    const formatArrayContent = (elementId, arrayData) => {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        if (arrayData && arrayData.length > 0) {
            // Clear any existing content
            element.innerHTML = '';
            
            // Add each item with line breaks
            arrayData.forEach((item, index) => {
                const div = document.createElement('div');
                div.textContent = item;
                element.appendChild(div);
            });
            
            element.classList.remove('empty');
        } else {
            element.innerHTML = '';
            element.classList.add('empty');
        }
    };
    
    // Helper function to set content or hide if empty
    const setContentOrHide = (elementId, content) => {
        const element = document.getElementById(elementId);
        if (element) {
            if (content && content !== '') {
                element.textContent = content;
                element.classList.remove('empty');
            } else {
                element.textContent = '';
                element.classList.add('empty');
            }
        }
    };
    
    // Set item number
    const itemNoElement = document.getElementById('itemNo');
    if (letter.itemNo && letter.itemNo !== '') {
        itemNoElement.textContent = letter.itemNo;
        itemNoElement.classList.remove('empty');
    } else {
        itemNoElement.textContent = '';
        itemNoElement.classList.add('empty');
    }
    
    // Set basic fields without labels
    setContentOrHide('department', letter.department);
    setContentOrHide('mainOffice', letter.mainOffice);
    setContentOrHide('entryNo', letter.entryNo);
    setContentOrHide('entryDate', letter.entryDate);
    setContentOrHide('dispatchedNo', letter.dispatchedNo);
    setContentOrHide('caseNo', letter.caseNo);
    setContentOrHide('date', letter.date);
    setContentOrHide('subject', letter.subject);
    
    // Handle array data with line breaks
    formatArrayContent('officeName1', letter.officeName1);
    formatArrayContent('officeName2', letter.officeName2);
    formatArrayContent('contactInfo', letter.contactInfo);
    
    // Handle addressedTo (could be string or array)
    if (Array.isArray(letter.addressedTo)) {
        formatArrayContent('addressedTo', letter.addressedTo);
    } else {
        setContentOrHide('addressedTo', letter.addressedTo);
    }
    
    // Set content
    document.getElementById('content').textContent = letter.content || '';
    
    // Handle images
    const imageGallery = document.getElementById('imageGallery');
    imageGallery.innerHTML = '';
    if (letter.images && letter.images.length > 0) {
        letter.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.className = 'letter-image';
            img.alt = 'Letter attachment';
            imageGallery.appendChild(img);
        });
        imageGallery.classList.remove('empty');
    } else {
        imageGallery.classList.add('empty');
    }
    
    // Handle signatures
    if (letter.signature1) {
        document.getElementById('signature1').textContent = letter.signature1.sign || '';
        document.getElementById('signatureName1').textContent = letter.signature1.name || '';
        document.getElementById('signaturePosition1').textContent = letter.signature1.position || '';
    } else {
        document.getElementById('signature1').textContent = '';
        document.getElementById('signatureName1').textContent = '';
        document.getElementById('signaturePosition1').textContent = '';
    }
    
    if (letter.signature2) {
        document.getElementById('signature2').textContent = letter.signature2.sign || '';
        document.getElementById('signatureName2').textContent = letter.signature2.name || '';
        document.getElementById('signaturePosition2').textContent = letter.signature2.position || '';
    } else {
        document.getElementById('signature2').textContent = '';
        document.getElementById('signatureName2').textContent = '';
        document.getElementById('signaturePosition2').textContent = '';
    }
    
    // Set tokadesh and bodartha list (now in post-signature section)
    setContentOrHide('tokadesh', letter.tokadesh);
    
    // Handle bodartha list in post-signature section
    const bodharthaList = document.getElementById('bodharthaList');
    bodharthaList.innerHTML = '';
    const bodarthaSectionContainer = document.getElementById('bodarthaSectionContainer');
    
    if (letter.bodharthaList && letter.bodharthaList.length > 0 && letter.bodharthaList[0] !== '') {
        letter.bodharthaList.forEach(item => {
            if (item) {
                const li = document.createElement('li');
                li.textContent = item;
                bodharthaList.appendChild(li);
            }
        });
        bodarthaSectionContainer.classList.remove('empty');
    } else {
        bodarthaSectionContainer.classList.add('empty');
    }
    
    // Set footer information (without tokadesh)
    setContentOrHide('footerPhone', letter.footerPhone);
    setContentOrHide('footerEmail', letter.footerEmail);
}