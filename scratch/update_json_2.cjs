const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../src/locales');

const enFile = path.join(localesPath, 'en.json');
const taFile = path.join(localesPath, 'ta.json');
const urFile = path.join(localesPath, 'ur.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const ta = JSON.parse(fs.readFileSync(taFile, 'utf8'));
const ur = JSON.parse(fs.readFileSync(urFile, 'utf8'));

const newEn = {
  academics: {
    hero_badge: "Academic Excellence",
    hero_title: "Programs & Curriculum",
    hero_desc: "Unveiling a holistic educational paradigm that bridges the deep roots of classical Dars-e-Nizami with forward-looking contemporary insights.",
    methodology_title: "The Dawoodiya Methodology",
    methodology_card1_title: "Integrated Dars-e-Nizami",
    methodology_card1_desc: "Our flagship 8-year program masterfully covers foundational Arabic syntax (Nahw) and morphology (Sarf), progressing to advanced rhetoric (Balaghah), jurisprudence (Fiqh), logic (Mantiq), exegesis (Tafsir), and the canonical Hadith collections.",
    methodology_card1_list1: "Direct Sanad to Authors",
    methodology_card1_list2: "Classical Text Immersion",
    methodology_card1_list3: "Dialectical Training",
    methodology_card1_list4: "Spiritual Tarbiyah",
    methodology_card2_title: "Memorization (Hifz)",
    methodology_card2_desc: "Dedicated intensive tracks for the complete memorization of the Holy Qur'an with strict adherence to Tajweed.",
    methodology_card2_btn: "View Tajweed Rules",
    faculties_title: "Comprehensive Faculties",
    faculty1_title: "Faculty of Arabic Language",
    faculty1_desc: "Master the language of the Quran. From fundamental grammar to pre-Islamic poetry and advanced rhetoric.",
    faculty1_btn: "Explore Syllabus",
    faculty2_title: "Faculty of Shari'ah",
    faculty2_desc: "Deep dives into comparative Fiqh, Usul al-Fiqh, and contemporary legal challenges.",
    faculty3_title: "Faculty of Usul al-Din",
    faculty3_desc: "Specialized modules covering classical theology (Aqidah), logic, and the critical study of modern philosophies to equip scholars for today's ideological landscape.",
    faculty4_title: "Specialization in Hadith (Takhassus)",
    faculty4_badge: "Post-Graduate Track",
    video_title: "Experience a Lecture",
    video_desc: "Take a glimpse inside our classrooms and experience the profound spiritual ambiance of traditional transmission.",
    cta_title: "Ready to seek knowledge?",
    cta_desc: "Admissions for the upcoming academic year are now open. Review the prerequisites and join a vibrant community of seekers.",
    cta_btn1: "Apply for Admission",
    cta_btn2: "Download Prospectus"
  }
};

const newTa = {
  academics: {
    hero_badge: "கல்விச் சிறப்பு",
    hero_title: "நிகழ்ச்சிகள் & பாடத்திட்டம்",
    hero_desc: "பாரம்பரிய தர்ஸ்-இ-நிஜாமியின் ஆழமான வேர்களை முன்னோக்கிப் பார்க்கும் சமகால நுண்ணறிவுகளுடன் இணைக்கும் ஒரு முழுமையான கல்வி முன்னுதாரணத்தை வெளிப்படுத்துகிறது.",
    methodology_title: "தாவூதியா முறை",
    methodology_card1_title: "ஒருங்கிணைந்த தர்ஸ்-இ-நிஜாமி",
    methodology_card1_desc: "எங்கள் முதன்மையான 8 ஆண்டுத் திட்டம் அடிப்படை அரபு தொடரியல் (நஹ்வ்) மற்றும் உருவமைப்பியல் (ஸர்ஃப்) ஆகியவற்றை உள்ளடக்கியது, மேம்பட்ட சொல்லாட்சி (பலாகா), சட்டவியல் (ஃபிக்ஹ்), தர்க்கம் (மந்திக்), விளக்கம் (தஃப்ஸீர்) மற்றும் நியமன ஹதீஸ் தொகுப்புகள் வரை முன்னேறுகிறது.",
    methodology_card1_list1: "ஆசிரியர்களுக்கு நேரடி சனத்",
    methodology_card1_list2: "பாரம்பரிய உரை மூழ்குதல்",
    methodology_card1_list3: "இயங்கியல் பயிற்சி",
    methodology_card1_list4: "ஆன்மீக தர்பியா",
    methodology_card2_title: "மனப்பாடம் (ஹிஃப்ஸ்)",
    methodology_card2_desc: "தஜ்வீத் விதிமுறைகளை கண்டிப்பாக பின்பற்றி திருக்குர்ஆனை முழுமையாக மனப்பாடம் செய்வதற்கான பிரத்யேக தீவிர தடங்கள்.",
    methodology_card2_btn: "தஜ்வீத் விதிகளை காண்க",
    faculties_title: "விரிவான பீடங்கள்",
    faculty1_title: "அரபு மொழி பீடம்",
    faculty1_desc: "குர்ஆனின் மொழியில் தேர்ச்சி பெறுங்கள். அடிப்படை இலக்கணம் முதல் இஸ்லாமியத்திற்கு முந்தைய கவிதை மற்றும் மேம்பட்ட சொல்லாட்சி வரை.",
    faculty1_btn: "பாடத்திட்டத்தை ஆராய்க",
    faculty2_title: "ஷரியா பீடம்",
    faculty2_desc: "ஒப்பீட்டு ஃபிக்ஹ், உசூல் அல்-ஃபிக்ஹ் மற்றும் சமகால சட்ட சவால்களுக்குள் ஆழமாக மூழ்குதல்.",
    faculty3_title: "உசூல் அல்-தீன் பீடம்",
    faculty3_desc: "இன்றைய கருத்தியல் நிலப்பரப்புக்கு அறிஞர்களை சித்தப்படுத்துவதற்காக கிளாசிக்கல் இறையியல் (அகீதா), தர்க்கம் மற்றும் நவீன தத்துவங்களின் விமர்சன ஆய்வை உள்ளடக்கிய சிறப்பு தொகுதிகள்.",
    faculty4_title: "ஹதீஸில் சிறப்பு (தகஸ்ஸுஸ்)",
    faculty4_badge: "முதுகலை தடம்",
    video_title: "ஒரு விரிவுரையை அனுபவிக்கவும்",
    video_desc: "எங்கள் வகுப்பறைகளுக்குள் ஒரு பார்வை பார்த்து, பாரம்பரிய பரிமாற்றத்தின் ஆழமான ஆன்மீக சூழலை அனுபவிக்கவும்.",
    cta_title: "அறிவைத் தேட தயாரா?",
    cta_desc: "வரவிருக்கும் கல்வியாண்டிற்கான சேர்க்கை இப்போது திறக்கப்பட்டுள்ளது. முன்நிபந்தனைகளை மதிப்பாய்வு செய்து, தேடுபவர்களின் துடிப்பான சமூகத்தில் சேரவும்.",
    cta_btn1: "சேர்க்கைக்கு விண்ணப்பிக்கவும்",
    cta_btn2: "ப்ராஸ்பெக்டஸை பதிவிறக்குக"
  }
};

const newUr = {
  academics: {
    hero_badge: "تعلیمی فضیلت",
    hero_title: "پروگرامز اور نصاب",
    hero_desc: "ایک جامع تعلیمی نمونے کی نقاب کشائی جو روایتی درس نظامی کی گہری جڑوں کو مستقبل کی عصری بصیرت کے ساتھ جوڑتا ہے۔",
    methodology_title: "داؤدیہ کا طریقہ کار",
    methodology_card1_title: "مربوط درس نظامی",
    methodology_card1_desc: "ہمارا 8 سالہ فلیگ شپ پروگرام بنیادی عربی نحو اور صرف کا احاطہ کرتا ہے، اور جدید بلاغت، فقہ، منطق، تفسیر، اور مستند احادیث کے مجموعوں تک ترقی کرتا ہے۔",
    methodology_card1_list1: "مصنفین تک براہ راست سند",
    methodology_card1_list2: "کلاسیکی متن میں غوطہ زنی",
    methodology_card1_list3: "جدلیاتی تربیت",
    methodology_card1_list4: "روحانی تربیت",
    methodology_card2_title: "حفظ",
    methodology_card2_desc: "تجوید کی سختی سے پابندی کے ساتھ قرآن پاک کے مکمل حفظ کے لیے مخصوص گہری کلاسز۔",
    methodology_card2_btn: "تجوید کے قواعد دیکھیں",
    faculties_title: "جامع فیکلٹیز",
    faculty1_title: "فیکلٹی آف عربی زبان",
    faculty1_desc: "قرآن کی زبان پر عبور حاصل کریں۔ بنیادی قواعد سے لے کر قبل از اسلام کی شاعری اور جدید بلاغت تک۔",
    faculty1_btn: "نصاب دریافت کریں",
    faculty2_title: "فیکلٹی آف شریعہ",
    faculty2_desc: "تقابلی فقہ، اصول فقہ، اور عصری قانونی چیلنجوں میں گہرا غوطہ۔",
    faculty3_title: "فیکلٹی آف اصول الدین",
    faculty3_desc: "جدید نظریاتی منظر نامے کے لیے علماء کو تیار کرنے کے لیے کلاسیکی الہیات (عقیدہ)، منطق، اور جدید فلسفوں کے تنقیدی مطالعہ پر مشتمل خصوصی ماڈیولز۔",
    faculty4_title: "تخصص فی الحدیث",
    faculty4_badge: "پوسٹ گریجویٹ ٹریک",
    video_title: "ایک لیکچر کا تجربہ کریں",
    video_desc: "ہمارے کلاس رومز کے اندر ایک جھلک دیکھیں اور روایتی منتقلی کے گہرے روحانی ماحول کا تجربہ کریں۔",
    cta_title: "علم کے حصول کے لیے تیار ہیں؟",
    cta_desc: "آئندہ تعلیمی سال کے لیے داخلے اب کھلے ہیں۔ شرائط کا جائزہ لیں اور طلباء کی ایک متحرک کمیونٹی میں شامل ہوں۔",
    cta_btn1: "داخلے کے لیے اپلائی کریں",
    cta_btn2: "پراسپیکٹس ڈاؤن لوڈ کریں"
  }
};

Object.assign(en, newEn);
Object.assign(ta, newTa);
Object.assign(ur, newUr);

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(taFile, JSON.stringify(ta, null, 2));
fs.writeFileSync(urFile, JSON.stringify(ur, null, 2));

console.log("JSON updated successfully for Academics!");
