/* Flatpickr JS */
const event = [
    {
        id: 1,
        title: "Music Concert",
        date: "2025-04-15",
        time: "7:00 PM - 10:00 PM",
        location: "City Concert Hall",
        description: "Join us for an evening of classical music performed by the city orchestra featuring works by Mozart and Beethoven.",
        available: true,
        special: true
    },
    {
        id: 2,
        title: "Tech Seminar",
        date: "2025-04-17",
        time: "1:00 PM - 5:00 PM",
        location: "Innovation Center",
        description: "Learn about the latest trends in artificial intelligence and machine learning from industry experts.",
        available: false,
        special: true
    },
    {
        id: 3,
        title: "Art Exhibition",
        date: "2025-04-18",
        time: "10:00 AM - 6:00 PM",
        location: "Downtown Gallery",
        description: "Explore contemporary art from local and international artists in this special exhibition.",
        available: true,
        special: true
    },
    {
        id: 4,
        title: "Food Festival",
        date: "2025-04-20",
        time: "11:00 AM - 8:00 PM",
        location: "Central Park",
        description: "Sample cuisines from around the world with over 50 food vendors, cooking demonstrations, and entertainment.",
        available: true,
        special: true
    },
    {
        id: 5,
        title: "Business Workshop",
        date: "2025-04-22",
        time: "9:00 AM - 4:00 PM",
        location: "Business Center",
        description: "Develop your entrepreneurial skills in this comprehensive workshop led by successful business leaders.",
        available: true,
        special: true
    },
    {
        id: 6,
        title: "Film Screening",
        date: "2025-04-25",
        time: "7:30 PM - 10:00 PM",
        location: "Cinema Plaza",
        description: "Special screening of award-winning independent films followed by Q&A with directors.",
        available: false,
        special: true
    },
    {
        id: 7,
        title: "Live Concert",
        date: "2025-04-02",
        time: "7:30 PM - 10:00 PM",
        location: "Mumbai Arena",
        description: "Experience electrifying music and unforgettable performances in one thrilling night!",
        available: true,
        special: true 
    },
    {
        id: 8,
        title: "Wedding Expo",
        date: "2025-04-27",
        time: "7:30 PM - 10:00 PM",
        location: "Delhi Palace Ground",
        description: "Discover top wedding trends, vendors, and inspiration all in one place.",
        available: true,
        special: true 
    },
    {
        id: 9,
        title: "Startup Meetup",
        date: "2025-05-05",
        time: "7:30 PM - 10:00 PM",
        location: "Bangalore Convention Center",
        description: "Connect, collaborate, and grow with innovators and entrepreneurs.",
        available: true,
        special: true 
    },
    {
        id: 10,
        title: "Birthday Party",
        date: "2025-05-25",
        time: "7:30 PM - 10:00 PM",
        location: "Kolkata Retaurant",
        description: "Celebrate with fun, food, and unforgettable memories!",
        available: false,
        special: true 
    },
    {
        id: 11,
        title: "Food Festival",
        date: "2025-05-28",
        time: "7:30 PM - 10:00 PM",
        location: "Bangalore Park",
        description: "Savor diverse flavors and culinary delights from around the world!",
        available: true,
        special: true
    },
    {
        id: 12,
        title: "Gaming",
        date: "2025-06-09",
        time: "7:30 PM - 10:00 PM",
        location: "Delhi Tech Hall",
        description: "Dive into action-packed adventures and competitive fun!",
        available: false,
        special: true
    },
    {
        id: 13,
        title: "Marathon Running",
        date: "2025-06-14",
        time: "7:30 PM - 10:00 PM",
        location: "Pune Main Road",
        description: "Challenge your limits in an exhilarating long-distance race!",
        available: true,
        special: true
    },
    {
        id: 14,
        title: "Trade Fair",
        date: "2025-08-05",
        time: "7:30 PM - 10:00 PM",
        location: "Kolkata Bada Maidan",
        description: "Explore global products, innovations, and business opportunities under one roof!",
        available: true,
        special: true
    },
    {
        id: 15,
        title: "Fashion Shows",
        date: "2025-12-26",
        time: "7:30 PM - 10:00 PM",
        location: "Bangalore Hall",
        description: "Witness the latest trends and stunning styles on the runway!",
        available: true,
        special: true
    },
    {
        id: 16,
        title: "Car Show",
        date: "2025-05-08",
        time: "7:30 PM - 10:00 PM",
        location: "Hyderabad State Road",
        description: "Discover cutting-edge designs and classic rides in a showcase of automotive excellence!",
        available: true,
        special: true
    },
    {
        id: 17,
        title: "Teach Talks",
        date: "2026-01-06",
        time: "7:30 PM - 10:00 PM",
        location: "Bangalore Convention Center",
        description: "Engage with experts sharing innovative ideas and inspiring educational insights!",
        available: true,
        special: true
    }
];

