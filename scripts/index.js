const openBtn = document.getElementById("open_btn");
const overlay = document.getElementById("overlay");

// 팝업 열기
openBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
});

// 팝업 닫기 (배경 클릭)
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.add("hidden");
    }
});