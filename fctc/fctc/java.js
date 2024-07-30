document.addEventListener('DOMContentLoaded', function() {
    // Create the entire HTML structure dynamically
    const body = document.body;
    body.style.margin = 0;
    body.style.padding = 0;
    body.style.boxSizing = 'border-box';
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.backgroundColor = '#000'; // Solid black background
    body.style.color = '#fff';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.position = 'relative'; // Ensure positioning context for header
    body.style.overflow = 'hidden'; // Hide any overflow from star animation

    // Add starry background
    const starryBackground = document.createElement('div');
    starryBackground.style.position = 'absolute';
    starryBackground.style.top = 0;
    starryBackground.style.left = 0;
    starryBackground.style.width = '100%';
    starryBackground.style.height = '100%';
    starryBackground.style.background = 'url("https://www.transparenttextures.com/patterns/stardust.png")';
    starryBackground.style.backgroundSize = 'cover';
    starryBackground.style.zIndex = -1;
    body.appendChild(starryBackground);

    // Header
    const header = document.createElement('header');
    header.style.position = 'absolute';
    header.style.top = '40px';
    header.style.width = '100%';
    header.style.background = 'rgba(0, 0, 0, 0.5)';
    header.style.padding = '10px 20px';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.border = 'none';
    body.appendChild(header);

    // Logo
    const logoDiv = document.createElement('div');
    logoDiv.style.position = 'absolute';
    logoDiv.style.top = 0;
    logoDiv.style.left = '50%';
    logoDiv.style.transform = 'translateX(-50%)';
    logoDiv.style.border = 'none';
    header.appendChild(logoDiv);

    const logoImg = document.createElement('img');
    logoImg.src = 'fctc.png';
    logoImg.alt = 'Logo';
    logoImg.style.height = '150px';
    logoImg.style.border = 'none';
    logoImg.style.transition = 'all 0.3s ease';
    logoImg.addEventListener('mouseover', () => {
        logoImg.style.boxShadow = '0 0 20px 10px gold';
        logoImg.style.transform = 'scale(1.1)';
    });
    logoImg.addEventListener('mouseout', () => {
        logoImg.style.boxShadow = 'none';
        logoImg.style.transform = 'scale(1)';
    });
    logoDiv.appendChild(logoImg);

    // Navigation
    const nav = document.createElement('nav');
    nav.style.position = 'absolute';
    nav.style.right = '120px';
    nav.style.top = '20px';
    header.appendChild(nav);

    const navList = document.createElement('ul');
    navList.style.listStyle = 'none';
    navList.style.margin = 0;
    navList.style.padding = 0;
    navList.style.display = 'flex';
    nav.appendChild(navList);

    // Create navigation links
    const links = [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Contact', href: '#' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        li.style.marginLeft = '20px';
        navList.appendChild(li);

        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        a.style.color = '#fff';
        a.style.textDecoration = 'none';
        a.style.fontSize = '16px';
        a.style.position = 'relative';
        a.style.padding = '10px 20px';
        a.style.background = 'linear-gradient(45deg, #FFD700, #FFD700, #FFD700)';
        a.style.backgroundSize = '400% 400%';
        a.style.borderRadius = '4px';
        a.style.boxShadow = '0 4px 8px rgba(255, 228, 50, 0.2)';
        a.style.transition = 'color 0.3s';
        a.addEventListener('mouseover', () => {
            a.style.color = '#fff';
            a.style.background = '#ffcc00';
        });
        a.addEventListener('mouseout', () => {
            a.style.color = '#fff';
            a.style.background = 'linear-gradient(45deg, #FFD700, #FFD700, #FFD700)';
        });
        li.appendChild(a);
    });

    // Main section
    const main = document.createElement('main');
    main.style.display = 'flex';
    main.style.flexDirection = 'column';
    main.style.justifyContent = 'center';
    main.style.alignItems = 'center';
    main.style.textAlign = 'center';
    main.style.position = 'relative';
    main.style.paddingTop = '80px';
    body.appendChild(main);

    const comingSoonDiv = document.createElement('div');
    comingSoonDiv.className = 'coming-soon';
    comingSoonDiv.style.animation = 'fade-in 1.5s';
    main.appendChild(comingSoonDiv);

    const h1 = document.createElement('h1');
    h1.textContent = 'Coming Soon';
    h1.style.fontSize = '40px';
    h1.style.margin = 0;
    h1.style.animation = 'blinkGlow 1.5s infinite';
    comingSoonDiv.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Thank you for reaching out. Our new website is launching soon. Stay tuned for updates on our social media platforms!';
    comingSoonDiv.appendChild(p);

    // Footer
    const footer = document.createElement('footer');
    footer.style.position = 'absolute';
    footer.style.bottom = '10px';
    footer.style.right = '10px';
    footer.style.padding = '20px';
    footer.style.background = 'rgba(0, 0, 0, 0.5)';
    footer.style.border = 'none';
    body.appendChild(footer);

    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.className = 'social-media';
    socialMediaDiv.style.display = 'flex';
    socialMediaDiv.style.flexDirection = 'row';
    socialMediaDiv.style.alignItems = 'center';
    socialMediaDiv.style.gap = '15px';
    footer.appendChild(socialMediaDiv);

    // Social media links
    const socialLinks = [
        { href: 'https://www.instagram.com/fctctoken/', iconClass: 'fab fa-instagram' },
        { href: 'https://www.facebook.com/profile.php?id=61557875758900', iconClass: 'fab fa-facebook-f' },
        { href: 'https://x.com/FctcToken', iconClass: '', imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012024/twitter-x.png?ygedzLyTIx3bQKPfMQWVnHNsjljcpFJT&itok=0a3okSgI' }
    ];

    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = '_blank';
        a.style.color = '#fff';
        a.style.textDecoration = 'none';
        a.style.display = 'flex';
        a.style.alignItems = 'center';
        a.style.border = 'none';
        a.style.padding = 0;

        if (link.imgSrc) {
            const img = document.createElement('img');
            img.src = link.imgSrc;
            img.style.width = '30px';
            img.style.height = '30px';
            img.style.border = '2px solid #fff';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            a.appendChild(img);
        } else {
            const i = document.createElement('i');
            i.className = link.iconClass;
            a.appendChild(i);
        }

        socialMediaDiv.appendChild(a);
    });

    // Apply styles using keyframes
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes blinkGlow {
            0% {
                opacity: 1;
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2a5298, 0 0 40px #2a5298, 0 0 50px #2a5298, 0 0 60px #2a5298, 0 0 70px #2a5298;
            }
            50% {
                opacity: 0.5;
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2a5298, 0 0 40px #2a5298, 0 0 50px #2a5298, 0 0 60px #2a5298, 0 0 70px #2a5298;
            }
            100% {
                opacity: 1;
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2a5298, 0 0 40px #2a5298, 0 0 50px #2a5298, 0 0 60px #2a5298, 0 0 70px #2a5298;
            }
        }

        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(styleSheet);

    // Apply animation classes
    document.querySelector('main').classList.add('fade-in');
    document.querySelector('header').classList.add('slide-in-left');
    document.querySelector('footer').classList.add('slide-in-left');

    // Button animation when clicked
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            button.classList.add('bounce');
            setTimeout(() => button.classList.remove('bounce'), 1000); // Remove animation class after 1 second
        });
    });

    // Mobile and Email Verification Code Button Timer
    let mobileTimer = 60;
    let emailTimer = 60;

    function startTimer(timerId, buttonId) {
        let interval = setInterval(function() {
            if (timerId > 0) {
                timerId--;
                document.getElementById(buttonId).textContent = `${timerId}s`;
            } else {
                clearInterval(interval);
                document.getElementById(buttonId).textContent = '60s';
                timerId = 60; // Reset timer
            }
        }, 1000);
    }

    document.getElementById('send-mobile-code').addEventListener('click', function() {
        startTimer(mobileTimer, 'mobile-timer');
    });

    document.getElementById('send-email-code').addEventListener('click', function() {
        startTimer(emailTimer, 'email-timer');
    });
});
