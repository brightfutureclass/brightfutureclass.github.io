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
