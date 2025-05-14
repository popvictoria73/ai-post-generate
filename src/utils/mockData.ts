import { BrandProfile, PostVariant, SocialPlatform } from '../types';

// Mock unsplash images by category
const unsplashUrls = {
  business: [
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg',
    'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
    'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    'https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg',
  ],
  food: [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  ],
  fitness: [
    'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
    'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg',
    'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg',
    'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
    'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg',
  ],
  travel: [
    'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg',
    'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png',
    'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
    'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
    'https://images.pexels.com/photos/3182530/pexels-photo-3182530.jpeg',
  ],
  technology: [
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
    'https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg',
  ],
  fashion: [
    'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg',
    'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
    'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg',
    'https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg',
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg',
  ],
};

// Platform-specific post templates
const postTemplates = {
  instagram: {
    casual: [
      "Just dropped! 🔥 {keyword} that's taking the world by storm. Double tap if you're as excited as we are! #trending",
      "Can't get enough of our new {keyword}! What's your favorite thing about it? Drop a comment below 👇 #loveit",
      "Living for these {keyword} moments! 💫 Tag someone who needs to see this! #instagood",
      "When your {keyword} game is just too strong 💪 Share your thoughts below! #instadaily",
      "This {keyword} moment hits different ✨ Who else can relate? #mood",
    ],
    professional: [
      "Introducing our latest innovation in {keyword}. Designed to elevate your experience and deliver exceptional results. #innovation",
      "We're proud to present our newest {keyword} solution. Developed with precision and care to meet your professional needs. #excellence",
      "Elevating standards with our premium {keyword} offering. Discover the difference today. #quality",
      "Transform your approach with our innovative {keyword} solution. Book a consultation today. #business",
      "Experience the future of {keyword}. Engineered for excellence, designed for you. #innovation",
    ],
    funny: [
      "When your {keyword} is so good, even your cat gets jealous. Yes, we went there! 😹 #funnynotfunny",
      "Breaking news: Our {keyword} is so amazing it made Monday feel like Friday! Don't believe us? Try it yourself! 🤣 #weekendvibes",
      "Plot twist: {keyword} actually makes you a superhero! Side effects may include extreme awesomeness 🦸‍♂️ #funny",
      "They said {keyword} couldn't get any better. We said 'hold my coffee' ☕️ #lol",
      "Warning: {keyword} may cause excessive happiness and spontaneous dance parties 💃 #goodvibes",
    ],
    inspirational: [
      "Your journey with {keyword} starts today. Every great achievement begins with the decision to try. ✨ #motivation",
      "Let {keyword} be your guide to greatness. The future belongs to those who believe in the beauty of their dreams. 🌟 #inspire",
      "Transform your life with {keyword}. Sometimes the smallest step in the right direction ends up being the biggest step of your life. 🚀 #growth",
      "Embrace the power of {keyword}. Your potential is limitless. 💫 #believe",
      "Make {keyword} your superpower. Success is not final, failure is not fatal: it is the courage to continue that counts. 💪 #motivation",
    ],
    educational: [
      "Did you know? {keyword} can improve your productivity by 73%! Learn how in our latest guide. 📚 #learning",
      "The science behind {keyword}: Breaking down the facts that matter. Swipe to learn more! 🔬 #education",
      "5 things nobody told you about {keyword}. Number 4 will surprise you! 🤓 #didyouknow",
      "Master {keyword} in 3 simple steps. Save this post for later! 📝 #learning",
      "Understanding {keyword}: A comprehensive guide for beginners. Questions? Drop them below! 📖 #education",
    ],
  },
  linkedin: {
    professional: [
      "Proud to announce our latest advancement in {keyword} technology. This breakthrough represents years of dedicated research and development by our talented team. #Innovation #Leadership",
      "We're transforming the {keyword} industry with our newest solution. Designed to increase efficiency by 40% while reducing operational costs. #BusinessGrowth #Innovation",
      "Revolutionizing {keyword} for the modern workplace. Our latest solution sets new industry standards. #Innovation",
      "Introducing enterprise-grade {keyword} solutions. Empowering businesses to achieve more. #Business",
      "Leading the {keyword} revolution with cutting-edge technology. Partner with us for success. #Innovation",
    ],
    educational: [
      "3 key insights we've learned about {keyword} that are changing the industry: 1) Integration matters 2) User experience drives adoption 3) Analytics provide the competitive edge. What's your experience? #ProfessionalDevelopment",
      "New whitepaper: The Future of {keyword} in Enterprise Solutions. Download to discover how market leaders are leveraging this technology to drive significant ROI. #ThoughtLeadership",
      "5 critical trends shaping {keyword} in 2025. Download our comprehensive report. #Research",
      "The impact of {keyword} on business transformation: A data-driven analysis. #Insights",
      "Understanding {keyword}: From concept to implementation. Free webinar this week. #Learning",
    ],
  },
  twitter: {
    casual: [
      "Just launched our new {keyword}! RT if you're excited to check it out ✨ #NewRelease",
      "Hot take: {keyword} is about to change everything. You heard it here first! 🔥 #GameChanger",
      "That moment when {keyword} just hits different 💫 Who else feels this? #Vibes",
      "POV: You just discovered our new {keyword} 🤯 #MindBlown",
      "Living for this {keyword} energy rn ⚡️ #Mood",
    ],
    funny: [
      "Our {keyword} is so good, it makes sliced bread jealous. Yeah, we said it. 🍞 #SorryNotSorry",
      "When your {keyword} is trending but you've been cool all along 😎 #HipsterBrand #AheadOfTheCurve",
      "Plot twist: {keyword} makes everything better 🎭 #TrustUs",
      "Breaking: {keyword} officially better than coffee ☕️ (okay, maybe tied) #Priorities",
      "Our {keyword} brings all the tweets to the yard 🎵 #IykykVibes",
    ],
  },
  facebook: {
    casual: [
      "We're thrilled to introduce our new {keyword}! Tag a friend who needs to see this 👀 #excited",
      "Our team has been working hard on this {keyword} and we're finally ready to share it with you! What do you think? #newlaunch",
      "Big news! Our {keyword} just got even better 🎉 Share your thoughts below!",
      "When {keyword} meets perfection 👌 Who's trying this first?",
      "The wait is over! {keyword} is here to stay 🙌 Tag your squad!",
    ],
    educational: [
      "Did you know? 87% of professionals say that {keyword} improves their productivity. Learn how in our latest blog post (link in comments). #DidYouKnow",
      "Understanding {keyword}: A Beginner's Guide. We've broken down everything you need to know to get started. Questions? Drop them below! #Learning",
      "The complete guide to mastering {keyword}. Save this post for later! 📚",
      "5 myths about {keyword} debunked! Number 3 will surprise you 🤔",
      "Expert tips: Maximizing your {keyword} potential. Free workshop this week!",
    ],
  },
  tiktok: {
    funny: [
      "POV: When you discover our {keyword} for the first time 🤯 #mindblown #trending",
      "Tell me you love our {keyword} without telling me you love our {keyword} 😂 #challenge #viraltrend",
      "When the {keyword} hits just right 🎵 #fyp #viral",
      "POV: Your friend discovers your {keyword} obsession 😅 #relatable",
      "This {keyword} trend is everything 🔥 #tiktokmademebuyit",
    ],
    casual: [
      "This {keyword} hack will change your life. No cap. 💯 #lifehack #gamechanger",
      "3 reasons why our {keyword} is living rent-free in everyone's head right now ✨ #obsessed",
      "The {keyword} routine you didn't know you needed 💫 #routine",
      "POV: Main character energy with our {keyword} ⭐️ #aesthetic",
      "When {keyword} meets perfection 👌 #satisfying",
    ],
  },
  youtube: {
    educational: [
      "The Complete Guide to {keyword} | Everything You Need to Know in 2025",
      "{keyword} Masterclass: From Beginner to Expert in 10 Minutes (FULL TUTORIAL)",
      "5 {keyword} Secrets Pros Don't Want You to Know! (2025 Guide)",
      "How to Master {keyword} in 24 Hours | Step-by-Step Tutorial",
      "{keyword} Tips & Tricks That Will Blow Your Mind! (Beginner Friendly)",
    ],
    professional: [
      "{keyword} Review: Is It Worth The Investment? | Honest Product Analysis 2025",
      "How We Revolutionized Our Business Using {keyword} | Success Story & Tips",
      "The Truth About {keyword} in 2025 | Expert Analysis",
      "{keyword} Pro Tips: Maximize Your Results | Business Guide",
      "Ultimate {keyword} Comparison | Which One Should You Choose?",
    ],
  },
};

