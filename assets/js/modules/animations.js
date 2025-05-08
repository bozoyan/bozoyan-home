/**
 * 动画效果模块
 * 负责页面中的各种动画和过渡效果
 */

// 页面加载动画
function setupLoadingAnimation() {
    window.addEventListener('load', () => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    });
}

// 滚动动画
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1, // 当目标元素10%的部分可见时触发回调
        rootMargin: '0px 0px -50px 0px' // 底部偏移50px，让元素提前触发动画
    });
    
    function initFadeInElements() {
        const elements = document.querySelectorAll('.card, .tech-stack, .widget-container');
        if (elements.length > 0) {
            elements.forEach(el => {
                el.classList.add('fade-in');
                observer.observe(el);
            });
        }
    }
    
    // 在DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFadeInElements);
    } else {
        initFadeInElements();
    }
}

// 滚动进度条
function setupProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            try {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                if (height > 0) { // 防止除以零
                    const scrolled = (winScroll / height) * 100;
                    progressBar.style.width = scrolled + '%';
                }
            } catch (error) {
                console.error('滚动进度条处理错误:', error);
            }
        });
    }
}

// 社交媒体弹窗动画
function setupModalAnimations() {
    const modal = document.getElementById('social-modal');
    const btn = document.querySelector('.subscribe-btn');
    const closeBtn = modal && modal.querySelector('.close');

    if (btn && modal && closeBtn) {
        btn.onclick = function() {
            modal.style.display = 'block';
            // 添加一个小延迟以确保display:block已经应用
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        }

        closeBtn.onclick = function() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        }
    }
}

// 添加滚动到顶部按钮
function addScrollToTopButton() {
    try {
        // 检查是否已经存在按钮，避免重复创建
        if (document.querySelector('.scroll-top-btn')) {
            return;
        }
        
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.className = 'scroll-top-btn';
        scrollTopBtn.title = '回到顶部';
        scrollTopBtn.setAttribute('aria-label', '回到顶部');
        document.body.appendChild(scrollTopBtn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } catch (error) {
        console.error('添加滚动到顶部按钮错误:', error);
    }
}

// 为链接添加平滑滚动效果
function addSmoothScrolling() {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                // 不处理空链接
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('添加平滑滚动效果错误:', error);
    }
}

// 添加鼠标悬停效果
function addHoverEffects() {
    try {
        // 为技能项添加悬停效果
        document.querySelectorAll('.skill-item, .tech-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // 为项目卡片添加悬停效果
        document.querySelectorAll('.project-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.01)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    } catch (error) {
        console.error('添加鼠标悬停效果错误:', error);
    }
}

// 添加鼠标跟随效果
function addMouseFollowEffect() {
    document.addEventListener('mousemove', (e) => {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        document.body.appendChild(cursor);

        setTimeout(() => {
            cursor.remove();
        }, 1000);
    });
}

// 初始化所有动画效果
function initAnimations() {
    setupLoadingAnimation();
    setupScrollAnimations();
    setupProgressBar();
    setupModalAnimations();
    addScrollToTopButton();
    addSmoothScrolling();
    addHoverEffects();
    addMouseFollowEffect();
}

// 导出模块功能
export {
    initAnimations,
    setupLoadingAnimation,
    setupScrollAnimations,
    setupProgressBar,
    setupModalAnimations,
    addScrollToTopButton,
    addSmoothScrolling,
    addHoverEffects,
    addMouseFollowEffect
}; 