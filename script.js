// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Modal functionality
const modal = document.getElementById('formModal');
const outreachBtn = document.getElementById('outreachBtn');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('outreachForm');

// Open modal when button is clicked
outreachBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        topic: document.getElementById('topic').value,
        skills: document.getElementById('skills').value,
        position: document.getElementById('position').value
    };
//https://mahesh20.app.n8n.cloud/webhook-test/92baa9eb-667a-424d-9889-a170162c6a48
    // Make POST request to webhook
    fetch('https://mahesh20.app.n8n.cloud/webhook/92baa9eb-667a-424d-9889-a170162c6a48', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            showSuccessMessage(formData);
        } else {
            showErrorMessage();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showErrorMessage();
    });
    
    // Reset form
    form.reset();
    
    // Close modal after 2 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000);
});

// Success message function
function showSuccessMessage(data) {
    const formContent = form.parentElement;
    const originalContent = formContent.innerHTML;
    
    formContent.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
            <h3 style="color: #4ade80; margin-bottom: 1rem;">Thank You!</h3>
            <p style="color: #a5b4fc; margin-bottom: 1rem;">
                Your submission for <strong>${data.topic}</strong> has been received.
            </p>
            <p style="color: #a5b4fc; font-size: 0.95rem;">
                Get ready for some exciting possibilities! We've just sent an email on your behalf and we're confident that you'll be hearing back soon with some amazing opportunities that match your skills!
            </p>
        </div>
    `;
    
    setTimeout(() => {
        formContent.innerHTML = originalContent;
        attachFormListener();
    }, 10000);
}

// Error message function
function showErrorMessage() {
    const formContent = form.parentElement;
    const originalContent = formContent.innerHTML;
    
    formContent.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
            <h3 style="color: #ef4444; margin-bottom: 1rem;">Submission Error</h3>
            <p style="color: #a5b4fc; font-size: 0.95rem;">
                There was an issue submitting your form. Please try again.
            </p>
        </div>
    `;
    
    setTimeout(() => {
        formContent.innerHTML = originalContent;
        attachFormListener();
    }, 2000);
}

function attachFormListener() {
    document.getElementById('outreachForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            topic: document.getElementById('topic').value,
            skills: document.getElementById('skills').value,
            position: document.getElementById('position').value
        };

        fetch('https://mahesh20.app.n8n.cloud/webhook/92baa9eb-667a-424d-9889-a170162c6a48', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                showSuccessMessage(formData);
            } else {
                showErrorMessage();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showErrorMessage();
        });

        document.getElementById('outreachForm').reset();
        
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.about-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
