# History Sleep Setup TODO

## 1. Initial Setup (Do this first!)

```bash
# Navigate to historysleep directory
cd /Users/loganvaleski/git_projects/historysleep.com

# Remove Vercel link from Meandering Sleep
rm -rf .vercel

# Deploy as NEW project
vercel --prod

# IMPORTANT: When prompted:
# ? Set up and deploy? → Y
# ? Which scope? → Your account  
# ? Link to existing project? → N (SAY NO!)
# ? Project name? → historysleep
# ? Directory? → ./
```

## 2. Vercel Dashboard Setup

1. Go to https://vercel.com/dashboard
2. Click on the new "historysleep" project
3. Go to Settings → Domains
4. Add domains:
   - `historysleep.com`
   - `www.historysleep.com`
5. Copy the DNS records Vercel shows you

## 3. Cloudflare DNS Update

1. Go to Cloudflare dashboard
2. Select historysleep.com domain
3. Go to DNS section
4. Delete any existing records pointing to Cloudflare Pages
5. Add Vercel records:
   ```
   A     @     76.76.21.21        (DNS only - gray cloud)
   CNAME www   cname.vercel-dns.com   (DNS only - gray cloud)
   ```

## 4. Content Updates Needed

### Update Brand Name
- [ ] Replace all "Meandering Sleep" with "History Sleep"
- [ ] Update package.json name to "historysleep"
- [ ] Update README.md

### Update Colors (provide these from Figma)
- [ ] Main color palette (to replace the purple/blue theme)
- [ ] Secondary colors
- [ ] Update tailwind.config.js with new colors

### Update Logo
- [ ] Replace `/public/full_logo.png` with History Sleep logo
- [ ] Update favicon

### Update App Links
- [ ] iOS App Store URL for History Sleep
- [ ] Google Play Store URL for History Sleep
- [ ] Replace all Meandering Sleep app links

### Update Content
- [ ] Change tagline from "Unhook Your Brain To Fall Asleep" to history-focused
- [ ] Replace "boring stories" with "boring history lectures" everywhere
- [ ] Update features section to focus on history content
- [ ] Remove "Boring Lectures" feature (since ALL content is lectures)
- [ ] Add "Historical Periods" or similar feature

### Update Testimonials
- [ ] Add History Sleep app reviews (if available)
- [ ] Or adapt existing ones to mention history

### Update Mockups
- [ ] Replace `/public/mockups/` with History Sleep app screenshots
- [ ] Or temporarily remove if not available

### Update Footer
- [ ] Verify support email is correct
- [ ] Update any other contact info

## 5. File Structure You'll Be Working With

```
historysleep.com/
├── app/
│   ├── page.tsx         # Main landing page (most changes here)
│   ├── layout.tsx       # Meta tags and site layout
│   └── globals.css      # Global styles
├── public/
│   ├── full_logo.png    # Replace with History Sleep logo
│   └── mockups/         # Replace with History Sleep screenshots
├── tailwind.config.js   # Update color palette here
├── package.json         # Update project name
└── README.md           # Update description
```

## 6. Quick Commands for New Session

```bash
# Start dev server to see changes
npm run dev

# Build to test
npm run build

# Deploy updates to Vercel
git add -A
git commit -m "Update message"
git push origin main
# Vercel auto-deploys on push
```

## 7. Things to Provide in New Claude Session

1. **Figma Assets:**
   - History Sleep color palette
   - History Sleep logo
   - App screenshots/mockups (if available)

2. **App Store Links:**
   - iOS App Store URL
   - Google Play Store URL

3. **Content:**
   - Tagline for History Sleep
   - Any specific historical periods/features to highlight
   - App reviews if available

## Notes
- The site is already functional, just needs rebranding
- All Meandering Sleep functionality works
- Focus on visual/content changes, not structural
- Vercel will auto-deploy when you push to GitHub