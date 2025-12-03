export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role?: string;
  text: string;
  rating?: number;
  quote: string; // Alias for text for consistency
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emily T.",
    location: "Calgary",
    text: "I couldn't believe the difference Diamond Property Masters made to my home with their permanent LED light installation! The lights transformed my space, making it bright and inviting. Their team was professional, efficient, and courteous throughout the entire process. I highly recommend them to anyone looking for top-notch lighting solutions!",
    quote: "I couldn't believe the difference Diamond Property Masters made to my home with their permanent LED light installation! The lights transformed my space, making it bright and inviting. Their team was professional, efficient, and courteous throughout the entire process. I highly recommend them to anyone looking for top-notch lighting solutions!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah H.",
    location: "Vancouver",
    text: "As a busy homeowner, I'm always looking for reliable service providers, and Diamond Property Masters exceeded my expectations with their permanent LED light installation. Their attention to detail and commitment to quality were evident throughout the entire process. From the initial consultation to the final setup, their team was professional, friendly, and thorough. I couldn't be happier with the results!",
    quote: "As a busy homeowner, I'm always looking for reliable service providers, and Diamond Property Masters exceeded my expectations with their permanent LED light installation. Their attention to detail and commitment to quality were evident throughout the entire process. From the initial consultation to the final setup, their team was professional, friendly, and thorough. I couldn't be happier with the results!",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael W.",
    location: "Calgary",
    text: "I recently hired Diamond Property Masters to install permanent LED lights in my home, and I was blown away by the results. Not only did they enhance the ambiance of my space, but they also went above and beyond to ensure every detail was perfect. Their attention to detail and professionalism are unmatched, and I wouldn't hesitate to recommend them to anyone!",
    quote: "I recently hired Diamond Property Masters to install permanent LED lights in my home, and I was blown away by the results. Not only did they enhance the ambiance of my space, but they also went above and beyond to ensure every detail was perfect. Their attention to detail and professionalism are unmatched, and I wouldn't hesitate to recommend them to anyone!",
    rating: 5,
  },
  {
    id: "4",
    name: "Nathan R.",
    location: "Victoria",
    text: "I'm always eager to support young entrepreneurs, so when I heard about Diamond Property Masters, I decided to give their permanent LED light installation a try. I was pleasantly surprised by the level of professionalism and expertise they brought to the project. Not only did they do an excellent job enhancing the lighting in my home, but their passion for their work was evident in every interaction. It's refreshing to see young business owners like them making a positive impact in our community. I'll definitely be recommending their services to friends and family!",
    quote: "I'm always eager to support young entrepreneurs, so when I heard about Diamond Property Masters, I decided to give their permanent LED light installation a try. I was pleasantly surprised by the level of professionalism and expertise they brought to the project. Not only did they do an excellent job enhancing the lighting in my home, but their passion for their work was evident in every interaction. It's refreshing to see young business owners like them making a positive impact in our community. I'll definitely be recommending their services to friends and family!",
    rating: 5,
  },
  {
    id: "5",
    name: "Jennifer K.",
    location: "Vancouver",
    text: "Keeping our office space well-lit and welcoming is crucial for maintaining a professional environment. Diamond Property Masters has been our go-to partner for permanent LED light installation, and they consistently deliver exceptional results. Their team is punctual, efficient, and respectful of our workspace. I highly recommend their services to any business looking for reliable and high-quality lighting solutions!",
    quote: "Keeping our office space well-lit and welcoming is crucial for maintaining a professional environment. Diamond Property Masters has been our go-to partner for permanent LED light installation, and they consistently deliver exceptional results. Their team is punctual, efficient, and respectful of our workspace. I highly recommend their services to any business looking for reliable and high-quality lighting solutions!",
    rating: 5,
  },
  {
    id: "6",
    name: "Vanessa A.",
    location: "Calgary",
    role: "Real Estate Agent",
    text: "As a real estate agent, first impressions matter a lot when showing properties to potential buyers. That's why I always rely on Diamond Property Masters for permanent LED light installations in my listings. Their attention to detail and commitment to quality make a significant difference in how a property is perceived. Thanks to their excellent service, I've received countless compliments from clients impressed by the inviting atmosphere created by the lighting in the homes I represent.",
    quote: "As a real estate agent, first impressions matter a lot when showing properties to potential buyers. That's why I always rely on Diamond Property Masters for permanent LED light installations in my listings. Their attention to detail and commitment to quality make a significant difference in how a property is perceived. Thanks to their excellent service, I've received countless compliments from clients impressed by the inviting atmosphere created by the lighting in the homes I represent.",
    rating: 5,
  },
  {
    id: "7",
    name: "Linda H.",
    location: "Calgary",
    role: "Condo Association President",
    text: "As the president of our condo association, it's my responsibility to ensure our building is well-maintained and attractive to potential residents. Diamond Property Masters has been instrumental in helping us achieve this goal with their permanent LED light installations. Their expert service has significantly enhanced the ambiance and curb appeal of our property, making it a more desirable place to live. I appreciate their professionalism and dedication to excellence.",
    quote: "As the president of our condo association, it's my responsibility to ensure our building is well-maintained and attractive to potential residents. Diamond Property Masters has been instrumental in helping us achieve this goal with their permanent LED light installations. Their expert service has significantly enhanced the ambiance and curb appeal of our property, making it a more desirable place to live. I appreciate their professionalism and dedication to excellence.",
    rating: 5,
  },
];