// Calendar variables
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Ticket prices and quantities
const ticketPrices = {
    general: 2200.00,
    vip: 7500.00
};

const quantities = {
    general: 0,
    vip: 0
};

// Function to generate the calendar
function generateCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    
    const endDate = new Date(lastDay);
    if (endDate.getDay() !== 6) {
        endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    }
    
    // Update month and year display
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    document.getElementById('month-year').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';
    
    let date = new Date(startDate);
    while (date <= endDate) {
        let row = document.createElement('tr');
        
        for (let i = 0; i < 7; i++) {
            let cell = document.createElement('td');
            let dateNumber = document.createElement('div');
            dateNumber.className = 'date-number';
            dateNumber.textContent = date.getDate();
            cell.appendChild(dateNumber);
            
            const dateStr = formatDate(date);
            const today = new Date();
            
            // Check if date is in current month
            if (date.getMonth() !== currentMonth) {
                cell.classList.add('inactive');
            }
            
            // Check if date is today
            if (date.toDateString() === today.toDateString()) {
                cell.classList.add('today');
            }
            
            // Check for events on this date
            const dateEvent = event.filter(event => event.date === dateStr);
            if (dateEvent.length > 0) {
                if (dateEvent.some(event => event.special)) {
                    cell.classList.add('special-event');
                }
                
                if (dateEvent.some(event => event.available)) {
                    cell.classList.add('available');
                } else {
                    cell.classList.add('booked');
                }
                
                // Add event indicators (dots)
                const indicator = document.createElement('div');
                indicator.className = 'event-indicator';
                
                // Limit to showing at most 3 dots
                const dotsToShow = Math.min(dateEvent.length, 3);
                for (let j = 0; j < dotsToShow; j++) {
                    const dot = document.createElement('div');
                    dot.className = 'event-dot';
                    indicator.appendChild(dot);
                }
                
                cell.appendChild(indicator);
                
                // Add hover and click functionality
                cell.addEventListener('mouseover', function(e) {
                    showEventTooltip(e, dateEvent);
                });
                
                cell.addEventListener('mouseout', function() {
                    document.getElementById('event-tooltip').style.display = 'none';
                });
                
                cell.addEventListener('click', function() {
                    selectDate(dateStr, dateEvent[0]);
                });
            } else if (date.getMonth() === currentMonth) {
                // Only make dates in the current month available
                cell.classList.add('available');
            }
            
            // Store the date string as a data attribute
            cell.dataset.date = dateStr;
            
            row.appendChild(cell);
            
            // Move to next day
            date.setDate(date.getDate() + 1);
        }
        
        calendarBody.appendChild(row);
    }
}

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Parse YYYY-MM-DD to date object
function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
}

// Show event tooltip on hover
function showEventTooltip(e, event) {
    const tooltip = document.getElementById('event-tooltip');
    tooltip.innerHTML = '';
    
    event.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        
        if (index > 0) {
            const divider = document.createElement('hr');
            divider.style.margin = '5px 0';
            divider.style.opacity = '0.3';
            tooltip.appendChild(divider);
        }
        
        eventDiv.innerHTML = `
            <div class="event-tooltip-title">${event.title}</div>
            <div class="event-tooltip-time">${event.time}</div>
            <div class="event-tooltip-location">${event.location}</div>
        `;
        
        tooltip.appendChild(eventDiv);
    });
    
    // Position the tooltip
    const rect = e.target.getBoundingClientRect();
    tooltip.style.display = 'block';
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
}

