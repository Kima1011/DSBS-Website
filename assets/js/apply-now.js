/* ==========================================================================
   Admin Business School (DSBS) - Apply Now Interactive Logic
   Direct Replica of Apply Now Page
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. STICKY NAVBAR LOGIC
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 2. MOBILE MENU DRAWER
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const backdrop = document.getElementById('backdrop');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    const openMobileMenu = () => {
        if (mobileNav && backdrop) {
            mobileNav.classList.add('open');
            backdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMobileMenu = () => {
        if (mobileNav && backdrop) {
            mobileNav.classList.remove('open');
            backdrop.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    if (menuToggleBtn && menuCloseBtn && mobileNav && backdrop) {
        menuToggleBtn.addEventListener('click', openMobileMenu);
        menuCloseBtn.addEventListener('click', closeMobileMenu);
        backdrop.addEventListener('click', closeMobileMenu);

        mobileNavItems.forEach(item => {
            item.addEventListener('click', closeMobileMenu);
        });
    }

    // 3. SMOOTH NAVIGATION WITH NAVBAR OFFSET
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;

            const targetSection = document.querySelector(href);
            if (targetSection) {
                e.preventDefault();
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const targetPosition = targetSection.offsetTop - navbarHeight - 10;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. FAQ ACCORDION INTERACTIVITY
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(questionBtn => {
        questionBtn.addEventListener('click', () => {
            const faqItem = questionBtn.parentElement;
            const faqAnswer = questionBtn.nextElementSibling;
            const isActive = faqItem.classList.contains('active');

            // Close other items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const ans = item.querySelector('.faq-answer');
                if (ans) ans.style.maxHeight = null;
            });

            // Toggle selected item
            if (!isActive && faqAnswer) {
                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            }
        });
    });

    // 5. NATIVE APPLICATION FORM SUBMISSION HANDLER
    const nativeForm = document.getElementById('dsbs-apply-native-form');
    const successBanner = document.getElementById('form-success-banner');

    if (nativeForm) {
        nativeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = nativeForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Processing Application...';
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
                if (successBanner) {
                    successBanner.classList.add('active');
                    successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                nativeForm.reset();
            }, 1000);
        });
    }
});
