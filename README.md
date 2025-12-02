# Professional Resume Website

A modern, responsive, and fully customizable web-based resume platform built with Bootstrap 5, vanilla JavaScript, and HTML5/CSS3.

## Features

- ✨ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Clean corporate palette with deep blue and slate gray colors
- 📱 **Single Page Layout** - All information organized in clearly separated sections
- 🔄 **Dynamic Content** - All resume data loaded from JSON for easy customization
- 📄 **PDF Export** - Print-friendly styling for easy PDF generation
- ⚡ **Smooth Animations** - Fade-in effects for enhanced user experience
- ♿ **Accessible** - High contrast support and reduced motion preferences
- 🎯 **Modern Tech Stack** - Bootstrap 5 (no jQuery), Vanilla JavaScript, CSS Variables

## Sections Included

1. **Header** - Profile photo, name, title, and tagline
2. **About Me** - Professional summary
3. **Skills** - Categorized technical and soft skills with badges
4. **Work Experience** - Detailed job history with achievements
5. **Education** - Academic background
6. **Projects** - Portfolio of projects with links
7. **Certifications** - Professional certifications and credentials
8. **Contact** - Email, phone, location, and social media links

## Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Katsura34/portfolio-.git
   cd portfolio-
   ```

2. Open `index.html` in your web browser, or serve with a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000` in your browser

### Customization

All resume content is stored in `/data/resume.json`. Simply edit this file to update your information:

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "tagline": "Your tagline or motto",
    "photo": "assets/img/profile.svg"
  },
  "summary": "Your professional summary...",
  "contact": { ... },
  "skills": { ... },
  "experience": [ ... ],
  "education": [ ... ],
  "projects": [ ... ],
  "certifications": [ ... ]
}
```

#### Updating Your Profile Photo

Replace `assets/img/profile.svg` (or add a new image) and update the path in `resume.json`:

```json
"photo": "assets/img/your-photo.jpg"
```

#### Customizing Colors

Edit CSS variables in `/assets/css/style.css`:

```css
:root {
    --primary-color: #1e3a8a;      /* Deep blue */
    --secondary-color: #475569;     /* Slate gray */
    /* ... other variables ... */
}
```

## Project Structure

```
portfolio-/
├── assets/
│   ├── css/
│   │   └── style.css          # Custom styles and themes
│   ├── js/
│   │   └── main.js            # Dynamic content loading
│   └── img/
│       └── profile.svg        # Profile photo
├── data/
│   └── resume.json            # Resume content (EDIT THIS!)
├── index.html                 # Main HTML structure
├── README.md                  # This file
└── a.md                       # Project specifications
```

## Exporting as PDF

Click the "Download as PDF" button at the bottom of the page, or use your browser's print function:

1. Click the download button or press `Ctrl/Cmd + P`
2. Select "Save as PDF" as the destination
3. Choose appropriate settings (A4, Letter, etc.)
4. Save your PDF resume

The website includes special print styles to ensure your resume looks professional in PDF format.

## Technologies Used

- **Bootstrap 5.3** - Responsive grid system and components
- **Bootstrap Icons** - Icon library
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **CSS3** - Custom properties (variables), animations, and modern styling
- **HTML5** - Semantic markup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Built with ❤️ using Bootstrap 5 and modern web technologies.
