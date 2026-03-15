// 搜索数据
const searchData = [
    { title: '正装皮鞋', keywords: ['正装', '牛津', '德比', '孟克', 'formal', 'oxford'], url: 'products-formal.html', desc: '牛津鞋 · 德比鞋 · 孟克鞋' },
    { title: '商务休闲', keywords: ['商务', '休闲', '乐福', '豆豆鞋', 'casual', 'loafer'], url: 'products-formal.html', desc: '乐福鞋 · 豆豆鞋 · 马衔扣' },
    { title: '休闲鞋', keywords: ['休闲', '运动', '帆布鞋', '板鞋', 'sneakers'], url: 'products-casual-shoes.html', desc: '运动休闲 · 帆布鞋 · 板鞋' },
    { title: 'OEM定制', keywords: ['OEM', '定制', '来样', '来图', 'odm'], url: 'services.html', desc: '专业OEM/ODM定制服务' },
    { title: 'ODM设计', keywords: ['ODM', '设计', '开发'], url: 'services.html', desc: '从设计到生产一站式解决方案' },
    { title: '关于我们', keywords: ['关于', '公司', '品牌', 'about'], url: 'about.html', desc: '了解铁狮丹尼品牌故事' },
    { title: '商务合作', keywords: ['联系', '合作', 'contact'], url: 'contact.html', desc: '联系我们获取报价' },
    { title: '企业服务', keywords: ['服务', '物流', '质量'], url: 'services.html', desc: 'OEM/ODM/物流/质量保证' },
    { title: '黑色牛津鞋', keywords: ['黑色牛津', '正装鞋'], url: 'products-formal.html', desc: '经典黑色牛津鞋' },
    { title: '乐福鞋', keywords: ['乐福鞋', '豆豆鞋'], url: 'products-formal.html', desc: '商务休闲乐福鞋' }
];

// 打开搜索模态框
function openSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            const input = document.getElementById('searchInput');
            if (input) input.focus();
        }, 100);
    }
}

// 关闭搜索模态框
function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const input = document.getElementById('searchInput');
        if (input) input.value = '';
        const results = document.getElementById('searchResults');
        if (results) results.innerHTML = getSearchHint();
    }
}

// 快速搜索
function quickSearch(keyword) {
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = keyword;
        performSearch();
    }
}

// 执行搜索
function performSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    if (!input || !results) return;
    
    const query = input.value.trim().toLowerCase();
    
    if (query === '') {
        results.innerHTML = getSearchHint();
        return;
    }
    
    const matched = searchData.filter(item => {
        if (item.title.toLowerCase().includes(query)) return true;
        if (item.keywords.some(k => k.toLowerCase().includes(query))) return true;
        return false;
    });
    
    if (matched.length === 0) {
        results.innerHTML = '<div class="search-no-result"><p>未找到相关结果</p><p class="search-suggest">试试其他关键词</p></div>';
    } else {
        let html = '<ul class="search-result-list">';
        matched.forEach(item => {
            html += `<li><a href="${item.url}" class="search-result-item">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-desc">${item.desc}</div>
            </a></li>`;
        });
        html += '</ul>';
        results.innerHTML = html;
    }
}

// 获取搜索提示
function getSearchHint() {
    return `<div class="search-hint">
        <p>输入关键词搜索产品</p>
        <div class="search-tags">
            <span class="search-tag" onclick="quickSearch('正装')">正装</span>
            <span class="search-tag" onclick="quickSearch('商务')">商务</span>
            <span class="search-tag" onclick="quickSearch('休闲')">休闲</span>
            <span class="search-tag" onclick="quickSearch('牛津')">牛津</span>
            <span class="search-tag" onclick="quickSearch('乐福')">乐福</span>
            <span class="search-tag" onclick="quickSearch('定制')">定制</span>
        </div>
    </div>`;
}

// 监听搜索输入
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }
    
    // ESC键关闭搜索
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSearchModal();
        }
    });
});

// 产品数据
const products = {
    1: {
        name: '经典黑色牛津',
        desc: '采用意大利进口牛皮，固特异工艺制作。适合商务正装场合，展现专业形象。支持批量定制，起订量100双。可根据客户需求调整材质、颜色、尺寸等参数。',
        price: '批发价询价',
        color: '#2C1810'
    },
    2: {
        name: '棕色孟克鞋',
        desc: '选用头层牛皮，单银扣设计简约大方。适合商务休闲场合，款式经典。支持来样定制、来图定制等多种定制方式。专业团队一对一跟进，确保产品质量。',
        price: '批发价询价',
        color: '#4A3728'
    },
    3: {
        name: '绒面乐福鞋',
        desc: '采用优质麂皮材质，马衔扣设计经典时尚。适合休闲商务场合。支持批量生产，交期15-20天。可根据客户需求定制品牌logo，提供专属包装。',
        price: '批发价询价',
        color: '#6B5B4F'
    },
    4: {
        name: '黑色切尔西靴',
        desc: '光面皮革打造，拉链设计方便穿脱。适合秋冬季节穿着。支持小批量定制，起订量50双。提供多种颜色和材质选择，满足不同客户需求。',
        price: '批发价询价',
        color: '#2C1810'
    }
};

// 打开产品详情模态框
function openProductModal(element) {
    const productCard = element.closest('.product-card');
    const productIndex = Array.from(document.querySelectorAll('.product-card')).indexOf(productCard) + 1;
    const product = products[productIndex];
    
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');
    const modalShoe = document.querySelector('.modal-shoe-display');
    
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = product.price;
    modalShoe.style.background = product.color;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭产品详情模态框
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 点击模态框外部关闭
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('modal-overlay')) {
        closeProductModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

// 尺码选择
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// 产品卡片鼠标跟随效果
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有卡片添加滚动动画
document.querySelectorAll('.collection-card, .product-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// 添加数字计数动画
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    // 年份不需要加+号
    const isYear = target <= 2100 && target >= 1900;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isYear ? target : target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// 品牌故事数字动画
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                // 非数字（如IT）不参与动画
                if (!isNaN(target)) {
                    animateNumber(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.getElementById('about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// 鼠标悬停动画增强
document.querySelectorAll('.collection-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 为Hero区域添加入场动画
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = '1';
    }
    
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.opacity = '1';
    }
    
    // 触发一次滚动检查
    window.dispatchEvent(new Event('scroll'));
});

// 添加触摸滑动支持（移动端）
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const modal = document.getElementById('productModal');
    if (modal.classList.contains('active')) {
        const swipeDistance = touchEndX - touchStartX;
        if (swipeDistance > 100) {
            // 向右滑动关闭
            closeProductModal();
        }
    }
}

// 控制台彩蛋
console.log('%c 铁狮丹尼 ', 'background: #D4AF37; color: #0a0a0a; font-size: 24px; font-weight: bold; padding: 10px 20px;');
console.log('%c 奢华传承 · 匠心工艺 ', 'color: #D4AF37; font-size: 14px; letter-spacing: 2px;');

// Hero 轮播功能
let currentSlide = 0;
const totalSlides = 3;
let carouselInterval;

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
}

function startCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        carouselInterval = setInterval(nextSlide, 4000);
    }
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// 页面加载后启动轮播
document.addEventListener('DOMContentLoaded', function() {
    startCarousel();
    
    // 鼠标悬停时暂停轮播
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
    }
});