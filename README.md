# Dayananda Sagar Business School (DSBS) - Official Website Replica

A modern, high-fidelity replica of the official **[Dayananda Sagar Business School](https://dsbs.edu.in/)** website, featuring complete visual styling, interactive effects, dynamic animations, and institutional data integration.

---

## ✨ Features & Highlights

### 🎯 1. Pixel-Perfect Visual Fidelity
- **Header & Navigation**: Complete brand assets, top notifications bar (Helplines, AICTE status, social channels), and full mega menu dropdown hierarchy (About Us, Programmes, Admissions, Placements, Research, Student's Corner, Gallery, Contact).
- **Standalone Local Assets**: Includes 50+ local high-resolution images, 24 modular CSS stylesheets, 25 JavaScript modules, and Font Awesome & Simple Line Icons for 100% offline and standalone operation.

### 🚀 2. Interactive Animations & Effects
- **Right-Side Hover Pull-Out Drawer (`.sticky-social`)**:
  - **WhatsApp Pull-out**: Hover slides out to display the admissions helpline (`+91 9611515262`) with instant chat link.
  - **Phone Pull-out**: Hover reveals admissions telephone (`+91 80 42161704`) with click-to-call link.
  - **Social Channels**: Hover reveals Facebook, Instagram, YouTube, and Twitter icons.
  - **Scroll Fade**: Automatically fades out when scrolling down and restores when scrolled back to top.
- **Fixed Vertical "Apply Now!" Tab**: Angled at 270° with hover transitions and smooth click trigger.
- **Slide-Out Admission Enquiry Drawer**: High-converting application form drawer that slides in from the right edge with validation and feedback.
- **Hero Slideshow Carousel**: Autoplay slideshow featuring 6 desktop and mobile banners with previous/next arrows and pagination dots.
- **Top Recruiters Infinite Marquee**: Continuous smooth logo slider (Bajaj Finserv, Bosch, Oracle, ICICI Bank, TCS, KPMG, EY, PwC) with hover-pause.
- **Accreditations & Partner Carousel**: Sliding showcase of national accreditations and institutional partners.
- **Testimonial Slider**: Real alumni reviews with student photos and smooth transitions.
- **Animated Numeric Counters**: Dynamic counters that count up when scrolled into view.
- **Sticky Header & Back-to-Top**: Shrinking sticky header with shadow and smooth scroll-to-top button.

### 🤖 3. Built-In Admissions Chatbot
- Floating interactive chatbot trigger at bottom-right with animated pulsing badge.
- Auto-greeting after 4 seconds to assist prospective applicants.
- Quick chips for instant answers on:
  - 📘 *About PGDM Programme*
  - 📋 *Eligibility & Selection Criteria*
  - 💼 *Placement Records & Average CTC*
  - 💰 *Fee Structure & Scholarships*
  - 🏢 *Top Recruiters*
  - 📞 *Request a Callback*
  - 📝 *Apply Online*
- Natural language query response handling based on the institutional dataset.
- In-chat lead capture form for instant call-back requests.

### 📚 4. Institutional Dataset Integration
- Powered by `dsbs_data.json` containing 61 pages, 120 faculty profiles, and 696 document references.
- Clicking any subpage in the menu (e.g., *Faculty*, *Vision & Mission*, *Leadership*, *Placement Statistics*, or *AICTE Approvals*) opens an authentic content drawer with the complete scraped details.

---

## 💻 Running Locally

You can open `index.html` directly in any web browser, or serve it via Python:

```bash
# Start local HTTP server
python -m http.server 8080
```

Then visit:
```
http://localhost:8080/index.html
```

---

## 📁 Project Structure

```
├── index.html                 # Main website replica
├── dsbs_data.json             # Structured institutional data
├── assets/
│   ├── css/                   # 24 Stylesheets (Bootstrap, templates, sliders)
│   ├── js/                    # 25 JavaScript libraries and interactive modules
│   └── fonts/                 # Font Awesome icons (.woff2, .woff, .ttf, .eot)
├── images/                    # 50 Local images, logos, banners, and SVG icons
├── build_dsbs_website.py      # Build and synchronization script
└── compile_data.py            # Data extraction and JSON compiler
```
