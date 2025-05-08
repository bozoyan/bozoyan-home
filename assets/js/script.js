/**
 * 缪斯个人主页 JavaScript脚本
 * 用于实现页面加载动画、交互效果和其他功能
 */

// 应用配置文件中的设置
function applyConfig() {
    try {
        if (typeof CONFIG === 'undefined') {
            console.error('配置文件未加载或格式不正确');
            return;
        }
        
        // 应用基本信息
        if (CONFIG.basic) {
            document.title = CONFIG.basic.name || '缪斯';
            
            const nameElement = document.querySelector('.profile h1');
            if (nameElement) nameElement.textContent = CONFIG.basic.name || '缪斯';
            
            const titleElement = document.querySelector('.profile .title span, .profile .title');
            if (titleElement) {
                const titleText = document.createTextNode(CONFIG.basic.title || 'AI应用开发工程师');
                if (titleElement.querySelector('i')) {
                    titleElement.innerHTML = '';
                    const icon = document.createElement('i');
                    icon.className = 'fas fa-code';
                    titleElement.appendChild(icon);
                    titleElement.appendChild(document.createTextNode(' '));
                    titleElement.appendChild(titleText);
                } else {
                    titleElement.textContent = CONFIG.basic.title || 'AI应用开发工程师';
                }
            }
            
            const locationElement = document.querySelector('.location span');
            if (locationElement) locationElement.textContent = CONFIG.basic.location || '中国，成都';
            
            const avatarElement = document.querySelector('.avatar img');
            if (avatarElement) avatarElement.src = CONFIG.basic.avatar || './Muse.jpg';
        }
        
        // 应用联系方式
        if (CONFIG.contact) {
            const contactTextElement = document.querySelector('.contact-text p');
            if (contactTextElement) contactTextElement.textContent = CONFIG.contact.contactText || '欢迎添加个人联系方式互相学习！';
            
            // 更新微信和公众号图片
            const wechatImg = document.querySelector('#wechat-qr img');
            if (wechatImg) wechatImg.src = CONFIG.contact.wechat || './Wechat.jpg';
            
            const publicAccountImg = document.querySelector('#gzh-qr img');
            if (publicAccountImg) publicAccountImg.src = CONFIG.contact.publicAccount || './公众号.jpg';
            
            // 更新社交媒体链接
            const blogLink = document.querySelector('.social-link.blog');
            if (blogLink && CONFIG.contact.blog) {
                blogLink.href = CONFIG.contact.blog;
            }
            
            const githubLink = document.querySelector('.social-link.github');
            if (githubLink && CONFIG.contact.github) {
                githubLink.href = CONFIG.contact.github;
            }
        }
        
        // 应用关于我内容
        if (CONFIG.about) {
            const aboutElement = document.querySelector('.about-widget .widget-content p');
            if (aboutElement) aboutElement.textContent = CONFIG.about.content || '';
        }
        
        // 应用核心理念
        if (CONFIG.philosophy) {
            const philosophyElement = document.querySelector('.philosophy-widget .belief-content p');
            if (philosophyElement) philosophyElement.textContent = CONFIG.philosophy.content || '';
        }
        
        // 应用技术能力
        if (CONFIG.skills && Array.isArray(CONFIG.skills)) {
            const skillsContainer = document.querySelector('.skills-list');
            if (skillsContainer) {
                skillsContainer.innerHTML = '';
                CONFIG.skills.forEach(skill => {
                    const skillItem = document.createElement('div');
                    skillItem.className = 'skill-item';
                    
                    const icon = document.createElement('i');
                    icon.className = skill.icon || 'fas fa-check';
                    
                    const span = document.createElement('span');
                    span.textContent = skill.name || '';
                    
                    skillItem.appendChild(icon);
                    skillItem.appendChild(span);
                    skillsContainer.appendChild(skillItem);
                });
            }
        }
        
        // 应用技术栈
        if (CONFIG.techStack && Array.isArray(CONFIG.techStack)) {
            const techStackContainer = document.querySelector('.tech-stack');
            if (techStackContainer) {
                techStackContainer.innerHTML = '';
                CONFIG.techStack.forEach(tech => {
                    const techItem = document.createElement('div');
                    techItem.className = 'tech-item';
                    
                    const icon = document.createElement('i');
                    icon.className = tech.icon || 'fas fa-code';
                    
                    const span = document.createElement('span');
                    span.textContent = tech.name || '';
                    
                    techItem.appendChild(icon);
                    techItem.appendChild(span);
                    techStackContainer.appendChild(techItem);
                });
            }
        }
        
        // 应用项目经验
        if (CONFIG.projects && Array.isArray(CONFIG.projects)) {
            const projectsContainer = document.querySelector('.projects-list');
            if (projectsContainer) {
                projectsContainer.innerHTML = '';
                
                // 只显示前三个项目
                const initialProjectsCount = 3;
                const visibleProjects = CONFIG.projects.slice(0, initialProjectsCount);
                const hiddenProjects = CONFIG.projects.slice(initialProjectsCount);
                
                // 先添加显示的项目
                visibleProjects.forEach(project => {
                    const projectItem = document.createElement('div');
                    projectItem.className = 'project-item';
                    
                    const projectIcon = document.createElement('div');
                    projectIcon.className = 'project-icon';
                    
                    const icon = document.createElement('i');
                    icon.className = project.icon || 'fas fa-project-diagram';
                    projectIcon.appendChild(icon);
                    
                    const projectInfo = document.createElement('div');
                    projectInfo.className = 'project-info';
                    
                    const title = document.createElement('h3');
                    title.textContent = project.title || '';
                    
                    const description = document.createElement('p');
                    description.textContent = project.description || '';
                    
                    projectInfo.appendChild(title);
                    projectInfo.appendChild(description);
                    
                    projectItem.appendChild(projectIcon);
                    projectItem.appendChild(projectInfo);
                    projectsContainer.appendChild(projectItem);
                });
                
                // 如果有更多项目，显示"查看更多"按钮
                const toggleBtn = document.querySelector('.toggle-projects-btn');
                if (toggleBtn && hiddenProjects.length > 0) {
                    // 显示切换按钮
                    toggleBtn.parentElement.style.display = 'block';
                    
                    // 添加点击事件
                    toggleBtn.addEventListener('click', function() {
                        const projectsWidget = document.querySelector('.projects-widget');
                        const isExpanded = projectsWidget.classList.toggle('projects-expanded');
                        
                        if (isExpanded && !projectsWidget.hasAttribute('data-loaded')) {
                            // 第一次展开时加载隐藏项目
                            hiddenProjects.forEach(project => {
                                const projectItem = document.createElement('div');
                                projectItem.className = 'project-item hidden-project';
                                
                                const projectIcon = document.createElement('div');
                                projectIcon.className = 'project-icon';
                                
                                const icon = document.createElement('i');
                                icon.className = project.icon || 'fas fa-project-diagram';
                                projectIcon.appendChild(icon);
                                
                                const projectInfo = document.createElement('div');
                                projectInfo.className = 'project-info';
                                
                                const title = document.createElement('h3');
                                title.textContent = project.title || '';
                                
                                const description = document.createElement('p');
                                description.textContent = project.description || '';
                                
                                projectInfo.appendChild(title);
                                projectInfo.appendChild(description);
                                
                                projectItem.appendChild(projectIcon);
                                projectItem.appendChild(projectInfo);
                                projectsContainer.appendChild(projectItem);
                            });
                            
                            // 标记已加载
                            projectsWidget.setAttribute('data-loaded', 'true');
                        }
                        
                        // 控制已添加的隐藏项目的显示和隐藏
                        const hiddenItems = projectsContainer.querySelectorAll('.hidden-project');
                        hiddenItems.forEach(item => {
                            if (isExpanded) {
                                item.style.display = 'flex';
                                // 添加淡入动画
                                setTimeout(() => {
                                    item.style.opacity = '1';
                                    item.style.transform = 'translateY(0)';
                                }, 10);
                            } else {
                                item.style.opacity = '0';
                                item.style.transform = 'translateY(10px)';
                                // 等待动画完成后隐藏
                                setTimeout(() => {
                                    item.style.display = 'none';
                                }, 300);
                            }
                        });
                    });
                } else if (toggleBtn) {
                    // 如果项目数量不足，隐藏切换按钮
                    toggleBtn.parentElement.style.display = 'none';
                }
            }
        }
        
        // 应用版权信息
        if (CONFIG.copyright) {
            const copyrightYearElement = document.querySelector('.copyright .year');
            if (copyrightYearElement) copyrightYearElement.textContent = CONFIG.copyright.year || '2021 - 2025';
            
            const copyrightNameElement = document.querySelector('.copyright .name');
            if (copyrightNameElement) {
                copyrightNameElement.textContent = CONFIG.copyright.name || '缪斯';
                if (CONFIG.copyright.url) {
                    const parent = copyrightNameElement.parentElement;
                    if (parent && parent.tagName === 'A') {
                        parent.href = CONFIG.copyright.url;
                    }
                }
            }
            
            // 备案信息
            if (CONFIG.copyright.beian) {
                const icpElement = document.querySelector('.beian .icp');
                if (icpElement) icpElement.textContent = CONFIG.copyright.beian.icp || '';
                
                const gonganElement = document.querySelector('.beian .gongan');
                if (gonganElement) gonganElement.textContent = CONFIG.copyright.beian.gongan || '';
            }
        }
        
        // 应用个人产品部分
        if (CONFIG.products) {
            const productsContainer = document.querySelector('.products-widget .widget-content');
            if (productsContainer) {
                // 如果设置为即将推出，则显示"静待..."
                if (CONFIG.products.comingSoon) {
                    const comingSoonDiv = document.createElement('div');
                    comingSoonDiv.className = 'coming-soon';
                    
                    const iconDiv = document.createElement('div');
                    iconDiv.className = 'coming-soon-icon';
                    
                    const icon = document.createElement('i');
                    icon.className = 'fas fa-hourglass-half';
                    iconDiv.appendChild(icon);
                    
                    const textDiv = document.createElement('div');
                    textDiv.className = 'coming-soon-text';
                    
                    const text = document.createElement('p');
                    text.textContent = '静待...';
                    textDiv.appendChild(text);
                    
                    comingSoonDiv.appendChild(iconDiv);
                    comingSoonDiv.appendChild(textDiv);
                    
                    // 清空内容并添加新元素
                    productsContainer.innerHTML = '';
                    productsContainer.appendChild(comingSoonDiv);
                } else if (CONFIG.products.productsList && CONFIG.products.productsList.length > 0) {
                    // 如果有产品列表，则显示产品列表
                    const productsList = document.createElement('div');
                    productsList.className = 'products-list';
                    
                    CONFIG.products.productsList.forEach(product => {
                        const productItem = document.createElement('div');
                        productItem.className = 'product-item';
                        
                        const productIcon = document.createElement('div');
                        productIcon.className = 'product-icon';
                        
                        const icon = document.createElement('i');
                        icon.className = product.icon || 'fas fa-gift';
                        productIcon.appendChild(icon);
                        
                        const productInfo = document.createElement('div');
                        productInfo.className = 'product-info';
                        
                        const title = document.createElement('h3');
                        title.textContent = product.title || '';
                        
                        const description = document.createElement('p');
                        description.textContent = product.description || '';
                        
                        productInfo.appendChild(title);
                        productInfo.appendChild(description);
                        
                        const productLink = document.createElement('a');
                        productLink.href = product.url || '#';
                        productLink.className = 'product-link';
                        productLink.innerHTML = '<i class="fas fa-external-link-alt"></i>';
                        
                        productItem.appendChild(productIcon);
                        productItem.appendChild(productInfo);
                        productItem.appendChild(productLink);
                        
                        productsList.appendChild(productItem);
                    });
                    
                    // 清空内容并添加新元素
                    productsContainer.innerHTML = '';
                    productsContainer.appendChild(productsList);
                }
            }
        }
        
        // 应用主题颜色
        if (CONFIG.theme) {
            const root = document.documentElement;
            for (const [key, value] of Object.entries(CONFIG.theme)) {
                // 将驼峰式命名转换为CSS变量命名格式
                const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
                root.style.setProperty(cssVarName, value);
            }
        }
        
        console.log('配置已成功应用');
    } catch (error) {
        console.error('应用配置时出错:', error);
    }
}

// 页面加载动画
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
});

// 滚动动画
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

document.addEventListener('DOMContentLoaded', () => {
    try {
        // 为卡片和技术栈添加淡入效果
        const elements = document.querySelectorAll('.card, .tech-stack, .widget-container');
        if (elements.length > 0) {
            elements.forEach(el => {
                el.classList.add('fade-in');
        observer.observe(el);
            });
        }

        // 滚动进度条
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

        // 处理社交媒体弹窗
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
    } catch (error) {
        console.error('DOMContentLoaded 处理错误:', error);
    }
});

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

// 初始化所有函数
function init() {
    try {
        addScrollToTopButton();
        addSmoothScrolling();
        addHoverEffects();
    } catch (error) {
        console.error('初始化错误:', error);
    }
}

// 在DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        init();
        applyConfig(); // 应用配置
    });
} else {
    init();
    applyConfig(); // 应用配置
}

// 添加鼠标跟随效果
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