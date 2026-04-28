'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const SocialProof = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate fetching latest 6 posts from Instagram
    // In a production environment, this would call an API route that uses the Instagram Graph API
    // or a service like Behance/Elfsight/etc.
    const fetchPosts = async () => {
      try {
        // Updated with manual post data
        const mockPosts = [
          { 
            id: '1', 
            img: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777408566/SnapInsta.to_640442587_18573115267063319_6243020657686519392_n_lgauie.jpg", 
            link: "https://www.instagram.com/p/DVIYzOaEcqJ/", 
            type: "image" 
          },
          { 
            id: '2', 
            img: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777408549/Screenshot_2026-04-29_020446_jszx1n.png", 
            link: "https://www.instagram.com/reel/DXBZh-8kS_f/", 
            type: "video" 
          },
          { 
            id: '3', 
            img: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777408566/SnapInsta.to_627654922_18566190112063319_7018736670702470918_n_tzxulz.jpg", 
            link: "https://www.instagram.com/p/DUu-TD5kdLx/", 
            type: "image" 
          },
          { 
            id: '4', 
            img: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777408979/Screenshot_2026-04-29_021236_xyiesa.png", 
            link: "https://www.instagram.com/reel/DUqIOPtkV6c/", 
            type: "video" 
          },
          { 
            id: '5', 
            img: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777408567/SnapInsta.to_626426717_18562260988063319_6080158698704568215_n_nxcioc.jpg", 
            link: "https://www.instagram.com/p/DUSfiudkX-e/", 
            type: "image" 
          },
          { 
            id: '6', 
            img: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777408549/Screenshot_2026-04-29_020353_hl5xgc.png", 
            link: "https://www.instagram.com/reel/DWti4nhkTbo/", 
            type: "video" 
          }
        ];
        
        // Simulating minor network delay for transition feel
        await new Promise(resolve => setTimeout(resolve, 500));
        setPosts(mockPosts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Instagram posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-24 bg-brand-cream/10 border-y border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center justify-center space-x-2 text-brand-gold mb-4 border border-brand-sand px-4 py-1.5 rounded-full bg-white">
          <Instagram size={18} />
          <span className="font-bold tracking-widest text-[10px] uppercase tracking-wider">Follow the Science</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
          Follow Us for Skincare Tips & Real Results
        </h2>
        <p className="text-brand-text-light max-w-2xl mx-auto text-lg leading-relaxed">
          Science-backed advice, myth-busting, and treatment insights from Dr. Shifa Yadav.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border border-brand-sand p-4 rounded-[2.5rem] bg-white shadow-sm">
          {loading ? (
            // Skeleton loader
            [...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-brand-sand/20 animate-pulse rounded-2xl" />
            ))
          ) : (
            posts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative aspect-square overflow-hidden group cursor-pointer rounded-2xl bg-brand-cream"
              >
                <Image 
                  src={post.img} 
                  alt={`Instagram post ${i + 1}`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-10">
                  <div className="flex flex-col items-center">
                    <Instagram size={28} className="mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest">View on Instagram</span>
                  </div>
                </div>
                {post.type === 'video' && (
                  <div className="absolute top-4 right-4 text-white drop-shadow-md z-10 bg-black/20 p-1.5 rounded-full backdrop-blur-sm">
                    <Play size={14} fill="white" />
                  </div>
                )}
              </motion.a>
            ))
          )}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a
            href="https://www.instagram.com/dermshifayadav/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-brown text-white rounded-full font-bold hover:bg-brand-dark transition-all shadow-2xl shadow-brand-brown/20"
          >
            <Instagram size={20} />
            <span>Join @dermshifayadav</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