// Generate sample hashtags
const generateHashtags = (platform: SocialPlatform, keyword: string): string[] => {
  const commonHashtags = ['#trending', '#2025', '#mustfollow', '#viral', '#featured'];
  
  const platformSpecific = {
    instagram: ['#instadaily', '#photooftheday', '#instagood', '#instamood', '#picoftheday'],
    linkedin: ['#professional', '#business', '#networking', '#success', '#leadership'],
    twitter: ['#trending', '#viral', '#followback', '#trendingnow', '#explore'],
    facebook: ['#community', '#share', '#like', '#follow', '#social'],
    tiktok: ['#fyp', '#foryoupage', '#viral', '#trending', '#tiktokviral'],
    youtube: ['#subscribe', '#ytcreator', '#video', '#youtuber', '#content'],
  };
  
  const keywordHashtags = keyword
    .split(' ')
    .map(word => `#${word.toLowerCase().replace(/[^a-z0-9]/g, '')}`);
  
  const industryHashtags = {
    tech: ['#tech', '#innovation', '#digital', '#future', '#technology'],
    food: ['#foodie', '#delicious', '#yummy', '#foodporn', '#instafood'],
    fitness: ['#fitness', '#health', '#workout', '#motivation', '#fitnessmotivation'],
    fashion: ['#fashion', '#style', '#ootd', '#fashionblogger', '#trendy'],
    travel: ['#travel', '#wanderlust', '#adventure', '#explore', '#travelgram'],
  };
  
  let categoryTags: string[] = [];
  
  // Determine category based on keyword
  if (/tech|software|digital|app|innovation/i.test(keyword)) {
    categoryTags = industryHashtags.tech;
  } else if (/food|recipe|cook|restaurant|dish/i.test(keyword)) {
    categoryTags = industryHashtags.food;
  } else if (/fitness|workout|gym|exercise|health/i.test(keyword)) {
    categoryTags = industryHashtags.fitness;
  } else if (/fashion|style|clothes|outfit|wear/i.test(keyword)) {
    categoryTags = industryHashtags.fashion;
  } else if (/travel|trip|vacation|journey|adventure/i.test(keyword)) {
    categoryTags = industryHashtags.travel;
  }
  
  const allTags = [
    ...keywordHashtags,
    ...platformSpecific[platform],
    ...categoryTags,
    ...commonHashtags,
  ];
  
  // Shuffle array and get unique values
  return [...new Set(allTags)]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
};

