document.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector("#menu-icon"); // Added quotes for ID selector
  let navbar = document.querySelector(".navbar"); // Added quotes for class selector

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  };

  // Typing Text Code
  const typed = new Typed(".multiple-text", {
    // Added '.' for class selector
    strings: [
      "Physical Fitness",
      "Weight Lifting",
      "Strength Training",
      "Fat Loss",
      "Boxing",
      "Running",
    ],
    typeSpeed: 50,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
});
// Blog Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".blog-slider");
  const items = document.querySelectorAll(".blog-item");
  const dotsContainer = document.querySelector(".carousel-dots");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  let autoPlayInterval;
  const itemsPerPage = 4;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const autoPlayDelay = 3000; // 3 giây

  // Create dots
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToPage(i);
      resetAutoPlay(); // Reset autoplay khi người dùng click dot
    });
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  function updateSlider() {
    const offset = -currentIndex * (100 / itemsPerPage);
    slider.style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });

    // Hide/show navigation buttons
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex >= totalPages - 1 ? "none" : "block";
  }

  function goToPage(pageIndex) {
    if (pageIndex < 0) {
      currentIndex = totalPages - 1;
    } else if (pageIndex >= totalPages) {
      currentIndex = 0;
    } else {
      currentIndex = pageIndex;
    }
    updateSlider();
  }

  function nextPage() {
    goToPage(currentIndex + 1);
  }

  function prevPage() {
    goToPage(currentIndex - 1);
  }

  // Tự động chuyển slide
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextPage, autoPlayDelay);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Sự kiện click nút
  prevBtn.addEventListener("click", () => {
    prevPage();
    resetAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    nextPage();
    resetAutoPlay();
  });

  // Dừng autoplay khi hover vào slider
  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);

  // Dừng autoplay khi hover vào nút điều hướng
  prevBtn.addEventListener("mouseenter", stopAutoPlay);
  nextBtn.addEventListener("mouseenter", stopAutoPlay);
  prevBtn.addEventListener("mouseleave", startAutoPlay);
  nextBtn.addEventListener("mouseleave", startAutoPlay);

  // Initialize
  updateSlider();
  startAutoPlay();

  // Responsive adjustments
  function handleResize() {
    const width = window.innerWidth;
    if (width < 768) {
      // Adjust for mobile - show 1 item per page
      document.querySelectorAll(".blog-item").forEach((item) => {
        item.style.minWidth = "100%";
      });
    } else if (width < 992) {
      // Adjust for tablet - show 2 items per page
      document.querySelectorAll(".blog-item").forEach((item) => {
        item.style.minWidth = "50%";
      });
    } else {
      // Desktop - show 4 items per page
      document.querySelectorAll(".blog-item").forEach((item) => {
        item.style.minWidth = "25%";
      });
    }
    updateSlider();
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
// Blog Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".blog-slider");
  const items = document.querySelectorAll(".blog-item");
  const dotsContainer = document.querySelector(".carousel-dots");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  let autoPlayInterval;
  const itemsPerPage = 4;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const autoPlayDelay = 1500; // 3 giây

  // Tạo dots
  function createDots() {
    dotsContainer.innerHTML = ""; // Xóa dots cũ
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToPage(i);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  createDots();
  const dots = document.querySelectorAll(".dot");

  function updateSlider() {
    const offset = -currentIndex * (100 / itemsPerPage);
    slider.style.transform = `translateX(${offset}%)`;

    // Cập nhật dot active
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToPage(pageIndex) {
    if (pageIndex < 0) {
      currentIndex = totalPages - 1;
    } else if (pageIndex >= totalPages) {
      currentIndex = 0;
    } else {
      currentIndex = pageIndex;
    }
    updateSlider();
  }

  function nextPage() {
    goToPage(currentIndex + 1);
  }

  function prevPage() {
    goToPage(currentIndex - 1);
  }

  // Tự động chuyển slide
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextPage, autoPlayDelay);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Sự kiện click nút
  prevBtn.addEventListener("click", () => {
    prevPage();
    resetAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    nextPage();
    resetAutoPlay();
  });

  // Hiệu ứng phóng to ảnh khi hover
  items.forEach((item) => {
    const img = item.querySelector("img");
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });

  // Initialize
  updateSlider();
  startAutoPlay();

  // Responsive adjustments
  function handleResize() {
    const width = window.innerWidth;
    let newItemsPerPage = 4;

    if (width < 768) {
      newItemsPerPage = 1;
    } else if (width < 992) {
      newItemsPerPage = 2;
    }

    // Cập nhật số items mỗi trang
    if (newItemsPerPage !== itemsPerPage) {
      currentIndex = 0;
      createDots();
      updateSlider();
    }

    // Điều chỉnh kích thước item
    document.querySelectorAll(".blog-item").forEach((item) => {
      item.style.minWidth = `${100 / newItemsPerPage}%`;
    });
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
// Hiển thị nút khi cuộn trang
window.addEventListener("scroll", function () {
  const arrow = document.querySelector(".fixed-arrow");
  if (window.pageYOffset > 300) {
    arrow.classList.add("show");
  } else {
    arrow.classList.remove("show");
  }
});

// Xử lý click để trở về đầu trang
document.querySelector(".fixed-arrow").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Cuộn mượt
  });
});
