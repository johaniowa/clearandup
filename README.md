# Clear 'n Up — Minimal & Warm Education Landing Page

หน้า Landing Page เว็บไซต์การศึกษา **Clear 'n Up** ออกแบบด้วยคอนเซปต์ **Minimal & Warm** โทนสีขาว-ฟ้า พร้อมสัมผัสสีไอวอรี่และทองอบอุ่น ให้ความรู้สึกคลีน สบายตา น่าเรียน และเป็นมิตร

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)
```
d:\clearandup\
├── assets\                   # โฟลเดอร์รวมรูปภาพทั้งหมดที่ใช้ในหน้าเว็บ
│   ├── hero-main.jpg         # รูปภาพหลักใน Hero Section
│   ├── video-cover.jpg       # รูปภาพหน้าปกวิดีโอแนะนำ
│   ├── course-math.jpg       # ภาพคอร์สคณิตศาสตร์
│   ├── course-english.jpg    # ภาพคอร์สภาษาอังกฤษ
│   ├── course-science.jpg    # ภาพคอร์สฟิสิกส์และเคมี
│   ├── course-tcas.jpg       # ภาพคอร์ส TCAS
│   ├── tutor-belle.jpg       # รูปพี่ติวเตอร์เบลล์
│   ├── tutor-kong.jpg        # รูปพี่ติวเตอร์ก้อง
│   ├── tutor-praew.jpg       # รูปพี่ติวเตอร์แพรว
│   ├── tutor-tin.jpg         # รูปพี่ติวเตอร์ติน
│   ├── student-1.jpg         # รูปนักเรียน Hero proof 1
│   ├── student-2.jpg         # รูปนักเรียน Hero proof 2
│   ├── student-3.jpg         # รูปนักเรียน Hero proof 3
│   ├── student-4.jpg         # รูปนักเรียน Hero proof 4
│   ├── review-mint.jpg       # รูปรีวิวน้องมิ้นท์
│   ├── review-phu.jpg        # รูปรีวิวน้องภู
│   └── review-ploy.jpg       # รูปรีวิวน้องพลอย
├── index.html                # ไฟล์หลัก Landing Page
├── style.css                 # สไตล์ CSS และ Responsive Design
├── script.js                 # ระบบอินเทอร์แอคทีฟ (Calculator, Filter, Modals, Toasts)
└── README.md                 # เอกสารแนะนำโปรเจกต์
```

---

## 🎨 เอกลักษณ์และการออกแบบ (Design System)
- **Palette**: 
  - Pure White (`#ffffff`) & Warm Tint (`#fffdfa`, `#fcfbfa`)
  - Sky Blue & Azure (`#0284c7`, `#38bdf8`, `#e0f0fe`)
  - Warm Honey Amber (`#f59e0b`, `#fef3c7`)
  - Deep Slate Text (`#1e293b`, `#334155`)
- **Typography**: 
  - ภาษาไทย: **Prompt** (อ่านง่าย สบายตา สไตล์มินิมอล)
  - ภาษาอังกฤษและตัวเลข: **Plus Jakarta Sans**
- **Icons**: Phosphor Icons (ไอคอนเส้นบางคลีน โมเดิร์น คมชัดทุกขนาดหน้าจอ)

---

## 🚀 ฟีเจอร์เด่นในหน้าเว็บ
1. **Sticky Header & Responsive Drawer**: แถบนำทางด้านบนแบบเบลอแก้ว (Glassmorphism) พร้อมเมนู Drawer สำหรับสมาร์ตโฟน
2. **Hero Section & Floating Badges**:
   - พาดหัวชัดเจนพร้อมปุ่ม Call-to-Action 2 รูปแบบ
   - Social proof รีวิวนักเรียน 15,000+ คน และเรตติ้ง 4.9/5 ดาว
   - รูปภาพประกอบแนวคลีน แสงธรรมชาติ พร้อมการ์ดสถิติลอยแบบ Micro-animation
3. **Core Pillars (4 จุดเด่น)**: Clear Concept, Warm Community, Paced Learning, Exam & Life Ready
4. **Comparison Table**: ตารางเปรียบเทียบความแตกต่างระหว่าง "การเรียนกวดวิชาแบบเดิม" vs "เรียนกับ Clear 'n Up"
5. **Interactive Course Explorer**: คัดกรองคอร์สเรียนแยกตามหมวดหมู่อย่างลื่นไหล (ทั้งหมด, คณิต, วิทย์, อังกฤษ, TCAS) พร้อมปุ่มบันทึก Favorite
6. **Interactive Study Planner Calculator**: เครื่องมือคำนวณแผนการเรียนส่วนบุคคล ผู้เรียนสามารถเลือกชั้นปี เป้าหมาย และเวลาว่าง เพื่อดูแผนแนะนำและคาดการณ์พัฒนาการ
7. **Warm Tutors**: แนะนำทีมพี่ติวเตอร์พร้อมประวัติและการันตีความอบอุ่น
8. **Student Reviews**: การ์ดรีวิวความสำเร็จจากน้องๆ โรงเรียนชั้นนำ
9. **FAQ Accordion**: รวมคำถาม-คำตอบที่พบบ่อย ยุบ-ขยายได้อย่างนุ่มนวล
10. **Conversion Trial Form**: ฟอร์มลงทะเบียนทดลองเรียนฟรี 7 วัน พร้อม Interactive Toast Notification แจ้งเตือนเมื่อส่งข้อมูลสำเร็จ
11. **Modals**: หน้าต่างป๊อปอัปดูวิดีโอแนะนำ (1 นาที) และป๊อปอัปทดลองเรียนแยกรายคอร์ส

---

## 💻 วิธีการเปิดใช้งาน
เปิดไฟล์ [index.html](file:///d:/clearandup/index.html) ในเว็บบราวเซอร์ใดก็ได้ (Google Chrome, Microsoft Edge, Safari, Firefox) โดย:
- ดับเบิ้ลคลิกที่ไฟล์ `d:\clearandup\index.html`
- หรือเปิดผ่าน Local Live Server ในโปรแกรมแก้ไขโค้ด
