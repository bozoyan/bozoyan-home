/**
 * 缪斯个人主页 主JavaScript文件
 * 整合所有模块和功能
 */

// 调试信息
console.log('脚本开始加载...');

// 导入配置文件和模块
import { CONFIG } from './config.js';
import { applyConfig } from './modules/config-loader.js';
import { initAnimations } from './modules/animations.js';
import { detectDevice, lazyLoadImages } from './modules/utils.js';

// 错误处理和初始化
(function init() {
    try {
        console.log('配置文件加载成功:', CONFIG ? '成功' : '配置为空');
        console.log('模块导入成功');
        
        // 获取设备信息
        const deviceInfo = detectDevice();
        console.log('设备信息:', deviceInfo);
        
        // 加载完成后初始化
        document.addEventListener('DOMContentLoaded', () => {
            try {
                console.log('DOM加载完成，开始初始化...');
                
                // 应用配置
                applyConfig();
                console.log('配置应用完成');
                
                // 初始化动画效果
                initAnimations();
                console.log('动画初始化完成');
                
                // 延迟加载图片
                lazyLoadImages();
                console.log('图片延迟加载配置完成');
                
                // 隐藏加载动画
                const loadingScreen = document.querySelector('.loading-screen');
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }
                
                // 设置滚动进度条
                window.addEventListener('scroll', () => {
                    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                    const clientHeight = document.documentElement.clientHeight;
                    
                    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
                    const progressBar = document.querySelector('.progress-bar');
                    if (progressBar) {
                        progressBar.style.width = scrolled + '%';
                    }
                });
                
                // 初始化社交媒体弹窗
                initModal();
                
                console.log('初始化完成！');
            } catch (error) {
                console.error('初始化过程中发生错误:', error);
            }
        });
    } catch (error) {
        console.error('导入或配置过程中发生错误:', error);
    }
})();

// 初始化弹窗功能
function initModal() {
    const modal = document.getElementById('social-modal');
    const btn = document.querySelector('.subscribe-btn');
    const closeBtn = modal && modal.querySelector('.close');
    const body = document.body;

    if (btn && modal && closeBtn) {
        // 打开弹窗的点击事件
        btn.onclick = function() {
            modal.style.display = 'block';
            body.style.overflow = 'hidden'; // 锁定背景滚动
            
            // 添加一个小延迟以确保display:block已经应用
            setTimeout(() => {
                modal.classList.add('active');
                
                // 确保弹窗始终从顶部开始显示
                modal.scrollTop = 0;
            }, 10);
        }

        // 关闭按钮的点击事件
        closeBtn.onclick = function() {
            closeModal();
        }

        // 点击弹窗外部区域关闭弹窗
        modal.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
        
        // 关闭弹窗的函数
        function closeModal() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                body.style.overflow = ''; // 恢复背景滚动
            }, 300);
        }
    }
} 