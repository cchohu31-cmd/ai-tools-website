// Sample AI Tools Data
const aiTools = [
    { name: "ChatGPT", category: "text", desc: "Advanced conversational AI for writing, coding, and analysis.", icon: "fa-robot" },
    { name: "Midjourney", category: "image", desc: "High-quality artistic image generation from text prompts.", icon: "fa-paint-brush" },
    { name: "GitHub Copilot", category: "code", desc: "AI pair programmer that helps you write code faster.", icon: "fa-code" },
    { name: "Jasper", category: "text", desc: "Enterprise-grade AI content platform for marketing teams.", icon: "fa-pen-nib" },
    { name: "Runway Gen-2", category: "video", desc: "Next-generation video synthesis from text or images.", icon: "fa-video" },
    { name: "ElevenLabs", category: "video", desc: "Prime AI text-to-speech and voice cloning software.", icon: "fa-microphone" },
    { name: "Notion AI", category: "business", desc: "Integrated AI features for notes, docs, and project management.", icon: "fa-file-lines" },
    { name: "Claude 3", category: "text", desc: "Reliable and safe AI model with long context window.", icon: "fa-brain" },
    { name: "Stable Diffusion", category: "image", desc: "Open-source image generation model for local or cloud use.", icon: "fa-wand-magic-sparkles" },
    { name: "Cursor", category: "code", desc: "AI-first code editor built for pair programming with AI.", icon: "fa-terminal" }
];

// Load Tool Cards
const toolsGrid = document.getElementById('tools-grid');

function displayTools(tools) {
    toolsGrid.innerHTML = tools.map(tool => `
        <article class="tool-card" data-category="${tool.category}">
            <div class="tool-icon">
                <i class="fas ${tool.icon}"></i>
            </div>
            <span class="tool-tag">${tool.category.toUpperCase()}</span>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <a href="#" class="tool-link">Visit Website <i class="fas fa-external-link-alt"></i></a>
        </article>
    `).join('');
}

// Initial Display
displayTools(aiTools);

// Search Functionality
const searchInput = document.getElementById('tool-search');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTools = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.desc.toLowerCase().includes(searchTerm)
    );
    displayTools(filteredTools);
});

// Category Filtering
const catButtons = document.querySelectorAll('.cat-btn');
catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update UI
        catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter
        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') {
            displayTools(aiTools);
        } else {
            const filtered = aiTools.filter(tool => tool.category === filter);
            displayTools(filtered);
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('i');
        
        const isOpen = answer.style.display === 'block';
        
        // Close all first
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');

        if (!isOpen) {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if(navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-dark)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '1px solid var(--border-color)';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});