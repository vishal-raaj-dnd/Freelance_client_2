const fs = require('fs');
const path = require('path');

const tsxContent = `import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Blog() {
  const { t } = useTranslation();
  const posts = [
    {
      title: t('blog.post1Title'),
      author: t('blog.post1Author'),
      date: t('blog.post1Date'),
      category: t('blog.post1Category'),
      image: "https://picsum.photos/seed/blog1/800/500",
      excerpt: t('blog.post1Excerpt')
    },
    {
      title: t('blog.post2Title'),
      author: t('blog.post2Author'),
      date: t('blog.post2Date'),
      category: t('blog.post2Category'),
      image: "https://picsum.photos/seed/blog2/800/500",
      excerpt: t('blog.post2Excerpt')
    },
    {
      title: t('blog.post3Title'),
      author: t('blog.post3Author'),
      date: t('blog.post3Date'),
      category: t('blog.post3Category'),
      image: "https://picsum.photos/seed/blog3/800/500",
      excerpt: t('blog.post3Excerpt')
    },
    {
      title: t('blog.post4Title'),
      author: t('blog.post4Author'),
      date: t('blog.post4Date'),
      category: t('blog.post4Category'),
      image: "https://picsum.photos/seed/blog4/800/500",
      excerpt: t('blog.post4Excerpt')
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-inverted">{t('blog.title')}</h1>
          <p className="text-xl font-medium text-text-muted leading-relaxed">
            {t('blog.desc')}
          </p>
        </div>
        <div className="flex gap-2">
           {[t('blog.catAll'), t('blog.catFiqh'), t('blog.catTazkiyah'), t('blog.catLanguage')].map((cat, i) => (
             <button key={i} className={\`px-5 py-2 rounded-full text-sm font-bold transition-colors \${i===0 ? 'bg-bg-base text-primary' : 'bg-secondary text-text-muted hover:bg-primary hover:text-inverted'}\`}>
               {cat}
             </button>
           ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 pb-32">
        
        {/* Featured Post */}
        <Card className="!p-0 mb-16 overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-2xl transition-all duration-300">
          <div className="lg:w-3/5 h-[400px] overflow-hidden relative">
            <img src={posts[0].image} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" alt="Featured" />
          </div>
          <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center bg-surface">
            <div className="flex items-center gap-2 mb-6">
               <span className="bg-primary text-inverted text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{posts[0].category}</span>
               <span className="text-primary text-sm font-medium flex items-center gap-1"><Clock size={14} /> {posts[0].date}</span>
            </div>
            <h2 className="text-4xl font-display font-black text-inverted mb-6 leading-tight group-hover:text-primary transition-colors">{posts[0].title}</h2>
            <p className="text-text-muted font-medium text-lg leading-relaxed mb-8">{posts[0].excerpt}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-primary font-bold flex items-center gap-2"><User size={18} className="text-primary"/> {posts[0].author}</span>
              <Button variant="outline" className="border-none !p-0 !bg-transparent text-primary group-hover:translate-x-2 transition-transform">
                {t('blog.readArticle')} <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Card>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <Card key={i} className="!p-0 overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <div className="h-60 overflow-hidden relative">
                <img src={post.image} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt={post.title} />
                <div className="absolute top-4 left-4">
                  <span className="bg-bg-base/80 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-primary text-xs font-medium flex items-center gap-1 mb-4">
                  <Clock size={14} /> {post.date}
                </div>
                <h3 className="text-2xl font-display font-bold text-inverted mb-4 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-text-muted text-sm font-medium leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-secondary/50">
                  <span className="text-primary text-sm font-bold flex items-center gap-2"><User size={14} className="text-primary"/> {post.author}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="!px-10 !py-3">{t('blog.loadMore')}</Button>
        </div>

      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/pages/Blog.tsx'), tsxContent);

// Update JSON files
const localesPath = path.join(__dirname, '../src/locales');
const enFile = path.join(localesPath, 'en.json');
const taFile = path.join(localesPath, 'ta.json');
const urFile = path.join(localesPath, 'ur.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const ta = JSON.parse(fs.readFileSync(taFile, 'utf8'));
const ur = JSON.parse(fs.readFileSync(urFile, 'utf8'));

Object.assign(en.blog, {
  post1Title: "The Importance of Intentions Before Seeking Knowledge",
  post1Author: "Shaykh Abdullah",
  post1Date: "Rajab 14, 1445",
  post1Category: "Tazkiyah",
  post1Excerpt: "Before opening the book of Syntax or Jurisprudence, the heart must be emptied of all motives other than the pleasure of the Divine. A deep dive into the foundational Hadith of intentions.",
  post2Title: "Understanding the Usul of Imam Abu Hanifa",
  post2Author: "Mufti Zaid",
  post2Date: "Jumada al-Thani 28, 1445",
  post2Category: "Fiqh",
  post2Excerpt: "A historical and academic breakdown of how the Hanafi school extrapolates rulings from the primary texts, and why its methodology has stood the test of time.",
  post3Title: "Student Life: Balancing Hifz and Academics",
  post3Author: "Admin",
  post3Date: "Jumada al-Awwal 10, 1445",
  post3Category: "Campus Life",
  post3Excerpt: "An interview with three of our top-performing students on how they manage the rigorous demands of memorizing the Quran while keeping up with the Dars-e-Nizami curriculum.",
  post4Title: "The Revival of Arabic Rhetoric (Balaghah)",
  post4Author: "Ustadha Fatima",
  post4Date: "Rabi al-Thani 5, 1445",
  post4Category: "Language",
  post4Excerpt: "Why understanding the intricate subtleties of classical Arabic rhetoric is absolutely non-negotiable for anyone wishing to truly taste the linguistic miracle of the Quran.",
  catAll: "All",
  catFiqh: "Fiqh",
  catTazkiyah: "Tazkiyah",
  catLanguage: "Language",
  readArticle: "Read Article",
  loadMore: "Load More Articles"
});

Object.assign(ta.blog, {
  post1Title: "அறிவைத் தேடும் முன் நோக்கங்களின் முக்கியத்துவம்",
  post1Author: "ஷேக் அப்துல்லா",
  post1Date: "ரஜப் 14, 1445",
  post1Category: "தஸ்கியா",
  post1Excerpt: "தொடரியல் அல்லது சட்டவியல் புத்தகத்தைத் திறப்பதற்கு முன், இதயம் இறைவனின் திருப்தியைத் தவிர வேறு எந்த நோக்கங்களும் இல்லாமல் காலியாக இருக்க வேண்டும். நோக்கங்களின் அடிப்படை ஹதீஸில் ஒரு ஆழமான பார்வை.",
  post2Title: "இமாம் அபு ஹனிபாவின் உசூலைப் புரிந்துகொள்வது",
  post2Author: "முஃப்தி சைத்",
  post2Date: "ஜுமாதா அல்-தானி 28, 1445",
  post2Category: "ஃபிக்ஹ்",
  post2Excerpt: "ஹனஃபி பள்ளி முதன்மை நூல்களிலிருந்து தீர்ப்புகளை எவ்வாறு விரிவுபடுத்துகிறது மற்றும் அதன் வழிமுறை ஏன் காலத்தின் சோதனையாக நிற்கிறது என்பதற்கான வரலாற்று மற்றும் கல்வி முறிவு.",
  post3Title: "மாணவர் வாழ்க்கை: ஹிஃப்ஸ் மற்றும் கல்வியியலை சமநிலைப்படுத்துதல்",
  post3Author: "நிர்வாகி",
  post3Date: "ஜுமாதா அல்-அவ்வல் 10, 1445",
  post3Category: "வளாக வாழ்க்கை",
  post3Excerpt: "எங்கள் சிறந்த செயல்திறன் கொண்ட மூன்று மாணவர்களுடனான ஒரு நேர்காணல், தர்ஸ்-இ-நிஜாமி பாடத்திட்டத்தைத் தொடரும் அதே வேளையில் குர்ஆனை மனப்பாடம் செய்வதற்கான கடுமையான கோரிக்கைகளை அவர்கள் எவ்வாறு நிர்வகிக்கிறார்கள்.",
  post4Title: "அரபு சொல்லாட்சியின் மறுமலர்ச்சி (பலாகா)",
  post4Author: "உஸ்தாதா பாத்திமா",
  post4Date: "ரபி அல்-தானி 5, 1445",
  post4Category: "மொழி",
  post4Excerpt: "குர்ஆனின் மொழியியல் அற்புதத்தை உண்மையாக ருசிக்க விரும்பும் எவருக்கும் கிளாசிக்கல் அரபு சொல்லாட்சியின் சிக்கலான நுணுக்கங்களைப் புரிந்துகொள்வது ஏன் முற்றிலும் பேச்சுவார்த்தைக்குட்படாதது.",
  catAll: "அனைத்தும்",
  catFiqh: "ஃபிக்ஹ்",
  catTazkiyah: "தஸ்கியா",
  catLanguage: "மொழி",
  readArticle: "கட்டுரையை வாசிக்கவும்",
  loadMore: "மேலும் கட்டுரைகளை ஏற்றவும்"
});

Object.assign(ur.blog, {
  post1Title: "علم حاصل کرنے سے پہلے نیت کی اہمیت",
  post1Author: "شیخ عبداللہ",
  post1Date: "14 رجب، 1445",
  post1Category: "تزکیہ",
  post1Excerpt: "نحو یا فقہ کی کتاب کھولنے سے پہلے، دل کو رضائے الٰہی کے سوا تمام مقاصد سے خالی ہونا چاہیے۔ نیتوں کی بنیادی حدیث میں ایک گہرا غوطہ۔",
  post2Title: "امام ابو حنیفہ کے اصولوں کو سمجھنا",
  post2Author: "مفتی زید",
  post2Date: "28 جمادی الثانی، 1445",
  post2Category: "فقہ",
  post2Excerpt: "ایک تاریخی اور علمی تجزیہ کہ حنفی مکتب فکر کس طرح بنیادی نصوص سے احکام اخذ کرتا ہے، اور اس کا طریقہ کار وقت کی کسوٹی پر کیوں کھڑا رہا ہے۔",
  post3Title: "طالب علم کی زندگی: حفظ اور تعلیم میں توازن",
  post3Author: "ایڈمن",
  post3Date: "10 جمادی الاول، 1445",
  post3Category: "کیمپس کی زندگی",
  post3Excerpt: "ہمارے تین بہترین کارکردگی کا مظاہرہ کرنے والے طلباء کا انٹرویو کہ وہ درس نظامی کے نصاب کے ساتھ ساتھ قرآن حفظ کرنے کے سخت مطالبات کو کس طرح سنبھالتے ہیں۔",
  post4Title: "عربی بلاغت کا احیاء",
  post4Author: "استادہ فاطمہ",
  post4Date: "5 ربیع الثانی، 1445",
  post4Category: "زبان",
  post4Excerpt: "کلاسیکی عربی بلاغت کی پیچیدہ باریکیوں کو سمجھنا اس شخص کے لیے کیوں قطعی طور پر ناقابل گفت و شنید ہے جو قرآن کے لسانی معجزے کا حقیقی ذائقہ چکھنا چاہتا ہے۔",
  catAll: "سب",
  catFiqh: "فقہ",
  catTazkiyah: "تزکیہ",
  catLanguage: "زبان",
  readArticle: "مضمون پڑھیں",
  loadMore: "مزید مضامین لوڈ کریں"
});

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(taFile, JSON.stringify(ta, null, 2));
fs.writeFileSync(urFile, JSON.stringify(ur, null, 2));
