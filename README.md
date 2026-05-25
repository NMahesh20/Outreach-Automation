# Outreach - Share Your Skills, Inspire the World

Created during **Google Vibe Code**

## Overview

Outreach is a knowledge-sharing platform designed to connect passionate learners with experts and mentors across the globe. This project was created to democratize education and break geographical barriers by enabling anyone to share their expertise in technology, arts, business, and beyond.

The platform facilitates meaningful connections between knowledge seekers and experienced professionals, fostering a global community where skills can be shared and lives can be impacted through structured mentorship and collaborative learning.

**Live Website:** [https://outreach-quarks.netlify.app](https://outreach-quarks.netlify.app)

> ⚠️ **Note:** Automated workflows are currently disabled to manage operational costs. The form submission endpoint is functional but flows are not active in production.

## Code Overview

### File Structure

```
outreach/
├── index.html                    # Main website structure
├── script.js                     # Interactive functionality
├── styles.css                    # Styling and design
└── misc/
    └── n8n-outreach-automation.json  # N8N automation workflow config
```

### Components

#### 1. **index.html** - Website Structure
The main HTML file contains:
- **Navigation Bar** - Sticky header with responsive menu (Home, About, Credits)
- **Form Modal** - Interactive form to collect user information (topic, skills, position)

#### 2. **script.js** - Interactivity
JavaScript handles:
- **Mobile Menu Toggle** - Responsive hamburger menu functionality
- **Scroll Navigation** - Active link highlighting based on viewport position
- **Modal Management** - Open/close form modal on user interaction
- **Form Submission** - Collects user data and sends POST request to N8N webhook
- **User Feedback** - Success/error messages after form submission
- **Form Validation** - Ensures data integrity before sending

**Key Webhook:** Posts form data to N8N automation endpoint at `https://mahesh20.app.n8n.cloud/webhook/92baa9eb-667a-424d-9889-a170162c6a48`

#### 3. **styles.css** - Design System (765 lines)
- **Typography** - Google Fonts "Lato" for clean, readable text
- **Components**:
  - Feature cards grid layout
  - Call-to-action buttons (primary and secondary states)
  - Modal form styling
  - Smooth transitions and animations

#### 4. **n8n-outreach-automation.json** - Automation Workflow
N8N configuration file that defines:
- **Form Trigger** - User input form for collecting research interests, skills, and position
- **Automation Logic** - Processes user submissions 
- **Integration Points** - Configuration for external API calls and data processing

## Features

** Core Platform Features:**
1. **Easy to Share** - Intuitive interface for sharing knowledge
2. **Global Community** - Connect with people worldwide
3. **Professional Growth** - Build reputation and expand network

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Navigate through the website and interact with the form
4. Note: Automated workflows are currently disabled. But similar flow can help to get started

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript 
- **Automation:** N8N workflow engine 
- **Deployment:** Netlify

## 🎖️ Honorable Mention
[AvishkarArjan](https://github.com/AvishkarArjan) | Advice and idea generation. 