// Select a date and display event details
function selectDate(dateStr, event) {
    // Remove selected class from all cells
    document.querySelectorAll('#calendar-body td').forEach(cell => {
        cell.classList.remove('selected');
    });
    
    // Add selected class to clicked cell
    document.querySelector(`td[data-date="${dateStr}"]`).classList.add('selected');
    
    // Update time dropdown
    const timeSelect = document.getElementById('time');
    timeSelect.disabled = false;
    timeSelect.innerHTML = '';
    
    if (event) {
        // Display event details
        document.getElementById('event-title').textContent = event.title;
        document.getElementById('event-date').textContent = formatDisplayDate(parseDate(dateStr));
        document.getElementById('event-time').textContent = event.time;
        document.getElementById('event-location').textContent = event.location;
        document.getElementById('event-description').textContent = event.description;
        
        // Show the event details section
        document.getElementById('event-details').style.display = 'block';
        
        // Add event times to dropdown
        const option = document.createElement('option');
        option.value = event.time;
        option.textContent = event.time;
        timeSelect.appendChild(option);
    } else {
        // Generate some available times
        const times = ['9:00 AM', '10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];
        times.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
        
        // Hide event details since there's no event
        document.getElementById('event-details').style.display = 'none';
    }
    
    // Reset quantities
    resetQuantities();
}

// Format date for display (e.g., April 15, 2025)
function formatDisplayDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Update ticket quantity
function updateQuantity(type, change) {
    // Get current quantity
    const currentQuantity = quantities[type];
    const newQuantity = Math.max(0, currentQuantity + change);
    
    // Update quantity
    quantities[type] = newQuantity;
    document.getElementById(`${type}-quantity`).value = newQuantity;
    
    // Update summary
    updateSummary();
}

// Reset all quantities to zero
function resetQuantities() {
    Object.keys(quantities).forEach(type => {
        quantities[type] = 0;
        document.getElementById(`${type}-quantity`).value = 0;
    });
    
    // Update summary
    updateSummary();
}

// Update booking summary
function updateSummary() {
    const summaryEl = document.getElementById('summary-items');
    summaryEl.innerHTML = '';
    
    let total = 0;
    let hasItems = false;
    
    // Add items to summary
    Object.keys(quantities).forEach(type => {
        const quantity = quantities[type];
        if (quantity > 0) {
            hasItems = true;
            const price = ticketPrices[type];
            const subtotal = price * quantity;
            total += subtotal;
            
            const itemName = type.charAt(0).toUpperCase() + type.slice(1); // Capitalize
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'summary-row';
            itemDiv.innerHTML = `
                <div>${itemName} Ticket x${quantity}</div>
                <div>₹${subtotal.toFixed(2)}</div>
            `;
            summaryEl.appendChild(itemDiv);
        }
    });
    
    // If no items, show a message
    if (!hasItems) {
        const noItemsDiv = document.createElement('div');
        noItemsDiv.className = 'summary-row';
        noItemsDiv.innerHTML = `
            <div>No tickets selected</div>
            <div></div>
        `;
        summaryEl.appendChild(noItemsDiv);
    }
    
    // Update total
    document.getElementById('total-amount').textContent = `₹${total.toFixed(2)}`;
}

// Initialize the calendar
document.addEventListener('DOMContentLoaded', function() {
    // Initialize calendar
    generateCalendar();
    
    // Add event listeners for month navigation
    document.getElementById('prev-month').addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar();
    });
    
    document.getElementById('next-month').addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar();
    });
    
    // Add event listener for booking summary button
    document.getElementById('summary-btn').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (!name || !email) {
            alert('Please fill in your name and email address.');
            return;
        }
        
        const selectedDateCell = document.querySelector('#calendar-body td.selected');
        if (!selectedDateCell) {
            alert('Please select a date on the calendar.');
            return;
        }
        
        let message = `Booking Summary\n\n`;
        message += `Name: ${name}\n`;
        message += `Email: ${email}\n`;
        message += `Date: ${document.getElementById('event-date').textContent}\n`;
        
        const timeSelect = document.getElementById('time');
        if (timeSelect.value) {
            message += `Time: ${timeSelect.value}\n`;
        }
        
        const notes = document.getElementById('notes').value;
        if (notes) {
            message += `Notes: ${notes}\n`;
        }
        
        let total = 0;
        Object.keys(quantities).forEach(type => {
            const quantity = quantities[type];
            if (quantity > 0) {
                const price = ticketPrices[type];
                const subtotal = price * quantity;
                total += subtotal;
                
                const itemName = type.charAt(0).toUpperCase() + type.slice(1);
                message += `\n${itemName} Ticket x${quantity}: ₹${subtotal.toFixed(2)}`;
            }
        });
        
        message += `\n\nTotal: ₹${total.toFixed(2)}`;
        
        if (total === 0) {
            alert('Please select at least one ticket.');
            return;
        }
        
        alert(message);
    });
});


        // Sample event data
        const events = [
            {
                id: 1,
                title: "Live Concert",
                date: "April 20, 2025",
                location: "Mumbai Arena",
                image: "./images/lc.jpg",
                alt: "Concert crowd with hands raised"
            },
            {
                id: 2,
                title: "Wedding Expo",
                date: "April 27, 2025",
                location: "Delhi Palace Ground",
                image: "./images/wedd.jpg",
                alt: "Outdoor wedding ceremony"
            },
            {
                id: 3,
                title: "Startup Meetup",
                date: "May 5, 2025",
                location: "Bangalore Convention Center",
                image: "./images/SM.jpg",
                alt: "Concert stage with lighting"
            },
            {
                id: 4,
                title: "Birthday Party",
                date: "May 25, 2025",
                location: "Kolkata Retaurant",
                image: "./images/BP.jpg",
                alt: "Concert stage with lighting"
            },
            {
                id: 5,
                title: "Food Festival",
                date: "May 28, 2025",
                location: "Bangalore Park",
                image: "./images/FF.jpg",
                alt: "Feast"
            },
            {
                id: 6,
                title: "Gaming",
                date: "June 9, 2025",
                location: "Delhi Tech Hall",
                image: "./images/GE.jpg",
                alt: "Concert stage with lighting"
            },
            {
                id: 7,
                title: "Marathon Running",
                date: "June 14, 2025",
                location: "Pune Main Road",
                image: "./images/MR.jpg",
                alt: "Concert stage with lighting"
            },
            {
                id: 8,
                title: "Trade Fair",
                date: "August 5, 2025",
                location: "Kolkata Bada Maidan",
                image: "./images/TF.jpg",
                alt: "Concert stage with lighting"
            },
            {
                id: 9,
                title: "Fashion Shows",
                date: "Dec 26, 2025",
                location: "Bangalore Hall",
                image: "./images/FS.jpg",
                alt: "Concert stage with lighting"
            },
            {
                id: 10,
                title: "Car Show",
                date: "jan 2, 2026",
                location: "Hyderabad State Road",
                image: "./images/CS.jpg",
                alt: "Concert stage with lighting"
            },
            {
                id: 11,
                title: "Teach Talks",
                date: "jan 6, 2026",
                location: "Bangalore Convention Center",
                image: "./images/TT.jpg",
                alt: "Concert stage with lighting"
            }
        ];

        // Function to create event cards
        function createEventCards() {
            const eventsGrid = document.getElementById('events-grid');
            
            events.forEach(event => {
                // Create event card
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                
                // Card HTML content
                eventCard.innerHTML = `
                    <img src="${event.image}" alt="${event.alt}" class="event-image">
                    <div class="event-details">
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>${event.date}</span>
                        </div>
                        <div class="event-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>${event.location}</span>
                        </div>
                        <button class="book-btn" data-event-id="${event.id}">Book Now</button>
                    </div>
                `;
                
                eventsGrid.appendChild(eventCard);
            });
            
            // Add event listeners to all booking buttons
            const bookButtons = document.querySelectorAll('.book-btn');
            bookButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const eventId = this.getAttribute('data-event-id');
                    bookEvent(eventId);
                });
            });
        }
        
        // Function to handle booking
        function bookEvent(eventId) {
            // Find the event by ID
            const event = events.find(e => e.id == eventId);
            
            if (event) {
                alert(`You're about to book: ${event.title} on ${event.date} at ${event.location}`);
                // Here you would typically redirect to a booking page or open a booking modal
                // For demo purposes, we're just showing an alert
            }
        }
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            createEventCards();
        });


        