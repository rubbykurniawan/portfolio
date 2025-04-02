document.addEventListener('DOMContentLoaded', function() {
            // Initialize AOS Animation
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });
            
            // Set initial active navigation
            updateActiveNavigation();
            
            // Set initial theme icon
            updateThemeIcon();
        });

        // Typing effect for title
        // const typedTextElement = document.querySelector('.typed-text');
        // const cursorElement = document.querySelector('.cursor');
        // const descriptionElement = document.getElementById('description-text');
        // const textToType = 'Backend Developer - Golang & Ruby on Rails';
        // const descriptionText = "Passionate about building robust, scalable backend systems with clean, maintainable code. With 5+ years of experience in product-based companies, I bring technical expertise and problem-solving skills to every project.";
        // let charIndex = 0;
        // let descIndex = 0;
        // let isDeleting = false;
        
        // // Start typing effects when page loads
        // window.addEventListener('load', function() {
        //     setTimeout(typeTitle, 1000);
        //     setTimeout(typeDescription, 2000);
            
        //     // Animate skill bars
        //     const skillBars = document.querySelectorAll('.skill-progress');
        //     skillBars.forEach(bar => {
        //         const width = bar.getAttribute('data-width');
        //         setTimeout(() => {
        //             bar.style.width = `${width}%`;
        //         }, 500);
        //     });
        // });
        
        // Function to type title
        // function typeTitle() {
        //     if (!typedTextElement) return;
            
        //     if (isDeleting) {
        //         typedTextElement.textContent = textToType.substring(0, charIndex);
        //         charIndex--;
                
        //         if (charIndex === 0) {
        //             isDeleting = false;
        //             setTimeout(typeTitle, 500);
        //         } else {
        //             setTimeout(typeTitle, 50);
        //         }
        //     } else {
        //         typedTextElement.textContent = textToType.substring(0, charIndex);
        //         charIndex++;
                
        //         if (charIndex > textToType.length) {
        //             setTimeout(() => {
        //                 isDeleting = true;
        //                 typeTitle();
        //             }, 5000);
        //         } else {
        //             setTimeout(typeTitle, 100);
        //         }
        //     }
        // }
        
        // Function to type description
        function typeDescription() {
            if (!descriptionElement) return;
            
            if (descIndex < descriptionText.length) {
                descriptionElement.textContent += descriptionText.charAt(descIndex);
                descIndex++;
                
                const typingSpeed = Math.floor(Math.random() * 20) + 20;
                setTimeout(typeDescription, typingSpeed);
            }
        }

        // Theme Toggler
        document.getElementById('theme-toggle').addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            updateThemeIcon();
        });
        
        // Update theme icon based on current mode
        function updateThemeIcon() {
            const icon = document.querySelector('#theme-toggle i');
            if (document.documentElement.classList.contains('dark')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }

        // Smooth Scrolling for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetSection = document.querySelector(targetId);
                if (!targetSection) return;
                
                const offsetTop = targetSection.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link manually
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navbarNav = document.querySelector('.navbar-nav');
        
        mobileMenuBtn.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            
            const icon = mobileMenuBtn.querySelector('i');
            if (navbarNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (
                navbarNav && 
                navbarNav.classList.contains('active') && 
                !navbarNav.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)
            ) {
                navbarNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (navbarNav && navbarNav.classList.contains('active')) {
                    navbarNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Update active navigation based on scroll position
        function updateActiveNavigation() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = sectionId;
                }
            });
            
            // Default to home if no section is active
            if (current === '' && sections.length > 0) {
                current = sections[0].getAttribute('id');
            }
            
            // Update active class on navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        // Update active navigation on scroll
        window.addEventListener('scroll', updateActiveNavigation);
        // Dimasukkan ke dalam scripts.js yang sudah ada

// Fungsi untuk animasi sapaan dinamis
function initDynamicGreeting() {
    const greetings = [
        'Hello, I\'m',
        'Halo, Saya',
        'Hi there! I\'m',
        'Selamat datang, Saya',
        'Nice to meet you, I\'m',
        'Senang bertemu Anda, Saya',
        'Welcome! I\'m'
    ];
    
    const greetingElement = document.getElementById('dynamic-greeting');
    if (!greetingElement) return;
    
    let currentIndex = 0;
    
    function updateGreeting() {
        // Animasi fade out
        greetingElement.style.opacity = '0';
        
        setTimeout(() => {
            // Ubah teks saat elemen tidak terlihat
            currentIndex = (currentIndex + 1) % greetings.length;
            greetingElement.textContent = greetings[currentIndex];
            
            // Animasi fade in
            greetingElement.style.opacity = '1';
        }, 500);
    }
    
    // Update teks sapaan secara berkala
    setInterval(updateGreeting, 3000);
}

