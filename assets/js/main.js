// main.js - Load resume data dynamically from JSON

// Fetch and load resume data
async function loadResumeData() {
    try {
        const response = await fetch('data/resume.json');
        if (!response.ok) {
            throw new Error('Failed to load resume data');
        }
        const data = await response.json();
        populateResume(data);
    } catch (error) {
        console.error('Error loading resume data:', error);
        // Show error message to user
        const main = document.querySelector('main') || document.body;
        const errorDiv = document.createElement('div');
        errorDiv.className = 'container text-center mt-5';
        errorDiv.innerHTML = `
            <div class="alert alert-danger">
                <h4>Error Loading Resume</h4>
                <p>Unable to load resume data. Please check the console for details.</p>
            </div>
        `;
        main.innerHTML = '';
        main.appendChild(errorDiv);
    }
}

// Populate all sections with data
function populateResume(data) {
    populateHeader(data.profile);
    populateSummary(data.summary);
    populateSkills(data.skills);
    populateExperience(data.experience);
    populateEducation(data.education);
    populateProjects(data.projects);
    populateCertifications(data.certifications);
    populateContact(data.contact);
    populateFooter(data.profile);
    
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Populate header section
function populateHeader(profile) {
    document.getElementById('profile-photo').src = profile.photo;
    document.getElementById('profile-photo').alt = profile.name;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-title').textContent = profile.title;
    document.getElementById('profile-tagline').textContent = profile.tagline || '';
}

// Populate summary section
function populateSummary(summary) {
    document.getElementById('summary-text').textContent = summary;
}

// Populate skills section
function populateSkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    
    for (const [category, skillList] of Object.entries(skills)) {
        const skillGroup = document.createElement('div');
        skillGroup.className = 'skill-group';
        
        const title = document.createElement('h4');
        title.className = 'skill-group-title';
        title.textContent = category;
        skillGroup.appendChild(title);
        
        const badgesContainer = document.createElement('div');
        skillList.forEach(skill => {
            const badge = document.createElement('span');
            badge.className = 'skill-badge';
            badge.textContent = skill;
            badgesContainer.appendChild(badge);
        });
        
        skillGroup.appendChild(badgesContainer);
        container.appendChild(skillGroup);
    }
}

// Populate experience section
function populateExperience(experience) {
    const container = document.getElementById('experience-container');
    container.innerHTML = '';
    
    experience.forEach(job => {
        const card = document.createElement('div');
        card.className = 'card experience-card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const position = document.createElement('h4');
        position.className = 'experience-position';
        position.textContent = job.position;
        
        const company = document.createElement('h5');
        company.className = 'experience-company';
        company.textContent = job.company;
        
        const dates = document.createElement('p');
        dates.className = 'experience-dates';
        dates.innerHTML = `<i class="bi bi-calendar3"></i> ${job.dates}`;
        
        const achievements = document.createElement('ul');
        achievements.className = 'experience-achievements';
        job.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            achievements.appendChild(li);
        });
        
        cardBody.appendChild(position);
        cardBody.appendChild(company);
        cardBody.appendChild(dates);
        cardBody.appendChild(achievements);
        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

// Populate education section
function populateEducation(education) {
    const container = document.getElementById('education-container');
    container.innerHTML = '';
    
    education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'card education-card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const degree = document.createElement('h4');
        degree.className = 'education-degree';
        degree.textContent = edu.degree;
        
        const school = document.createElement('h5');
        school.className = 'education-school';
        school.textContent = edu.school;
        
        const dates = document.createElement('p');
        dates.className = 'education-dates';
        dates.innerHTML = `<i class="bi bi-calendar3"></i> ${edu.dates}`;
        
        cardBody.appendChild(degree);
        cardBody.appendChild(school);
        cardBody.appendChild(dates);
        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

// Populate projects section
function populateProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    projects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        const card = document.createElement('div');
        card.className = 'card project-card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const title = document.createElement('h4');
        title.className = 'project-title';
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;
        
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        
        if (project.link) {
            const link = document.createElement('a');
            link.href = project.link;
            link.className = 'project-link';
            link.target = '_blank';
            link.innerHTML = '<i class="bi bi-box-arrow-up-right"></i> View Project';
            cardBody.appendChild(link);
        }
        
        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);
    });
}

