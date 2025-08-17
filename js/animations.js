// Advanced Animation Controller
class AnimationController {
    constructor() {
        this.observers = new Map();
        this.animationQueue = [];
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupTextAnimations();
        this.setupParticleEffects();
    }

    // Intersection Observer for scroll-triggered animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: [0.1, 0.25, 0.5, 0.75],
            rootMargin: '0px 0px -50px 0px'
        };

        const mainObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerAnimation(entry.target, entry.intersectionRatio);
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll([
            '.fade-in-up',
            '.fade-in-left',
            '.fade-in-right',
            '.slide-in-left',
            '.slide-in-right',
            '.zoom-in',
            '.rotate-in',
            '.flip-in-x',
            '.flip-in-y',
            '.bounce-in',
            '.animate-on-scroll'
        ].join(', ')).forEach(el => {
            mainObserver.observe(el);
        });

        this.observers.set('main', mainObserver);
    }

    // Trigger animations based on element classes
    triggerAnimation(element, ratio) {
        if (element.classList.contains('animated')) return;

        const delay = parseInt(element.dataset.delay) || 0;
        const duration = parseInt(element.dataset.duration) || 1000;

        setTimeout(() => {
            element.classList.add('animated');
            this.addStaggerEffect(element);
        }, delay);
    }

    // Add stagger effect to child elements
    addStaggerEffect(parent) {
        const children = parent.querySelectorAll('.stagger-item, .stagger-animation');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('animated');
            }, index * 100);
        });
    }

    // Scroll-based animations
    setupScrollAnimations() {
        let ticking = false;

        const updateScrollAnimations = () => {
            const scrollY = window.pageYOffset;
            const windowHeight = window.innerHeight;

            // Parallax elements
            document.querySelectorAll('.parallax').forEach(element => {
                const speed = parseFloat(element.dataset.speed) || 0.5;
                const yPos = -(scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });

            // Scale elements on scroll
            document.querySelectorAll('.scale-on-scroll').forEach(element => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementHeight = rect.height;
                const scale = Math.max(0.8, Math.min(1.2, 1 + (windowHeight - elementTop) / (windowHeight + elementHeight) * 0.4));
                element.style.transform = `scale(${scale})`;
            });

            // Rotate elements on scroll
            document.querySelectorAll('.rotate-on-scroll').forEach(element => {
                const rect = element.getBoundingClientRect();
                const rotation = (rect.top / windowHeight) * 360;
                element.style.transform = `rotate(${rotation}deg)`;
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollAnimations);
                ticking = true;
            }
        });
    }

    // Enhanced hover effects
    setupHoverEffects() {
        // Magnetic effect
        document.querySelectorAll('.magnetic').forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });

        // Tilt effect
        document.querySelectorAll('.tilt').forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 4;
                const rotateY = (centerX - x) / 4;

                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });

        // Ripple effect
        document.querySelectorAll('.ripple').forEach(element => {
            element.addEventListener('click', (e) => {
                const rect = element.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: rippleAnimation 0.6s linear;
                    left: ${x}px;
                    top: ${y}px;
                    width: ${size}px;
                    height: ${size}px;
                `;

                element.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Text animations
    setupTextAnimations() {
        // Typewriter effect
        document.querySelectorAll('.typewriter-text').forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid';

            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    element.style.borderRight = 'none';
                }
            };

            // Start typing when element comes into view
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    typeWriter();
                    observer.disconnect();
                }
            });

            observer.observe(element);
        });

        // Word by word animation
        document.querySelectorAll('.animate-words').forEach(element => {
            const text = element.textContent;
            const words = text.split(' ');
            element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    const wordElements = element.querySelectorAll('.word');
                    wordElements.forEach((word, index) => {
                        setTimeout(() => {
                            word.style.animation = 'fadeInUp 0.6s ease forwards';
                        }, index * 100);
                    });
                    observer.disconnect();
                }
            });

            observer.observe(element);
        });

        // Character by character animation
        document.querySelectorAll('.animate-chars').forEach(element => {
            const text = element.textContent;
            element.innerHTML = text.split('').map(char => 
                `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
            ).join('');

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    const charElements = element.querySelectorAll('.char');
                    charElements.forEach((char, index) => {
                        setTimeout(() => {
                            char.style.animation = 'fadeInUp 0.4s ease forwards';
                        }, index * 50);
                    });
                    observer.disconnect();
                }
            });

            observer.observe(element);
        });
    }

    // Particle effects
    setupParticleEffects() {
        // Create floating particles
        const createParticles = (container, count = 20) => {
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: rgba(102, 126, 234, ${Math.random() * 0.5 + 0.2});
                    border-radius: 50%;
                    pointer-events: none;
                    animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 2}s;
                `;
                container.appendChild(particle);
            }
        };

        // Add particles to hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.position = 'relative';
            createParticles(heroSection, 15);
        }

        // Mouse trail effect
        let mouseTrail = [];
        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            // Limit trail length
            mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
            
            // Create trail particle
            if (Math.random() < 0.1) { // Reduce frequency
                const particle = document.createElement('div');
                particle.className = 'mouse-trail';
                particle.style.cssText = `
                    position: fixed;
                    width: 4px;
                    height: 4px;
                    background: rgba(102, 126, 234, 0.6);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${e.clientX}px;
                    top: ${e.clientY}px;
                    animation: trailFade 1s ease-out forwards;
                `;
                document.body.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        });
    }

    // Loading animations
    createLoadingAnimation() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <h3>Sky Engineer Academy</h3>
                <p>로딩 중...</p>
                <div class="loader-progress">
                    <div class="loader-bar"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Simulate loading progress
        const progressBar = loader.querySelector('.loader-bar');
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => loader.remove(), 500);
                }, 500);
            }
            progressBar.style.width = `${progress}%`;
        }, 100);
    }

    // Scroll reveal animation
    revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    // Chain animations
    chainAnimations(elements, delay = 200) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * delay);
        });
    }

    // Cleanup
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// SVG Path Animation
class SVGPathAnimator {
    constructor() {
        this.setupSVGAnimations();
    }

    setupSVGAnimations() {
        document.querySelectorAll('.animate-svg path').forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    path.style.animation = `drawPath 2s ease-in-out forwards`;
                    observer.disconnect();
                }
            });
            
            observer.observe(path);
        });
    }
}

// Morphing shapes animation
class MorphingShapes {
    constructor() {
        this.setupMorphing();
    }

    setupMorphing() {
        document.querySelectorAll('.morphing-shape').forEach(shape => {
            const paths = shape.querySelectorAll('path');
            if (paths.length > 1) {
                let currentPath = 0;
                setInterval(() => {
                    currentPath = (currentPath + 1) % paths.length;
                    paths.forEach((path, index) => {
                        path.style.opacity = index === currentPath ? '1' : '0';
                    });
                }, 3000);
            }
        });
    }
}

// Counter animation with easing
class CounterAnimator {
    static animateValue(element, start, end, duration, easing = 'easeOutCubic') {
        const startTimestamp = performance.now();
        
        const easingFunctions = {
            easeOutCubic: t => 1 - Math.pow(1 - t, 3),
            easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
            easeOutBounce: t => {
                const n1 = 7.5625;
                const d1 = 2.75;
                if (t < 1 / d1) return n1 * t * t;
                if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
                if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
                return n1 * (t -= 2.625 / d1) * t + 0.984375;
            }
        };

        const step = (timestamp) => {
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easingFunctions[easing](progress);
            const current = start + (end - start) * easedProgress;
            
            element.textContent = Math.floor(current);
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    }
}

// Initialize animation controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animationController = new AnimationController();
    const svgAnimator = new SVGPathAnimator();
    const morphingShapes = new MorphingShapes();
    
    // Add scroll listener for reveal animations
    window.addEventListener('scroll', () => {
        animationController.revealOnScroll();
    });
    
    // Add page load animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Add necessary CSS animations
const animationCSS = `
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        33% {
            transform: translateY(-10px) rotate(120deg);
        }
        66% {
            transform: translateY(5px) rotate(240deg);
        }
    }

    @keyframes trailFade {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }

    @keyframes drawPath {
        to {
            stroke-dashoffset: 0;
        }
    }

    .word, .char {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
    }

    .reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }

    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }

    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    }

    .loader-content {
        text-align: center;
        color: white;
    }

    .loader-spinner {
        width: 50px;
        height: 50px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    }

    .loader-progress {
        width: 200px;
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
        overflow: hidden;
        margin: 20px auto 0;
    }

    .loader-bar {
        height: 100%;
        background: white;
        border-radius: 2px;
        transition: width 0.3s ease;
        width: 0%;
    }

    .magnetic, .tilt, .ripple {
        transition: transform 0.2s ease;
        cursor: pointer;
    }

    .ripple {
        position: relative;
        overflow: hidden;
    }

    body.loaded .fade-in-up {
        animation-play-state: running;
    }
`;

// Inject animation CSS
const animationStyle = document.createElement('style');
animationStyle.textContent = animationCSS;
document.head.appendChild(animationStyle);

// Export classes for use in other scripts
window.AnimationController = AnimationController;
window.SVGPathAnimator = SVGPathAnimator;
window.MorphingShapes = MorphingShapes;
window.CounterAnimator = CounterAnimator;