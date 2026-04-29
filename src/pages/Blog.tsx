import React from 'react';
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
             <button key={i} className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${i===0 ? 'bg-bg-base text-primary' : 'bg-secondary text-text-muted hover:bg-primary hover:text-inverted'}`}>
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