// Populate certifications section
function populateCertifications(certifications) {
    const container = document.getElementById('certifications-container');
    container.innerHTML = '';
    
    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'card certification-card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const row = document.createElement('div');
        row.className = 'row align-items-center';
        
        const col = document.createElement('div');
        col.className = 'col';
        
        const name = document.createElement('h5');
        name.className = 'certification-name mb-1';
        name.textContent = cert.name;
        
        const issuer = document.createElement('p');
        issuer.className = 'certification-issuer mb-0';
        issuer.textContent = cert.issuer;
        
        col.appendChild(name);
        col.appendChild(issuer);
        
        const yearCol = document.createElement('div');
        yearCol.className = 'col-auto';
        
        const year = document.createElement('span');
        year.className = 'certification-year';
        year.textContent = cert.year;
        
        yearCol.appendChild(year);
        row.appendChild(col);
        row.appendChild(yearCol);
        cardBody.appendChild(row);
        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

// Populate contact section
function populateContact(contact) {
    const container = document.getElementById('contact-container');
    container.innerHTML = '';
    
    // Email
    const emailCol = document.createElement('div');
    emailCol.className = 'col-md-6 mb-3';
    
    const emailItem = document.createElement('div');
    emailItem.className = 'contact-item';
    
    const emailIcon = document.createElement('i');
    emailIcon.className = 'bi bi-envelope-fill';
    
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${contact.email}`;
    emailLink.className = 'contact-link';
    emailLink.textContent = contact.email;
    
    emailItem.appendChild(emailIcon);
    emailItem.appendChild(emailLink);
    emailCol.appendChild(emailItem);
    container.appendChild(emailCol);
    
    // Phone
    const phoneCol = document.createElement('div');
    phoneCol.className = 'col-md-6 mb-3';
    
    const phoneItem = document.createElement('div');
    phoneItem.className = 'contact-item';
    
    const phoneIcon = document.createElement('i');
    phoneIcon.className = 'bi bi-telephone-fill';
    
    const phoneLink = document.createElement('a');
    phoneLink.href = `tel:${contact.phone}`;
    phoneLink.className = 'contact-link';
    phoneLink.textContent = contact.phone;
    
    phoneItem.appendChild(phoneIcon);
    phoneItem.appendChild(phoneLink);
    phoneCol.appendChild(phoneItem);
    container.appendChild(phoneCol);
    
    // Location
    const locationCol = document.createElement('div');
    locationCol.className = 'col-md-6 mb-3';
    
    const locationItem = document.createElement('div');
    locationItem.className = 'contact-item';
    
    const locationIcon = document.createElement('i');
    locationIcon.className = 'bi bi-geo-alt-fill';
    
    const locationSpan = document.createElement('span');
    locationSpan.className = 'contact-link';
    locationSpan.textContent = contact.location;
    
    locationItem.appendChild(locationIcon);
    locationItem.appendChild(locationSpan);
    locationCol.appendChild(locationItem);
    container.appendChild(locationCol);
    
    // Social Links
    if (contact.social) {
        const socialCol = document.createElement('div');
        socialCol.className = 'col-12 mt-3';
        
        const socialTitle = document.createElement('h5');
        socialTitle.className = 'mb-3';
        socialTitle.textContent = 'Connect with me:';
        socialCol.appendChild(socialTitle);
        
        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';
        
        if (contact.social.github) {
            const github = document.createElement('a');
            github.href = contact.social.github;
            github.className = 'social-link';
            github.target = '_blank';
            github.innerHTML = '<i class="bi bi-github"></i> GitHub';
            socialLinks.appendChild(github);
        }
        
        if (contact.social.linkedin) {
            const linkedin = document.createElement('a');
            linkedin.href = contact.social.linkedin;
            linkedin.className = 'social-link';
            linkedin.target = '_blank';
            linkedin.innerHTML = '<i class="bi bi-linkedin"></i> LinkedIn';
            socialLinks.appendChild(linkedin);
        }
        
        if (contact.social.portfolio) {
            const portfolio = document.createElement('a');
            portfolio.href = contact.social.portfolio;
            portfolio.className = 'social-link';
            portfolio.target = '_blank';
            portfolio.innerHTML = '<i class="bi bi-globe"></i> Portfolio';
            socialLinks.appendChild(portfolio);
        }
        
        socialCol.appendChild(socialLinks);
        container.appendChild(socialCol);
    }
}

// Populate footer
function populateFooter(profile) {
    document.getElementById('footer-name').textContent = profile.name;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadResumeData);
