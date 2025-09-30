import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import { Award, CheckCircle, MapPin, Phone, TrendingUp, Users2, ChevronUp, Instagram, Facebook, Building2, Zap, Shield, Sparkles } from 'lucide-react';
import logo from '@/images/logo.jpg'
import telegram_logo from "@/images/icons8-telegram-48.png"
import youtube_l from '@/images/icons8-youtube-48 (1).png'

interface AnimationVariants {
    fadeInLeft: any;
    fadeInRight: any;
    fadeInUp: any;
    stagger: any;
    scaleIn: any;
}

interface SectionHeaderProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'accent';
}

interface InfoCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'gradient' | 'accent' | 'glass' | 'navy';
}

// ScrollToTop Button Component
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-2xl hover:shadow-blue-300/25 transition-all duration-300 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
        >
            <ChevronUp className="w-6 h-6" />
        </motion.button>
    );
};

// Animated Background Component
const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"></div>
            <motion.div
                className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-blue-300/10 rounded-full blur-3xl"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-slate-100/10 rounded-full blur-3xl"
                animate={{
                    rotate: [360, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};

// Components
const SectionHeader: React.FC<SectionHeaderProps> = ({
    children,
    className = "",
    variant = 'primary'
}) => {
    const variants = {
        primary: 'text-navy-900 font-bold',
        secondary: 'bg-gradient-to-r from-blue-700 via-navy-800 to-blue-600 bg-clip-text text-transparent font-bold',
        accent: 'text-blue-600 font-semibold'
    };

    return (
        <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl text-center mb-12 ${variants[variant]} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.h2>
    );
};

const InfoCard: React.FC<InfoCardProps> = ({
    children,
    className = "",
    variant = 'default'
}) => {
    const baseClasses = "transition-all duration-700 hover:scale-[1.02] rounded-3xl";

    const variantClasses = {
        default: "bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-blue-100/50 p-8",
        gradient: "bg-gradient-to-br from-white/95 via-blue-50/30 to-slate-50/40 backdrop-blur-md shadow-2xl hover:shadow-blue-200/20 border border-blue-100/30 p-6 lg:p-10",
        accent: "bg-gradient-to-br from-blue-50/80 to-white/90 backdrop-blur-sm shadow-xl hover:shadow-blue-200/25 border border-blue-200/30 p-3 lg:p-6",
        glass: "bg-white/20 backdrop-blur-lg shadow-xl border border-white/30 hover:bg-white/30 p-8",
        navy: "bg-gradient-to-br from-navy-800 to-blue-900 text-white shadow-2xl hover:shadow-blue-900/30 p-10"
    };

    return (
        <motion.div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

// CTA Button Component
const CTAButton: React.FC<{
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'social' | 'pick' | 'telegram' | 'youtube';
}> = ({ href, children, icon, variant = 'primary' }) => {
    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-blue-300/30 hover:from-blue-700 hover:to-blue-800",
        secondary: "bg-gradient-to-r from-navy-700 to-navy-800 text-white shadow-xl hover:shadow-navy-300/30 hover:from-navy-800 hover:to-navy-900",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white/80 backdrop-blur-sm",
        pick: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-90",
        social: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-xl hover:shadow-blue-300/40",
        telegram: "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg hover:shadow-red-200",
        youtube: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-pink-200"
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center space-x-3 px-3 md:px-5 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ${variants[variant]}`}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
        >
            {icon && <span className="w-6 h-6">{icon}</span>}
            <span>{children}</span>
        </motion.a>
    );
};

const createAnimationVariants = (prefersReducedMotion: boolean): AnimationVariants => ({
    fadeInLeft: {
        initial: { opacity: 0, x: prefersReducedMotion ? 0 : -80 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: prefersReducedMotion ? 0.1 : 1, ease: 'easeOut' }
    },
    fadeInRight: {
        initial: { opacity: 0, x: prefersReducedMotion ? 0 : 80 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: prefersReducedMotion ? 0.1 : 1, ease: 'easeOut' }
    },
    fadeInUp: {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: prefersReducedMotion ? 0.1 : 0.8, ease: 'easeOut' }
    },
    scaleIn: {
        initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: prefersReducedMotion ? 0.1 : 0.7, ease: 'easeOut' }
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.15
            }
        }
    }
});

const COMPANY_ADVANTAGES = [
    'Premium sifat – eng yuqori darajali materiallar va zamonaviy texnologiyalar',
    'Tezkor yetkazib berish – professional jamoa tomonidan qisqa muddat ichida',
    'Raqobatbardosh narxlar – sifat va byudjetingiz o\'rtasidagi mukammal muvozanat',
    'Malakali mutaxasislar – 8 yillik tajribaga ega professional jamoa',
    'To\'liq kafolat – barcha mahsulotlar uchun uzaytirilgan kafolat xizmati',
    'Individual yondashuv – har bir mijozning noyob ehtiyojlariga moslashtirilgan yechimlar',
    'Sertifikatlangan ishlab chiqarish – barcha xalqaro standartlarga javob beradi',
    '24/7 texnik yordam – doimiy qo\'llab-quvvatlash va maslahat xizmati'
];

const KEY_FEATURES = [
    {
        icon: Zap,
        title: 'Yuqori Tezlik',
        description: 'Zamonaviy texnologiyalar yordamida rekord vaqt ichida ishlab chiqarish va o\'rnatish. An\'anaviy usullarga qaraganda 70% tezroq.',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Shield,
        title: 'Maksimal Bardoshlik',
        description: 'Eng qattiq ob-havo sharoitlariga bardosh beradigan yuqori sifatli materiallar. 25+ yil xizmat muddati kafolatlanadi.',
        color: 'from-indigo-600 to-indigo-500'
    },
    {
        icon: Building2,
        title: 'Iqtisodiy Samaradorlik',
        description: 'Traditional qurilishga nisbatan 40-60% arzonroq xarajat. Uzoq muddatda minimal ta\'mirlash xarajatlari.',
        color: 'from-blue-400 to-blue-500'
    },
    {
        icon: Sparkles,
        title: 'Moslashuvchanlik',
        description: 'Modulli tizim orqali oson kengaytirish, o\'zgartirish va ko\'chirish imkoniyati. Biznesingiz bilan birga o\'sadi.',
        color: 'from-blue-600 to-blue-700'
    }
] as const;

const SERVICES = [
    'Zamonaviy savdo do\'konlari – qisqa vaqtda ishga tayyor holatda',
    'Katta hajmli omborxonalar – xavfsiz va keng maydonli',
    'Funksional angarlar – qishloq xo\'jaligi va sanoat ehtiyojlari uchun',
    'Mustahkam avtoturargohlar – transport vositalari uchun ishonchli himoya',
    'Professional ustaxonalar – texnik xizmatlar uchun optimal muhit',
    'Maxsus loyihalar – noyob talablaringizga moslashtirilgan individual yechimlar'
];

function ButkaUz() {
    const prefersReducedMotion = !!useReducedMotion();
    const variants = useMemo(() => createAnimationVariants(prefersReducedMotion), [prefersReducedMotion]);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    return (
        <div className='w-full min-h-screen relative' style={{
            '--navy-700': '#1e3a5f',
            '--navy-800': '#1e40af',
            '--navy-900': '#1e3a8a'
        } as React.CSSProperties}>
            <AnimatedBackground />
            <ScrollToTop />

            <div className="container mx-auto relative z-10 px-3 md:px-6">
                {/* Hero Section */}
                <motion.div
                    className="text-center py-20 mt-8"
                    initial={variants.fadeInUp.initial}
                    animate={variants.fadeInUp.animate}
                    transition={variants.fadeInUp.transition}
                >
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className='flex items-center justify-center mb-6'>
                            <div className="relative">
                                <img src={logo} alt="butka logo" className='w-44 h-44 rounded-3xl shadow-2xl border-4 border-white' />
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-navy-600 rounded-3xl blur opacity-30"></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 tracking-tight">
                            <span className="bg-gradient-to-r from-blue-700 via-navy-800 to-blue-600 bg-clip-text text-transparent">
                                BUTKA DO'KONLAR
                            </span>
                        </h1>

                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-navy-600 mx-auto mb-8 rounded-full"></div>
                    </motion.div>

                    <motion.p
                        className="text-2xl md:text-3xl text-navy-700 font-semibold mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Sifat bizning ustuvorimiz, muvaffaqiyat sizning natijangiz
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-slate-600 mb-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        O'zbekiston bozoridagi eng ilg'or va ishonchli metall konstruksiya fabrikasi.
                        8 yillik tajriba va minglab mamnun mijozlar.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <CTAButton href="tel:+998787777557" variant="primary">
                            <div className='flex gap-1 items-center'>
                                <Phone className="w-6 h-6" />
                                Buyurtma Berish
                            </div>

                        </CTAButton>
                        <CTAButton href="https://t.me/butkadokonlaruz" variant="outline">
                            Batafsil Ma'lumot
                        </CTAButton>
                    </motion.div>
                </motion.div>

                {/* Process Steps */}
                <motion.section className="py-20">
                    <SectionHeader variant="secondary">
                        Professional ishlab chiqarish jarayoni
                    </SectionHeader>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                // icon: '📞',
                                title: 'Maslahat',
                                desc: 'Professional menejerlarimiz sizning ehtiyojlaringizni batafsil o\'rganib, eng optimal yechimni taklif qiladi.',
                                step: '01'
                            },
                            {
                                // icon: '🎯',
                                title: 'Loyihalash',
                                desc: 'Malakali muhandislar tomonidan sizning talablaringizga moslashtirilgan loyiha ishlab chiqiladi.',
                                step: '02'
                            },
                            {
                                // icon: '⚙️',
                                title: 'Ishlab chiqarish',
                                desc: 'Zamonaviy uskunalar yordamida yuqori sifat nazorati ostida mahsulot tayyorlanadi.',
                                step: '03'
                            },
                            {
                                // icon: '🚀',
                                title: 'Yetkazib berish',
                                desc: 'Professional o\'rnatish jamoasi mahsulotni belgilangan vaqtda sifatli tarzda yetkazib beradi.',
                                step: '04'
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <InfoCard variant="glass" className="h-full text-center relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-4xl font-bold text-blue-200/50">
                                        {step.step}
                                    </div>
                                    {/* <div className="text-6xl mb-6">{step.icon}</div> */}
                                    <h3 className="text-2xl font-bold mb-4 text-navy-800">{step.title}</h3>
                                    <p className='text-slate-600 leading-relaxed text-base'>{step.desc}</p>
                                </InfoCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Video Section */}
                <motion.section className="py-20">
                    <InfoCard variant="gradient">
                        <SectionHeader variant="primary">
                            Bizning professional ishlarimiz
                        </SectionHeader>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                            {[
                                "https://youtube.com/embed/PqgI87hyUfw",
                                "https://youtube.com/embed/8UJlbhrDiOc",
                                "https://youtube.com/embed/f-veRHzlm3Q",
                                "https://youtube.com/embed/RrN-m6NACQU"
                            ].map((src, index) => (
                                <motion.iframe
                                    key={src}
                                    src={src}
                                    title={`Butka Do'kon Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-64 rounded-2xl shadow-xl"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            ))}
                        </div>

                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.02 }}
                        >
                            <CTAButton href="https://www.youtube.com/@butka.dokonlar_uz" variant="primary">
                                Barcha ishlarni ko'rish
                            </CTAButton>
                        </motion.div>
                    </InfoCard>
                </motion.section>

                {/* Social Media Section */}
                <motion.section className="py-20">
                    <InfoCard variant="navy">
                        <SectionHeader className="text-white mb-8">
                            Bizni ijtimoiy tarmoqlarda kuzatib boring
                        </SectionHeader>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <CTAButton href="https://www.facebook.com/share/18VPSvPc1a/?mibextid=wwXIfr" variant="social">
                                <div className='flex gap-1 items-center'>
                                    <Facebook className="w-6 h-6" />
                                    Facebook
                                </div>
                            </CTAButton>
                            <CTAButton href="https://www.instagram.com/butka.dokonlar_uz/profilecard/?igsh=MXdrdzZpNDZxczg1MQ==" variant="pick">
                                <div className='flex gap-1 items-center'>
                                    <Instagram className="w-6 h-6" />
                                    Instagram
                                </div>
                            </CTAButton>
                            <CTAButton href="https://t.me/butkadokonlaruz" variant="telegram">
                                <div className='flex gap-1 items-center'>
                                    <img src={telegram_logo} alt="telegram logo" className='w-7 h-7' />
                                    Telegram
                                </div>

                            </CTAButton>
                            <CTAButton href="https://www.youtube.com/@butka.dokonlar_uz" variant="youtube">
                                <div className='flex gap-1 items-center'>
                                    <img src={youtube_l} alt="you tube logo" className='w-7 h-7' />
                                    YouTube
                                </div>

                            </CTAButton>
                        </div>
                    </InfoCard>
                </motion.section>

                {/* Company Advantages */}
                <motion.section className="py-20">
                    <InfoCard variant="default">
                        <SectionHeader variant="secondary" className="flex items-center justify-center gap-4">
                            <Award className="w-16 h-16 text-blue-600" />
                            Nima uchun BUTKA?
                        </SectionHeader>

                        <div className="grid md:grid-cols-2 gap-8">
                            {COMPANY_ADVANTAGES.map((advantage, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-blue-50/80 transition-all duration-300"
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-slate-700 leading-relaxed text-lg">{advantage}</span>
                                </motion.div>
                            ))}
                        </div>
                    </InfoCard>
                </motion.section>

                {/* Key Features */}
                <motion.section className="py-20">
                    <InfoCard variant="accent">
                        <SectionHeader variant="primary" className="flex items-center justify-center gap-4">
                            <TrendingUp className="w-16 h-16 text-blue-600" />
                            Butka Do'konning asosiy afzalliklarimiz
                        </SectionHeader>

                        <div className="grid md:grid-cols-2 gap-10">
                            {KEY_FEATURES.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.2, duration: 0.8 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -8 }}
                                    >
                                        <InfoCard variant="glass" className="h-full">
                                            <div className="flex items-start space-x-6">
                                                <div className={`p-5 rounded-3xl bg-gradient-to-r ${feature.color} shadow-2xl`}>
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-2xl font-bold text-navy-800 mb-4">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed text-lg">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </InfoCard>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </InfoCard>
                </motion.section>

                {/* FAQ Section */}
                <motion.section className="py-20">
                    <InfoCard variant="gradient">
                        <SectionHeader variant="secondary">Tez-tez so'raladigan savollar</SectionHeader>
                        <div className="space-y-8">
                            {[
                                {
                                    q: "Nima uchun Butka do'konlarini tanlashim kerak?",
                                    a: "8 yillik tajriba, yuqori sifat, raqobatbardosh narxlar va professional yondashuv - bizning asosiy afzalliklarimiz."
                                },
                                {
                                    q: "Bizdan xarid qilishning qanday afzalliklari bor?",
                                    a: "Boshlang'ich va o'rta bizneslar uchun minimal xarajat bilan maksimal natija. Tez o'rnatish va uzoq muddat xizmat ko'rsatish."
                                },
                                {
                                    q: "Buyurtmalarni kim bajaradi?",
                                    a: "Barcha ishlar faqat malakali mutaxasislar tomonidan bajariladi. Biz sifat va professional yondashuvni kafolatlaymiz."
                                },
                                {
                                    q: "Sizlarga nima uchun ishonishim kerak?",
                                    a: "O'zbekistondagi eng birinchi va yetakchi fabrika sifatida 8 yil davomida minglab mijozlarni xursand qildik."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border-l-6 border-blue-500"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-start">
                                        <span className="text-blue-500 mr-3 text-2xl">Q:</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-slate-600 ml-8 leading-relaxed text-lg">
                                        <span className="text-blue-500 mr-3 text-2xl">A:</span>
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </InfoCard>
                </motion.section>

                {/* About Section */}
                <motion.section className="py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-700 via-navy-800 to-blue-600 bg-clip-text text-transparent">
                                BUTKA DO'KON HAQIDA
                            </h2>

                            <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
                                {[
                                    "Zamonaviy metall konstruksiya texnologiyalari asosida quriladigan do'konlar - bu ertangi kunning yechimi bugun. Bizning mahsulotlarimiz nafaqat mustahkam va ishonchli, balki iqtisodiy jihatdan ham maksimal samarali.",
                                    "Tezkor ishlab chiqarish jarayoni sizga vaqtni tejash imkonini beradi - bir necha hafta ichida biznesingizni boshlashingiz mumkin. Professional yondashuv va zamonaviy uskunalar yordamida eng yuqori sifat kafolatlanadi.",
                                    "Modulli tizim tufayli kelajakda biznesingizni kengaytirish, o'zgartirish yoki hatto boshqa joyga ko'chirish juda oson. Bu sizning investitsiyangizni himoya qiladi va uzoq muddatli muvaffaqiyat ta'minlaydi."
                                ].map((text, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.3, duration: 0.8 }}
                                        viewport={{ once: true }}
                                        className="p-6 bg-blue-50/50 rounded-2xl border-l-4 border-blue-500"
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <InfoCard variant="navy">
                                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                                    Bizning <span className='text-4xl italic text-blue-300'>Xizmatlar</span>
                                </h3>

                                <div className="space-y-6">
                                    {SERVICES.map((service, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-blue-100 text-lg leading-relaxed">{service}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </InfoCard>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Statistics */}
                <motion.section className="py-20">
                    <InfoCard variant="gradient">
                        <SectionHeader variant="secondary">
                            Bizning <span className="text-blue-600">Yutuqlarimiz</span>
                        </SectionHeader>

                        {/* <div className="grid md:grid-cols-3 gap-10 mb-16">
                            {[
                                { icon: TrendingUp, label: "Yillik o'sish sur'ati", value: "25%+", color: "from-blue-500 to-blue-600" },
                                { icon: Award, label: "2025-yil rejasi", value: "1000+", color: "from-indigo-600 to-indigo-500" },
                                { icon: Users2, label: "Malakali mutaxasislar", value: "100+", color: "from-blue-400 to-blue-500" }
                            ].map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100/50"
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.2, duration: 0.8 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-4xl font-bold text-navy-800 mb-3">{stat.value}</div>
                                        <div className="text-slate-600 font-semibold">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div> */}

                        <motion.div
                            className="space-y-8 text-slate-700 leading-relaxed text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            {[
                                "Bizning zamonaviy ishlab chiqarish quvvatimiz kuniga 25 kv.m, oyiga 750 kv.m va yiliga 9000+ kv.m tashkil etadi.",
                                "O'zbekistonning barcha viloyatlarida 100 dan ortiq malakali mutaxasislarimiz professional xizmat ko'rsatadi.",
                                "Yuqori unumdorlik tufayli kuniga 3 tagacha to'liq tayyor do'konni ishlab chiqarishga qodirmiz.",
                                "O'zbekiston bozoridagi birinchi va yetakchi metall konstruksiya fabrikasi sifatida 8 yil davomida mijozlarning ishonchini qozonganmiz."
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="p-3 lg:p-6 bg-white/80 rounded-2xl shadow-lg border-l-6 border-blue-400 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <p className="text-slate-700">{text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InfoCard>
                </motion.section>

                {/* Contact Section */}
                <motion.section className="py-20">
                    <InfoCard variant="default">
                        <SectionHeader variant="primary" className="flex items-center justify-center gap-4">
                            <Phone className="hidden lg:inline-flex w-16 h-16 text-blue-600" />
                            Biz bilan bog'laning
                        </SectionHeader>

                        <div className="max-w-5xl mx-auto">
                            <motion.p
                                className="text-slate-700 text-xl leading-relaxed text-center mb-16 font-medium"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Muvaffaqiyatli biznes - to'g'ri qaror bilan boshlanadi. Bizning professional
                                metall konstruksiya yechimlarimiz bilan sizning biznez rejalaringizni haqiqatga aylantiring.
                            </motion.p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <InfoCard variant="accent" className="h-full">
                                        <h3 className="text-3xl font-bold text-navy-800 mb-8 text-center">
                                            Aloqa ma'lumotlari
                                        </h3>

                                        <div className="space-y-6">
                                            <motion.a
                                                href="tel:+998787777557"
                                                className="flex items-center gap-6 p-4 md:p-6 bg-white/90 rounded-2xl hover:bg-white transition-all duration-300 group shadow-lg"
                                                whileHover={{ scale: 1.03, x: 5 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <div className="hidden lg:inline-flex p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                                                    <Phone className="w-7 h-7 text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-navy-800 text-lg">Telefon raqami</p>
                                                    <p className="text-blue-600 font-semibold text-xl">+998 78 777 75 57</p>
                                                </div>
                                            </motion.a>
                                        </div>
                                    </InfoCard>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <InfoCard variant="accent" className="h-full">
                                        <h3 className="flex flex-col justify-center text-3xl font-bold text-navy-800 mb-8 text-center">
                                            <span className='flex items-center'><MapPin className="w-7 h-7 text-indigo-600 ml-16 md:ml-[130px]" /> Bizning</span> joylashuvimiz
                                        </h3>

                                        <div className="flex items-start gap-6 p-6 bg-white/90 rounded-2xl shadow-lg">
                                            {/* <div className="p-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl flex-shrink-0 shadow-lg">

                                            </div> */}
                                            <div>
                                                <p className="font-bold text-navy-800 mb-1 text-lg">Fabrika manzili</p>
                                                <div className="text-slate-600">
                                                    <p className="font-semibold">Toshkent shahar, Yangihayot tumani</p>
                                                    <p>Metro: Turon bekat</p>
                                                    <p>Index bozor chorraxasi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </motion.div>
                            </div>

                            {/* Final CTA */}
                            <motion.div
                                className="text-center mt-16"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-navy-800 mb-8">
                                    Biznesingizni <span className='text-indigo-600'>Butka Do'kon</span> bilan keyingi bosqichga olib chiqing
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <CTAButton href="tel:+998787777557" variant="primary">
                                        <div className='flex gap-1 items-center'>
                                            <Phone className="w-6 h-6" />
                                            Buyurtma bering
                                        </div>
                                    </CTAButton>
                                    <CTAButton href="https://t.me/butkadokonlaruz" variant="outline">
                                        Ko'proq ma'lumot
                                    </CTAButton>
                                </div>
                            </motion.div>
                        </div>
                    </InfoCard>
                </motion.section>

                {/* Footer */}
                <motion.footer
                    className="py-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-6">
                        <motion.h3
                            className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-navy-800 to-blue-600 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            BUTKA DO'KON
                        </motion.h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-navy-600 mx-auto rounded-full"></div>
                        <p className="text-slate-600 text-lg font-medium">
                            O'zbekistonning eng ishonchli metall konstruksiya fabrikasi
                        </p>
                        <p className="text-sm text-slate-500">
                            © 2025 Butka Do'kon. Barcha huquqlar himoyalangan.
                        </p>
                    </div>
                </motion.footer>
            </div>
        </div>
    );
}

export default ButkaUz;