// Fungsi untuk efek parallax pada home section
function initParallaxEffect() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const profilePic = document.querySelector('.profile-pic-container');
        const heroContent = document.querySelector('.hero-content');
        
        if (scrollPosition < window.innerHeight) {
            const translateY = scrollPosition * 0.3;
            
            if (profilePic) {
                profilePic.style.transform = `translateY(${translateY}px)`;
            }
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${translateY * 0.5}px)`;
            }
        }
    });
}

// Fungsi untuk animasi masuknya elemen secara staggered
function initElementsAnimation() {
    const profilePic = document.querySelector('.profile-pic-container');
    const profileSocial = document.querySelector('.profile-social-links');
    const greetingText = document.querySelector('.greeting-text');
    const nameText = document.querySelector('.gradient-text');
    const typingContainer = document.querySelector('.typing-container');
    const heroDescription = document.querySelector('.hero-description-container');
    const ctaButtons = document.querySelector('.cta-buttons');
    const techTags = document.querySelector('.tech-tags');
    
    setTimeout(() => {
        if (profilePic) profilePic.style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
        if (profileSocial) profileSocial.style.opacity = '1';
    }, 600);
    
    setTimeout(() => {
        if (greetingText) greetingText.style.opacity = '1';
    }, 900);
    
    setTimeout(() => {
        if (nameText) nameText.style.opacity = '1';
    }, 1200);
    
    setTimeout(() => {
        if (typingContainer) typingContainer.style.opacity = '1';
    }, 1500);
    
    setTimeout(() => {
        if (heroDescription) heroDescription.style.opacity = '1';
    }, 1800);
    
    setTimeout(() => {
        if (ctaButtons) ctaButtons.style.opacity = '1';
    }, 2100);
    
    setTimeout(() => {
        if (techTags) techTags.style.opacity = '1';
    }, 2400);
}

// Typing effect for profession title
const professionTexts = [
    'Backend Developer',
    'Golang Developer',
    'Ruby On Rails Developer'
];

let currentProfessionIndex = 0;
let typingInterval;

function typeProfession() {
    const typedTextElement = document.getElementById('profession-text');
    if (!typedTextElement) return;
    
    const text = professionTexts[currentProfessionIndex];
    let charIndex = 0;
    let isDeleting = false;
    
    clearInterval(typingInterval);
    
    typingInterval = setInterval(() => {
        if (!isDeleting && charIndex <= text.length) {
            typedTextElement.textContent = text.substring(0, charIndex);
            charIndex++;
            
            // Jika selesai mengetik, tunggu sebelum menghapus
            if (charIndex > text.length) {
                isDeleting = true;
                setTimeout(() => {
                    clearInterval(typingInterval);
                    eraseAndSwitchProfession();
                }, 3000); // Tunggu 3 detik setelah selesai mengetik
                return;
            }
        }
    }, 100);
}

function eraseAndSwitchProfession() {
    const typedTextElement = document.getElementById('profession-text');
    if (!typedTextElement) return;
    
    const text = professionTexts[currentProfessionIndex];
    let charIndex = text.length;
    
    const eraseInterval = setInterval(() => {
        if (charIndex >= 0) {
            typedTextElement.textContent = text.substring(0, charIndex);
            charIndex--;
            
            // Jika selesai menghapus, ganti ke teks berikutnya
            if (charIndex < 0) {
                clearInterval(eraseInterval);
                currentProfessionIndex = (currentProfessionIndex + 1) % professionTexts.length;
                setTimeout(typeProfession, 500); // Jeda kecil sebelum mengetik teks baru
            }
        }
    }, 50);
}

// Function untuk mengetik deskripsi
function typeDescription() {
    const descriptionElement = document.getElementById('description-text');
    if (!descriptionElement) return;
    
    const descriptionText = "Passionate about building robust, scalable backend systems with clean, maintainable code. With 5+ years of experience in product-based companies, I bring technical expertise and problem-solving skills to every project.";
    let descIndex = 0;
    
    function typeChar() {
        if (descIndex < descriptionText.length) {
            descriptionElement.textContent += descriptionText.charAt(descIndex);
            descIndex++;
            
            const typingSpeed = Math.floor(Math.random() * 20) + 20;
            setTimeout(typeChar, typingSpeed);
        }
    }
    
    typeChar();
}

// Initialize animations when page loads
window.addEventListener('load', function() {
    // Add initial hidden state for animation
    document.querySelectorAll('.profile-pic-container, .profile-social-links, .greeting-text, .gradient-text, .typing-container, .hero-description-container, .cta-buttons, .tech-tags').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    });
    
    // Initialize animations
    initElementsAnimation();
    initParallaxEffect();
    initDynamicGreeting();
    
    // Start typing animations
    setTimeout(() => {
        typeProfession();
        setTimeout(typeDescription, 1500);
    }, 2000);
    
    // Existing code for skill bars - keep this unchanged
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = `${width}%`;
        }, 500);
    });
});