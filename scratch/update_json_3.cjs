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
  gallery: {
    badge: "Visual Archives",
    title: "Our Visual Legacy",
    desc: "Moments captured around the Masjid and Madrasah, reflecting the peace and bright vitality of our community."
  },
  fatwa: {
    badge: "Guidance & Insight",
    title: "The Blog / Fatwa Board",
    desc: "Reflections, rulings, and contemporary insights from our senior scholars.",
    card1_badge: "Contemporary Jurisprudence",
    card1_title: "Finance in the Modern Era",
    card1_desc: "A comprehensive breakdown of cryptocurrency, digital assets, and their standing within classical frameworks of trade.",
    card1_author: "Shaykh Abdullah • Oct 15",
    card2_badge: "Spiritual Tarbiyah",
    card2_title: "The Etiquette of Supplication",
    card2_desc: "Conditions for acceptance, the best times for Dua, and understanding the wisdom behind delayed responses.",
    card2_author: "Mufti Zaid • Sep 22"
  }
};

const newTa = {
  gallery: {
    badge: "காட்சி காப்பகங்கள்",
    title: "எங்கள் காட்சி மரபு",
    desc: "மஸ்ஜித் மற்றும் மதரஸாவைச் சுற்றியுள்ள தருணங்கள், எங்கள் சமூகத்தின் அமைதியையும் பிரகாசமான உயிர்ச்சக்தியையும் பிரதிபலிக்கின்றன."
  },
  fatwa: {
    badge: "வழிகாட்டுதல் மற்றும் நுண்ணறிவு",
    title: "வலைப்பதிவு / ஃபத்வா குழு",
    desc: "எங்கள் மூத்த அறிஞர்களிடமிருந்து பிரதிபலிப்புகள், தீர்ப்புகள் மற்றும் சமகால நுண்ணறிவுகள்.",
    card1_badge: "சமகால சட்டவியல்",
    card1_title: "நவீன சகாப்தத்தில் நிதி",
    card1_desc: "கிரிப்டோகரன்சி, டிஜிட்டல் சொத்துக்கள் மற்றும் வர்த்தகத்தின் பாரம்பரிய கட்டமைப்பிற்குள் அவற்றின் நிலை பற்றிய விரிவான முறிவு.",
    card1_author: "ஷேக் அப்துல்லா • அக் 15",
    card2_badge: "ஆன்மீக தர்பியா",
    card2_title: "பிரார்த்தனையின் நெறிமுறைகள்",
    card2_desc: "ஏற்றுக்கொள்ளப்படுவதற்கான நிபந்தனைகள், துஆவுக்கான சிறந்த நேரங்கள் மற்றும் தாமதமான பதில்களுக்குப் பின்னால் உள்ள ஞானத்தைப் புரிந்துகொள்வது.",
    card2_author: "முஃப்தி சைத் • செப் 22"
  }
};

const newUr = {
  gallery: {
    badge: "بصری آرکائیوز",
    title: "ہماری بصری وراثت",
    desc: "مسجد اور مدرسے کے ارد گرد قید کیے گئے لمحات، جو ہماری کمیونٹی کے امن اور روشن جوش و خروش کی عکاسی کرتے ہیں۔"
  },
  fatwa: {
    badge: "رہنمائی اور بصیرت",
    title: "بلاگ / فتویٰ بورڈ",
    desc: "ہمارے سینئر علماء کے افکار، فیصلے اور عصری بصیرت۔",
    card1_badge: "عصری فقہ",
    card1_title: "جدید دور میں مالیات",
    card1_desc: "کرپٹو کرنسی، ڈیجیٹل اثاثوں، اور تجارت کے کلاسیکی فریم ورک میں ان کی حیثیت کی جامع تفصیل۔",
    card1_author: "شیخ عبداللہ • 15 اکتوبر",
    card2_badge: "روحانی تربیت",
    card2_title: "دعا کے آداب",
    card2_desc: "قبولیت کی شرائط، دعا کے بہترین اوقات، اور تاخیر سے ملنے والے جوابات کے پیچھے چھپی حکمت کو سمجھنا۔",
    card2_author: "مفتی زید • 22 ستمبر"
  }
};

Object.assign(en, newEn);
Object.assign(ta, newTa);
Object.assign(ur, newUr);

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(taFile, JSON.stringify(ta, null, 2));
fs.writeFileSync(urFile, JSON.stringify(ur, null, 2));

console.log("JSON updated successfully for Gallery & Fatwa!");
