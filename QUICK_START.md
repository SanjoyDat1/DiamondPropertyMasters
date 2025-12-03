# Quick Start Guide

## 🚀 Getting the Site Running

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Next Steps

### 1. Replace Placeholder Content
- **Images**: Replace all placeholder images with actual client photos
  - Hero images (house at night with LEDs)
  - Gallery photos
  - Service illustrations
- **Contact Info**: Update phone numbers and email addresses in:
  - `components/Footer.tsx`
  - Any other components that display contact info

### 2. Connect Form Submission
The quote form currently logs to console. Connect it to your backend:
- Update `app/get-a-quote/page.tsx` `handleSubmit` function
- Add API endpoint or email service integration
- Consider using services like:
  - Formspree
  - SendGrid
  - AWS SES
  - Your own backend API

### 3. Customize Content
Edit data files to match your actual content:
- `data/services.ts` - Service descriptions
- `data/stats.ts` - Company statistics
- `data/testimonials.ts` - Customer reviews
- `data/faq.ts` - Frequently asked questions

### 4. SEO Optimization
- Update meta descriptions in each page's metadata
- Add Open Graph tags for social sharing
- Submit sitemap to Google Search Console
- Add Google Analytics (if needed)

### 5. Performance
- Optimize images before adding real photos
- Test Core Web Vitals
- Consider adding a CDN for images

## 🎨 Design Customization

### Colors
Edit `tailwind.config.ts` to change brand colors:
```typescript
primary: {
  DEFAULT: "#0EA5E9", // Your brand color
  dark: "#0284C7",
  light: "#38BDF8",
}
```

### Typography
The site uses Inter font. To change:
1. Update font import in `app/layout.tsx`
2. Update `tailwind.config.ts` fontFamily

## 📱 Testing

Test the site on:
- ✅ Mobile phones (360px - 430px)
- ✅ Tablets (768px - 1024px)
- ✅ Desktop (1280px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Your own server with Node.js

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Type errors?**
```bash
# Check TypeScript
npx tsc --noEmit
```

## 📞 Support

For issues or questions about the codebase, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

**Ready to go live?** Make sure to:
1. ✅ Replace all placeholder content
2. ✅ Connect form submissions
3. ✅ Update contact information
4. ✅ Test on all devices
5. ✅ Optimize images
6. ✅ Set up analytics (optional)

