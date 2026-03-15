// 产品分类筛选
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // 更新标签样式
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // 筛选产品
        document.querySelectorAll('.product-item').forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 产品卡片交互
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
    });
});

// 查看详情按钮
document.querySelectorAll('.product-detail-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        // 这里可以添加打开产品详情的逻辑
        alert('产品详情功能开发中，请联系商务获取更多信息');
    });
});

// 添加淡入动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .product-item {
        animation: fadeInUp 0.5s ease forwards;
    }
    
    .product-item:nth-child(1) { animation-delay: 0.1s; }
    .product-item:nth-child(2) { animation-delay: 0.2s; }
    .product-item:nth-child(3) { animation-delay: 0.3s; }
    .product-item:nth-child(4) { animation-delay: 0.4s; }
    .product-item:nth-child(5) { animation-delay: 0.5s; }
    .product-item:nth-child(6) { animation-delay: 0.6s; }
    .product-item:nth-child(7) { animation-delay: 0.7s; }
    .product-item:nth-child(8) { animation-delay: 0.8s; }
    .product-item:nth-child(9) { animation-delay: 0.9s; }
`;
document.head.appendChild(style);