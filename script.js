document.addEventListener("DOMContentLoaded", () => {
  const content = {
    KR: {
      nav: {
        about: "소개",
        features: "특징",
        simulations: "시뮬레이션",
        contact: "문의하기",
        companyName: "인천 로보틱스",
      },
      hero: {
        headline: "가장 합리적인 창고 로봇 솔루션",
        subtext:
          "인천 로보틱스는 혁신적인 기술로 물류 자동화의 새로운 기준을 제시합니다. 효율성과 정확성을 극대화하여 귀하의 비즈니스를 성장시키세요.",
      },
      features: { title: "주요 특징" },
      simulations: {
        title: "시뮬레이션",
        subtext:
          "실제 환경과 동일한 3D 시뮬레이션을 통해 로봇의 움직임을 미리 확인해보세요.",
        btnText: "시뮬레이션 체험하기",
        videoAlt: "회사 소개 영상",
      },
      contact: {
        title: "문의하기",
        subtext:
          "인천 로보틱스와 함께 물류 혁신을 시작하세요. 궁금한 점이 있으시다면 언제든 문의해 주세요.",
        addressLabel: "주소",
        company: "회사명",
        contactInfo: "연락처 및 이메일",
        address: "주소",
        message: "메시지",
        submit: "보내기",
        company_placeholder: "회사명을 입력하세요",
        contactInfo_placeholder: "연락처 및 이메일을 입력하세요",
        address_placeholder: "주소를 입력하세요",
        message_placeholder: "내용을 입력하세요",
        footer: {
          companyName: "인천 로보틱스",
          companyAddr: "인천광역시 연수구 송도동",
          email: "admin@incheonrobotics.com",
        },
      },
    },
    EN: {
      nav: {
        about: "About",
        features: "Features",
        simulations: "Simulations",
        contact: "Contact",
        companyName: "Incheon Robotics",
      },
      hero: {
        headline: "The Most Affordable Warehouse Robot Solution",
        subtext:
          "Incheon Robotics sets a new standard for logistics automation with innovative technology. Maximize efficiency and accuracy to grow your business.",
      },
      features: { title: "Features" },
      simulations: {
        title: "Simulations",
        subtext:
          "Check the robot's movement in advance through a 3D simulation identical to the real environment.",
        btnText: "Try Simulation",
        videoAlt: "Company Introduction Video",
      },
      contact: {
        title: "Contact Us",
        subtext:
          "Start logistics innovation with Incheon Robotics. If you have any questions, please feel free to contact us.",
        addressLabel: "Address",
        company: "Company Name",
        contactInfo: "Contact & Email",
        address: "Address",
        message: "Message",
        submit: "Send",
        company_placeholder: "Enter company name",
        contactInfo_placeholder: "Enter contact info & email",
        address_placeholder: "Enter address",
        message_placeholder: "Type your message here",
        footer: {
          companyName: "Incheon Robotics",
          companyAddr: "Songdo-dong, Yeonsu-gu, Incheon, Korea",
          email: "admin@incheonrobotics.com",
        },
      },
    },
  };

  const featuresData = [
    {
      id: 0,
      iconImage: "./assets/Icon_1.png",
      title: { KR: "ASRS 물류로봇", EN: "ASRS Logistics Robot" },
      desc: {
        KR: "낮은 전력 소비로 작동하는 빠르고 정확한 물류 로봇입니다",
        EN: "Fast and accurate logistics robot operating with low power consumption",
      },
      image: "./assets/Robot_Expand_6.png",
    },
    {
      id: 1,
      iconImage: "./assets/Icon_2.png",
      title: { KR: "ASRS 물류로봇(패널 상승)", EN: "ASRS Robot (Panel Up)" },
      desc: {
        KR: "최대 30kg까지 물류를 저장하고 운송합니다",
        EN: "Stores and transports up to 30kg of logistics",
      },
      image: "./assets/Robot_Expand_7.png",
    },
    {
      id: 2,
      iconImage: "./assets/Icon_3.png",
      title: { KR: "ASRS 물류로봇(패널 하강)", EN: "ASRS Robot (Panel Down)" },
      desc: {
        KR: "최대 30kg까지 물류를 저장하고 운송합니다",
        EN: "Stores and transports up to 30kg of logistics",
      },
      image: "./assets/Robot_Expand_4.png",
    },
    {
      id: 3,
      iconImage: "./assets/Icon_4.png",
      title: { KR: "ASRS Robot(내부)", EN: "ASRS Robot (Internal)" },
      desc: {
        KR: "인천 로보틱스가 직접 개발한 초정밀 물류 로봇을 만나보세요",
        EN: "Meet the ultra-precision logistics robot developed by Incheon Robotics",
      },
      image: "./assets/Robot_Expand_5.png",
    },
    {
      id: 4,
      iconImage: "./assets/Icon_5.png",
      title: { KR: "로드블록", EN: "Roadblock" },
      desc: {
        KR: "안정적인 물류 저장 및 운송을 위한 로드블록입니다",
        EN: "Roadblock for stable logistics storage and transportation",
      },
      image: "./assets/Robot_Expand_1.png",
    },
  ];

  let currentLang = "KR";
  let activeFeatureTab = 0;

  // --- UTILITY FUNCTIONS ---
  const getNestedValue = (obj, key) =>
    key.split(".").reduce((o, i) => (o ? o[i] : undefined), obj);

  // --- LANGUAGE ---
  function setLanguage(lang) {
    if (!["KR", "EN"].includes(lang)) return;
    currentLang = lang;

    document.querySelectorAll("[data-lang-key]").forEach((el) => {
      const key = el.getAttribute("data-lang-key");
      const text = getNestedValue(content[currentLang], key);
      if (text) {
        el.innerHTML = text;
      }
    });

    document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-lang-placeholder");
      const text = getNestedValue(content[currentLang].contact, key);
      if (text) {
        el.placeholder = text;
      }
    });

    const newLang = currentLang === "KR" ? "EN" : "KR";
    document.getElementById("lang-text-desktop").textContent = newLang;
    document.getElementById("lang-text-mobile").textContent = newLang;

    renderFeatureTabs(); // Re-render tabs with new language
  }

  function initLangSwitcher() {
    const toggle = () => setLanguage(currentLang === "KR" ? "EN" : "KR");
    document
      .getElementById("lang-toggle-desktop")
      .addEventListener("click", toggle);
    document
      .getElementById("lang-toggle-mobile")
      .addEventListener("click", toggle);
  }

  // --- SCROLL & NAVIGATION ---
  function initScrollspy() {
    const navbar = document.getElementById("navbar");
    const mainContainer = document.getElementById("main-container");
    const logoImg = document.querySelector(".logo-img");
    if (!navbar || !mainContainer || !logoImg) return;

    mainContainer.addEventListener("scroll", () => {
      const isScrolled = mainContainer.scrollTop > 50;
      const mobileMenuOpen = !document
        .getElementById("mobile-menu")
        .classList.contains("hidden");

      if (isScrolled || mobileMenuOpen) {
        navbar.className =
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3 text-slate-900";
        logoImg.classList.remove("brightness-0", "invert");
      } else {
        navbar.className =
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5 text-white";
        logoImg.classList.add("brightness-0", "invert");
      }
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll("[data-scroll-to]").forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.getAttribute("data-scroll-to");
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        // Close mobile menu on click
        if (
          !document.getElementById("mobile-menu").classList.contains("hidden")
        ) {
          document.getElementById("mobile-menu-toggle").click();
        }
      });
    });
  }

  function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const xIcon = document.getElementById("x-icon");
    const mainContainer = document.getElementById("main-container");

    toggleBtn.addEventListener("click", () => {
      const isScrolled = mainContainer.scrollTop > 50;
      mobileMenu.classList.toggle("hidden");
      menuIcon.classList.toggle("hidden");
      xIcon.classList.toggle("hidden");

      // Force navbar style update on menu toggle
      const mobileMenuOpen = !mobileMenu.classList.contains("hidden");
      if (mobileMenuOpen || isScrolled) {
        navbar.className =
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3 text-slate-900";
      } else {
        navbar.className =
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5 text-white";
      }
    });
  }

  // --- SECTIONS ---
  function initHeroSlideshow() {
    const images = document.querySelectorAll(".hero-bg-img");
    let currentImageIndex = 0;
    setInterval(() => {
      images[currentImageIndex].style.opacity = 0;
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.opacity = 0.5;
    }, 10000);
  }

  function renderFeatureTabs() {
    const tabsContainer = document.getElementById("features-tabs");
    if (!tabsContainer) return;

    tabsContainer.innerHTML = ""; // Clear existing tabs

    featuresData.forEach((item, index) => {
      const isActive = activeFeatureTab === index;
      const button = document.createElement("button");
      button.className = `text-left p-5 rounded-xl transition-all duration-300 border-2 group lg:flex-1 flex flex-col justify-center ${
        isActive
          ? "border-[#0B79BE] bg-[#0B79BE]/5 shadow-lg"
          : "border-slate-100 hover:border-[#0B79BE]/50 hover:bg-slate-50"
      }`;
      button.onclick = () => {
        activeFeatureTab = index;
        renderFeatureTabs();
        updateFeatureContent();
      };

      button.innerHTML = `
                <div class="flex items-center gap-4 mb-2">
                    <div class="p-2 rounded-lg flex-shrink-0 ${
                      isActive
                        ? "bg-[#0B79BE] text-white"
                        : "bg-slate-100 text-slate-600 group-hover:text-[#0B79BE]"
                    }">
                        <img src="${item.iconImage}" alt="Icon ${
        index + 1
      }" class="w-7 h-7 object-contain">
                    </div>
                    <h3 class="text-xl font-bold ${
                      isActive ? "text-[#0B79BE]" : "text-slate-800"
                    }">
                        ${item.title[currentLang]}
                    </h3>
                </div>
                <p class="text-slate-600 leading-relaxed text-base pl-1">
                    ${item.desc[currentLang]}
                </p>
            `;
      tabsContainer.appendChild(button);
    });
  }

  function updateFeatureContent() {
    const featureImage = document.getElementById("feature-image");
    const featureNumber = document.getElementById("feature-number");
    const activeData = featuresData[activeFeatureTab];

    if (featureImage && featureNumber && activeData) {
      featureImage.style.opacity = 0;
      setTimeout(() => {
        featureImage.src = activeData.image;
        featureImage.alt = activeData.title[currentLang];
        featureNumber.textContent = activeFeatureTab + 1;
        featureImage.style.opacity = 1;
      }, 300);
    }
  }

  function initFeaturesTabs() {
    renderFeatureTabs();
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const company = formData.get("company");
      const contactInfo = formData.get("contactInfo");
      const address = formData.get("address");
      const message = formData.get("message");
            
      const to = "admin@incheonrobotics.com";
      const subject = `[문의] ${company} - ${contactInfo}`;
      const body = `회사명: ${company}\n연락처 및 이메일: ${contactInfo}\n주소: ${address}\n\n메시지:\n${message}`;

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
      window.open(gmailUrl, '_blank');
    });
  }

  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }

  function initFooterYear() {
    document.getElementById("footer-year").textContent =
      new Date().getFullYear();
  }

  // --- INITIALIZE ALL ---
  initLangSwitcher();
  initScrollspy();
  initSmoothScroll();
  initMobileMenu();
  initHeroSlideshow();
  initFeaturesTabs();
  initContactForm();
  initScrollAnimations();
  initFooterYear();
});
