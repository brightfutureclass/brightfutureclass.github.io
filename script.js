// 1. Hiệu ứng cuộn trang (Scroll Animation)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-slide');
        }
    });
});

const hiddenElements = document.querySelectorAll('.animate-scroll');
hiddenElements.forEach((el) => observer.observe(el));

// 2. Xử lý Modal Popup (Click giáo viên hiện chi tiết)
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Đóng modal khi click ra ngoài vùng trắng
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// 3. Xử lý nút nổi (Floating Buttons)
function toggleLabel(element) {
    element.classList.toggle('active');
}
// --- TẠO HIỆU ỨNG NỀN ĐỘNG (Flying Icons) ---

document.addEventListener("DOMContentLoaded", function() {
    // 1. Tạo khung chứa
    const bgContainer = document.createElement('div');
    bgContainer.id = 'background-container';
    document.body.prepend(bgContainer);

    // 2. Danh sách các icon muốn hiển thị (Dùng FontAwesome)
    const icons = [
        'fa-star',           // Ngôi sao
        'fa-book-open',      // Sách mở
        'fa-pencil-alt',     // Bút chì
        'fa-graduation-cap', // Mũ cử nhân
        'fa-atom',           // Nguyên tử (Vật lý)
        'fa-calculator'      // Máy tính (Toán)
    ];

    // 3. Số lượng icon muốn tạo (Ví dụ: 25 cái)
    const amount = 25;

    for (let i = 0; i < amount; i++) {
        const icon = document.createElement('i');
        
        // Chọn ngẫu nhiên 1 icon trong danh sách
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        
        // Thêm class FontAwesome và class chuyển động
        icon.classList.add('fas', randomIcon, 'floating-item');

        // --- CẤU HÌNH NGẪU NHIÊN ---
        
        // Vị trí ngẫu nhiên (0% đến 100% màn hình)
        icon.style.left = Math.random() * 100 + 'vw';
        icon.style.top = Math.random() * 100 + 'vh';

        // Kích thước ngẫu nhiên (từ 10px đến 40px)
        const size = Math.random() * 30 + 10; 
        icon.style.fontSize = size + 'px';

        // Tốc độ bay ngẫu nhiên (từ 10 giây đến 30 giây) -> Tạo cảm giác cái nhanh cái chậm
        const duration = Math.random() * 20 + 10; 
        icon.style.animationDuration = duration + 's';

        // Độ trễ (để chúng không bay cùng lúc)
        icon.style.animationDelay = Math.random() * 5 + 's';

        // Thêm vào khung chứa
        bgContainer.appendChild(icon);
    }
});