// Mock function to generate post variants
export const generatePostVariants = (
  platform: SocialPlatform,
  brandVoice: string,
  keyword: string
): PostVariant[] => {
  const templates = postTemplates[platform][brandVoice as keyof typeof postTemplates[typeof platform]] || 
                    postTemplates[platform].casual || 
                    ["Check out our amazing {keyword}! #awesome"];
  
  // Get random templates
  const template1 = templates[Math.floor(Math.random() * templates.length)];
  let template2 = templates[Math.floor(Math.random() * templates.length)];
  
  // Ensure we don't get the same template twice
  while (template1 === template2 && templates.length > 1) {
    template2 = templates[Math.floor(Math.random() * templates.length)];
  }
  
  // Determine image category based on keyword
  let imageCategory = 'business';
  
  if (/food|meal|restaurant|cook|recipe/i.test(keyword)) {
    imageCategory = 'food';
  } else if (/fitness|workout|gym|exercise|health/i.test(keyword)) {
    imageCategory = 'fitness';
  } else if (/travel|vacation|trip|journey|adventure/i.test(keyword)) {
    imageCategory = 'travel';
  } else if (/tech|technology|digital|software|app/i.test(keyword)) {
    imageCategory = 'technology';
  } else if (/fashion|style|clothes|outfit|wear/i.test(keyword)) {
    imageCategory = 'fashion';
  }
  
  // Get random images
  const imagePool = unsplashUrls[imageCategory as keyof typeof unsplashUrls];
  const image1 = imagePool[Math.floor(Math.random() * imagePool.length)];
  let image2 = imagePool[Math.floor(Math.random() * imagePool.length)];
  
  // Ensure different images
  while (image1 === image2 && imagePool.length > 1) {
    image2 = imagePool[Math.floor(Math.random() * imagePool.length)];
  }
  
  // Generate hashtags
  const hashtags1 = generateHashtags(platform, keyword);
  const hashtags2 = generateHashtags(platform, keyword);
  
  return [
    {
      id: `post-${Date.now()}-1`,
      caption: template1.replace(/{keyword}/g, keyword),
      hashtags: hashtags1,
      imageUrl: image1,
    },
    {
      id: `post-${Date.now()}-2`,
      caption: template2.replace(/{keyword}/g, keyword),
      hashtags: hashtags2,
      imageUrl: image2,
    },
  ];
};

// Sample brand profiles
export const sampleBrandProfiles: BrandProfile[] = [
  {
    name: 'Tech Innovators',
    colors: {
      primary: '#0ea5e9',
      secondary: '#8b5cf6',
    },
    tone: 'professional',
    logo: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg',
  },
  {
    name: 'Fitness Revolution',
    colors: {
      primary: '#22c55e',
      secondary: '#3b82f6',
    },
    tone: 'inspirational',
    logo: 'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg',
  },
  {
    name: 'Gourmet Delights',
    colors: {
      primary: '#f59e0b',
      secondary: '#ec4899',
    },
    tone: 'casual',
    logo: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
  },
];

// Mock testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Digital Marketing Agency",
    image: "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg",
    quote: "This tool has saved our agency countless hours each week. The AI generates posts that actually sound like our clients' brand voice!",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "E-commerce Startup",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    quote: "We've seen a 40% increase in engagement since using this generator. The platform-specific optimizations make a huge difference.",
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "Tech Influencer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    quote: "As a solo creator, this tool has been a game-changer. I can create a week's worth of content in under an hour!",
  },
  {
    id: 4,
    name: "David Williams",
    company: "Fitness Brand",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "The AI somehow captures our motivational tone perfectly. Our followers can't tell the difference between AI-generated and human-written posts.",
  },
];