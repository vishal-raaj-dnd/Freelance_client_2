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
  admissions: {
    title: "Admissions",
    desc: "Begin your journey of seeking sacred knowledge. Review our requirements and start your application today.",
    reqTitle: "General Requirements",
    processTitle: "The Process",
    datesTitle: "Key Dates"
  },
  blog: {
    title: "Insights & Articles",
    desc: "Read the latest essays, academic breakdowns, and campus news written by our esteemed faculty and student body."
  },
  boarding: {
    title: "A Second Home",
    desc: "Experience a nurturing, secure, and spiritually uplifting residential life. Our boarding facilities are designed to foster brotherhood and dedicated focus on studies.",
    quartersTitle: "Living Quarters",
    scheduleTitle: "A Day in the Life"
  },
  contact: {
    title: "Get in Touch",
    desc: "Whether you have questions about admissions, want to schedule a visit, or wish to support our cause, we are here to listen.",
    infoTitle: "Contact Information",
    formTitle: "Send us a Message"
  },
  events: {
    title: "Events & Commemorations",
    desc: "Join our gatherings of knowledge, remembrance, and community. Discover upcoming events at Dawoodiya."
  },
  library: {
    title: "The Grand Archive",
    desc: "Search through over 15,000 physical volumes and 50,000 digitized manuscripts.",
    collectionsTitle: "Collections",
    additionsTitle: "Featured Additions"
  }
};

const newTa = {
  admissions: {
    title: "சேர்க்கை",
    desc: "புனித அறிவைத் தேடும் உங்கள் பயணத்தைத் தொடங்குங்கள். எங்கள் தேவைகளை மதிப்பாய்வு செய்து உங்கள் விண்ணப்பத்தை இன்றே தொடங்குங்கள்.",
    reqTitle: "பொதுவான தேவைகள்",
    processTitle: "செயல்முறை",
    datesTitle: "முக்கிய தேதிகள்"
  },
  blog: {
    title: "நுண்ணறிவு மற்றும் கட்டுரைகள்",
    desc: "எங்கள் மதிப்பிற்குரிய ஆசிரியர்கள் மற்றும் மாணவர் அமைப்பால் எழுதப்பட்ட சமீபத்திய கட்டுரைகள், கல்வி முறிவுகள் மற்றும் வளாக செய்திகளைப் படியுங்கள்."
  },
  boarding: {
    title: "இரண்டாவது வீடு",
    desc: "ஊட்டமளிக்கும், பாதுகாப்பான மற்றும் ஆன்மீக ரீதியில் மேம்படுத்தும் குடியிருப்பு வாழ்க்கையை அனுபவிக்கவும். எங்கள் உறைவிட வசதிகள் சகோதரத்துவத்தை வளர்ப்பதற்கும் படிப்பில் அர்ப்பணிப்புடன் கவனம் செலுத்துவதற்கும் வடிவமைக்கப்பட்டுள்ளன.",
    quartersTitle: "வாழும் இடங்கள்",
    scheduleTitle: "வாழ்க்கையில் ஒரு நாள்"
  },
  contact: {
    title: "தொடர்பு கொள்ள",
    desc: "உங்களுக்கு சேர்க்கை பற்றி கேள்விகள் உள்ளதா, ஒரு வருகையை திட்டமிட வேண்டுமா, அல்லது எங்கள் காரணத்தை ஆதரிக்க விரும்புகிறீர்களா, நாங்கள் கேட்க இங்கே இருக்கிறோம்.",
    infoTitle: "தொடர்புத் தகவல்",
    formTitle: "எங்களுக்கு ஒரு செய்தி அனுப்புங்கள்"
  },
  events: {
    title: "நிகழ்வுகள் மற்றும் நினைவேந்தல்கள்",
    desc: "அறிவு, நினைவூட்டல் மற்றும் சமூகத்தின் எங்கள் கூட்டங்களில் சேருங்கள். தாவூதியாவில் வரவிருக்கும் நிகழ்வுகளைக் கண்டறியவும்.",
  },
  library: {
    title: "பெரிய காப்பகம்",
    desc: "15,000 க்கும் மேற்பட்ட இயற்பியல் தொகுதிகள் மற்றும் 50,000 டிஜிட்டல் கையெழுத்துப் பிரதிகளைத் தேடுங்கள்.",
    collectionsTitle: "தொகுப்புகள்",
    additionsTitle: "சிறப்புச் சேர்க்கைகள்"
  }
};

const newUr = {
  admissions: {
    title: "داخلہ",
    desc: "مقدس علم کے حصول کے اپنے سفر کا آغاز کریں۔ ہماری ضروریات کا جائزہ لیں اور آج ہی اپنی درخواست شروع کریں۔",
    reqTitle: "عمومی ضروریات",
    processTitle: "عمل",
    datesTitle: "اہم تاریخیں"
  },
  blog: {
    title: "بصیرت اور مضامین",
    desc: "ہمارے معزز اساتذہ اور طلباء کی طرف سے لکھے گئے تازہ ترین مضامین، تعلیمی تجزیے، اور کیمپس کی خبریں پڑھیں۔"
  },
  boarding: {
    title: "ایک دوسرا گھر",
    desc: "ایک پرورش پانے والی، محفوظ، اور روحانی طور پر بلند کرنے والی رہائشی زندگی کا تجربہ کریں۔ ہماری بورڈنگ کی سہولیات بھائی چارے کو فروغ دینے اور پڑھائی پر بھرپور توجہ دینے کے لیے بنائی گئی ہیں۔",
    quartersTitle: "رہائشی کوارٹرز",
    scheduleTitle: "زندگی کا ایک دن"
  },
  contact: {
    title: "رابطہ کریں",
    desc: "چاہے آپ کو داخلے کے بارے میں سوالات ہوں، دورے کا شیڈول بنانا ہو، یا ہمارے مقصد کی حمایت کرنا چاہتے ہوں، ہم سننے کے لیے حاضر ہیں۔",
    infoTitle: "رابطے کی معلومات",
    formTitle: "ہمیں ایک پیغام بھیجیں"
  },
  events: {
    title: "تقریبات اور یادگاریں",
    desc: "علم، یاد، اور کمیونٹی کے ہمارے اجتماعات میں شامل ہوں۔ داؤدیہ میں آنے والے واقعات دریافت کریں۔"
  },
  library: {
    title: "عظیم آرکائیو",
    desc: "15,000 سے زیادہ جسمانی جلدوں اور 50,000 ڈیجیٹل مخطوطات میں تلاش کریں۔",
    collectionsTitle: "مجموعے",
    additionsTitle: "نمایاں اضافے"
  }
};

Object.assign(en, newEn);
Object.assign(ta, newTa);
Object.assign(ur, newUr);

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(taFile, JSON.stringify(ta, null, 2));
fs.writeFileSync(urFile, JSON.stringify(ur, null, 2));

console.log("JSON updated successfully for remaining tabs!");
