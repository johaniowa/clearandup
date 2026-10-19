/**
 * Clear 'n Up - Interactive JavaScript
 * Features:
 * 1. Sticky Navigation & Scroll spy
 * 2. Mobile Drawer Navigation
 * 3. Course Filter Tabs
 * 4. Interactive Study Planner Calculator
 * 5. FAQ Accordion
 * 6. Video & Enrollment Modals
 * 7. Form Handlers & Toast Notifications
 * 8. Course Wishlist Toggles
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Sticky Navbar Effect on Scroll
  // ==========================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 2. Mobile Drawer Navigation
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const menuIcon = document.getElementById('menuIcon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('active');
      if (isOpen) {
        menuIcon.classList.replace('ph-list', 'ph-x');
      } else {
        menuIcon.classList.replace('ph-x', 'ph-list');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        menuIcon.classList.replace('ph-x', 'ph-list');
      });
    });
  }

  // ==========================================
  // 3. Course Filter Tabs
  // ==========================================
  const filterBtns = document.querySelectorAll('#courseFilters .filter-btn');
  const courseCards = document.querySelectorAll('#coursesGrid .course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 4. Interactive Study Planner Calculator
  // ==========================================
  const levelBtns = document.querySelectorAll('#levelSelector .pill-btn');
  const goalBtns = document.querySelectorAll('#goalSelector .pill-btn');
  const hoursSlider = document.getElementById('hoursSlider');
  const sliderDisplay = document.getElementById('sliderDisplay');

  // Output elements
  const planTitle = document.getElementById('planTitle');
  const estimatedWeeks = document.getElementById('estimatedWeeks');
  const expectedImprovement = document.getElementById('expectedImprovement');
  const planCheck1 = document.getElementById('planCheck1');
  const planCheck2 = document.getElementById('planCheck2');
  const planCheck3 = document.getElementById('planCheck3');

  let currentLevel = 'senior';
  let currentGoal = 'boost';
  let currentHours = 5;

  function updatePlanner() {
    // Update display label
    sliderDisplay.textContent = `${currentHours} ชั่วโมง / สัปดาห์`;

    // Dynamic calculation logic
    let title = 'แผน Steady Growth (ค่อยๆ เคลียร์แต่โตไว)';
    let weeks = '8 สัปดาห์';
    let stat = '+0.6 GPA';
    let check1 = 'แบ่งบทเรียนย่อย 30 นาที/วัน ไม่สะสมความล้า';
    let check2 = 'มีพี่โค้ชคอยเช็คการบ้านและส่งข้อความเตือนอย่างอบอุ่น';
    let check3 = 'ทำ Mock Exam วัดความแม่นยำทุกๆ 2 สัปดาห์';

    if (currentLevel === 'junior') {
      if (currentGoal === 'basic') {
        title = 'แผน Warm Foundation (ปูพื้นฐานมัธยมต้นให้แน่น)';
        weeks = currentHours < 4 ? '10 สัปดาห์' : '6 สัปดาห์';
        stat = '+1.0 GPA';
        check1 = 'ปรับความเข้าใจคณิต-วิทย์พื้นฐานด้วยภาพการ์ตูนและ Mind Map';
        check2 = 'สะสมคลังคำศัพท์ภาษาอังกฤษสัปดาห์ละ 25 คำแบบไม่ลืม';
        check3 = 'พี่ติวเตอร์ตรวจการบ้านและชมเชยสร้างกำลังใจทุกสัปดาห์';
      } else if (currentGoal === 'boost') {
        title = 'แผน Junior Ace (ดันเกรด 4.00 ทุกรายวิชา)';
        weeks = currentHours < 4 ? '8 สัปดาห์' : '5 สัปดาห์';
        stat = '+0.8 GPA';
        check1 = 'เจาะลึกเนื้อหาล่วงหน้าก่อนที่โรงเรียนจะสอน 1 บท';
        check2 = 'ทำสรุป One-page sheet พกอ่านทบทวนก่อนสอบ 1 วัน';
        check3 = 'เทคนิคเก็บคะแนนเก็บและโครงงานวิทยาศาสตร์';
      } else {
        title = 'แผนเตรียมสอบเข้า ม.4 โรงเรียนชั้นนำ';
        weeks = currentHours < 5 ? '12 สัปดาห์' : '7 สัปดาห์';
        stat = 'คะแนนสอบ +35%';
        check1 = 'ฝึกทำโจทย์แนวเตรียมอุดมฯ และมหิดลวิทยานุสรณ์';
        check2 = 'จับเวลาสอบเสมือนจริงเพื่อฝึกการบริหารเวลา';
        check3 = 'วิเคราะห์จุดอ่อนรายบุคคลพร้อมคลิปซ่อมแซมทันที';
      }
    } else if (currentLevel === 'senior') {
      if (currentGoal === 'boost') {
        title = 'แผน Senior Booster (ทวงคืนเกรดสวย ม.ปลาย)';
        weeks = currentHours < 5 ? '8 สัปดาห์' : '6 สัปดาห์';
        stat = '+0.65 GPA';
        check1 = 'เน้นเก็บเต็มวิชาคำนวณและภาษาอังกฤษหลักสูตรใหม่';
        check2 = 'คลิปเฉลยการบ้านและข้อสอบย้อนหลัง 5 เทอม';
        check3 = 'ทักแชทปรึกษาพี่ติวเตอร์ส่วนตัวได้ถึงเที่ยงคืน';
      } else if (currentGoal === 'exam') {
        title = 'แผน TCAS Early Bird (เตรียมพร้อมก่อนใคร)';
        weeks = currentHours < 5 ? '12 สัปดาห์' : '8 สัปดาห์';
        stat = 'คะแนนรวม +40%';
        check1 = 'ทยอยเก็บเนื้อหา A-Level ฟิสิกส์ เคมี เลข และอังกฤษ';
        check2 = 'ฝึกข้อสอบ TGAT วัดความถนัดทั่วไปทุกวันเสาร์';
        check3 = 'แนะแนว Portfolio และการเลือกสาขาตามความถนัด';
      } else {
        title = 'แผน Reset & Clear (รื้อพื้นฐานใหม่แบบเข้าใจทะลุปรุโปร่ง)';
        weeks = currentHours < 5 ? '10 สัปดาห์' : '6 สัปดาห์';
        stat = 'เข้าใจขึ้น 100%';
        check1 = 'อธิบายที่มาของสูตรแคลคูลัสและกลไกวิทยาศาสตร์';
        check2 = 'แบบฝึกหัดไล่ระดับจากง่ายไปสู่แนวประยุกต์';
        check3 = 'มีพี่โค้ชคอยตอบข้อสงสัยแบบไม่ให้รู้สึกอาย';
      }
    } else { // TCAS / ม.6
      if (currentGoal === 'exam') {
        title = 'แผน TCAS Sprint Master (พิชิตคณะในฝันรอบ 3)';
        weeks = currentHours < 6 ? '10 สัปดาห์' : '6 สัปดาห์';
        stat = 'ติดอันดับ 1 ใน 3';
        check1 = 'ตะลุยข้อสอบเก็งแม่น A-Level ย้อนหลัง 8 ปีเต็ม';
        check2 = 'เทคนิคบริหารเวลาแบบ Minute-by-Minute ในห้องสอบ';
        check3 = 'ประเมินโอกาสสอบติดด้วยโปรแกรมจัดอันดับ TCAS Simulator';
      } else if (currentGoal === 'boost') {
        title = 'แผน GPAX Last Push (ดันเกรดเฉลี่ยรอบสุดท้าย)';
        weeks = currentHours < 5 ? '6 สัปดาห์' : '4 สัปดาห์';
        stat = '+0.5 GPAX';
        check1 = 'เน้นเจาะคะแนนวิชาที่มีน้ำหนักหน่วยกิตสูงสุด';
        check2 = 'ติวเข้มเก็งข้อสอบปลายภาคแบบตรงจุด';
        check3 = 'สรุปสูตรลัดและแผนภาพเชื่อมโยงก่อนสอบ';
      } else {
        title = 'แผน Fast Track Foundation (ปูพื้นเร่งด่วนใน 4 สัปดาห์)';
        weeks = currentHours < 6 ? '6 สัปดาห์' : '4 สัปดาห์';
        stat = 'พื้นฐานแน่น 100%';
        check1 = 'สรุปเนื้อหา 3 ปี ม.ปลาย ย่อยเหลือเฉพาะจุดที่ออกสอบบ่อย';
        check2 = 'คลังโจทย์ 1,500 ข้อพร้อมคลิปเฉลยทุกข้อ';
        check3 = 'ปรึกษาพี่โค้ชเพื่อจัดแผนอ่านหนังสือรายวัน';
      }
    }

    // Apply values to DOM with subtle fade
    planTitle.textContent = title;
    estimatedWeeks.textContent = weeks;
    expectedImprovement.textContent = stat;
    planCheck1.textContent = check1;
    planCheck2.textContent = check2;
    planCheck3.textContent = check3;
  }

  // Bind Level Buttons
  levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      levelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = btn.getAttribute('data-value');
      updatePlanner();
    });
  });

  // Bind Goal Buttons
  goalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goalBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGoal = btn.getAttribute('data-value');
      updatePlanner();
    });
  });

  // Bind Hours Slider
  if (hoursSlider) {
    hoursSlider.addEventListener('input', (e) => {
      currentHours = parseInt(e.target.value, 10);
      updatePlanner();
    });
  }

  // ==========================================
  // 5. FAQ Accordion
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ==========================================
  // 6. Video Modal
  // ==========================================
  const watchVideoBtn = document.getElementById('watchVideoBtn');
  const videoModal = document.getElementById('videoModal');
  const closeVideoModal = document.getElementById('closeVideoModal');

  if (watchVideoBtn && videoModal) {
    watchVideoBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
    });

    closeVideoModal.addEventListener('click', () => {
      videoModal.classList.remove('active');
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 7. Course Enrollment Modal
  // ==========================================
  const enrollModal = document.getElementById('enrollModal');
  const closeEnrollModal = document.getElementById('closeEnrollModal');
  const modalCourseTitle = document.getElementById('modalCourseTitle');
  const enrollForm = document.getElementById('enrollForm');

  window.openEnrollModal = function(courseName) {
    if (modalCourseTitle) {
      modalCourseTitle.textContent = courseName;
    }
    if (enrollModal) {
      enrollModal.classList.add('active');
    }
  };

  if (closeEnrollModal && enrollModal) {
    closeEnrollModal.addEventListener('click', () => {
      enrollModal.classList.remove('active');
    });

    enrollModal.addEventListener('click', (e) => {
      if (e.target === enrollModal) {
        enrollModal.classList.remove('active');
      }
    });
  }

  if (enrollForm) {
    enrollForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentName = document.getElementById('enrollName').value;
      enrollModal.classList.remove('active');
      enrollForm.reset();
      showToast(
        `ลงทะเบียนสำเร็จ 🎉`, 
        `ยินดีต้อนรับ ${studentName}! เราได้ส่งลิงก์เข้าดูบทเรียนฟรีไปยังอีเมลของคุณแล้ว`
      );
    });
  }

  // ==========================================
  // 8. Trial Form Submission & Login Buttons
  // ==========================================
  const trialForm = document.getElementById('trialForm');
  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('studentName').value;
      const email = document.getElementById('studentEmail').value;
      
      showToast(
        'ยินดีต้อนรับสู่ Clear \'n Up! ✨',
        `ขอบคุณน้อง ${name} สิทธิ์เรียนฟรี 7 วัน พร้อมชีทสรุปส่งไปที่ ${email} เรียบร้อยแล้ว`
      );
      trialForm.reset();
    });
  }

  const loginBtn = document.getElementById('loginBtn');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const handleLoginClick = () => {
    showToast('ระบบสมาชิก 🔐', 'กำลังเชื่อมต่อระบบบัญชีผู้เรียน Clear \'n Up...');
  };
  if (loginBtn) loginBtn.addEventListener('click', handleLoginClick);
  if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', handleLoginClick);

  // ==========================================
  // 9. Course Wishlist Heart Buttons
  // ==========================================
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const icon = btn.querySelector('i');
      if (icon.classList.contains('ph-heart')) {
        icon.classList.replace('ph-heart', 'ph-fill');
        icon.classList.add('ph-heart');
        icon.style.color = '#ef4444';
        showToast('บันทึกคอร์สแล้ว ❤️', 'เพิ่มคอร์สนี้ลงในรายการโปรดของคุณเรียบร้อย');
      } else {
        icon.classList.remove('ph-fill');
        icon.style.color = '';
        showToast('นำออกจากรายการโปรด', 'คอร์สถูกนำออกจากรายการที่บันทึกแล้ว');
      }
    });
  });

  // ==========================================
  // 10. Global Toast System
  // ==========================================
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(title, message) {
    if (!toast) return;

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add('active');

    toastTimer = setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (videoModal && videoModal.classList.contains('active')) {
        videoModal.classList.remove('active');
      }
      if (enrollModal && enrollModal.classList.contains('active')) {
        enrollModal.classList.remove('active');
      }
    }
  });

  // Initialize planner
  updatePlanner();
});
