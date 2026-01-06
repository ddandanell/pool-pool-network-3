# Vercel Deployment Guide

## Pre-Deployment Checklist

### ✅ Repository Requirements
- [x] README.md with complete documentation
- [x] LICENSE file (MIT)
- [x] .gitignore properly configured
- [x] .env.example with all required variables
- [x] GitHub Actions CI workflow
- [x] All dependencies up to date
- [x] Security vulnerabilities addressed

### ✅ Build Configuration
- [x] TypeScript type checking passes (`npm run check`)
- [x] Production build successful (`npm run build`)
- [x] Output directory configured: `dist/public`
- [x] vercel.json properly configured

### ✅ SEO Optimization
- [x] Sitemap.xml in `/client/public/sitemap.xml`
- [x] Robots.txt configured for search engines
- [x] All pages have unique meta titles and descriptions
- [x] Open Graph tags on all pages
- [x] Twitter Card meta tags
- [x] JSON-LD structured data (LocalBusiness schema)
- [x] Canonical URLs configured
- [x] Image alt texts optimized

### ✅ Content Updates
- [x] WhatsApp number: +62 822-3756-5997
- [x] WhatsApp link format: https://wa.me/6282237565997
- [x] All prices removed (replaced with "Contact us to get a price")
- [x] Transparent pricing/service messaging

## Deployment Steps

### 1. Connect Repository to Vercel

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import from GitHub: `ddandanell/pool-pool-network-3`
4. Select the repository

### 2. Configure Project Settings

**Framework Preset:** Other (Vite is detected automatically)

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist/public`
- Install Command: `npm install` (or `npm ci` for faster builds)

**Root Directory:** `./` (leave as default)

### 3. Environment Variables

Add these environment variables in the Vercel project settings:

```env
# Required
DATABASE_URL=postgresql://user:password@host:5432/database
NODE_ENV=production
SESSION_SECRET=your-secure-random-secret-here

# Optional (for Replit compatibility)
# REPL_ID=
# REPL_OWNER=
```

**Important:** 
- Never commit actual credentials to git
- Use Vercel's environment variable encryption
- Generate SESSION_SECRET: `openssl rand -base64 32`

### 4. Domain Configuration

**Custom Domain Setup:**
1. Go to Project Settings > Domains
2. Add your custom domain: `balipoolpros.com`
3. Add www subdomain: `www.balipoolpros.com`
4. Configure DNS records as instructed by Vercel

**DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 5. Deploy

1. Click "Deploy"
2. Wait for build to complete (typically 2-3 minutes)
3. Verify deployment at the Vercel preview URL
4. Test all pages and functionality

### 6. Post-Deployment Verification

**Test these items after deployment:**

- [ ] Homepage loads correctly
- [ ] All pages accessible (About, Services, Contact, Blog, etc.)
- [ ] WhatsApp links work correctly
- [ ] Contact form submits successfully
- [ ] All images load properly
- [ ] Mobile responsiveness works
- [ ] Site search engine accessible (check robots.txt)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] SSL certificate active (HTTPS working)

**Performance Check:**
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Target: 90+ Performance, 100 SEO
- [ ] Check Core Web Vitals

**SEO Validation:**
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify structured data is valid
- [ ] Submit sitemap to Google Search Console

## Vercel-Specific Features

### Analytics (Optional)
Enable Vercel Analytics for visitor insights:
```bash
npm install @vercel/analytics
```

### Speed Insights (Optional)
Enable Speed Insights for Core Web Vitals:
```bash
npm install @vercel/speed-insights
```

### Monitoring
- Enable Vercel's built-in monitoring
- Set up deployment notifications via Slack/email
- Configure error tracking

## Troubleshooting

### Build Fails

**Problem:** TypeScript errors during build
**Solution:** Run `npm run check` locally to identify issues

**Problem:** Missing dependencies
**Solution:** Run `npm ci` and commit updated `package-lock.json`

**Problem:** Environment variables not found
**Solution:** Verify all required env vars are set in Vercel dashboard

### Runtime Issues

**Problem:** Database connection fails
**Solution:** 
- Verify DATABASE_URL is correct
- Ensure database allows connections from Vercel IPs
- Check database is online and accessible

**Problem:** 404 errors on page routes
**Solution:** 
- Verify `vercel.json` rewrites configuration
- Ensure SPA routing is properly configured

**Problem:** Assets not loading
**Solution:**
- Check output directory is `dist/public`
- Verify assets are in the build output
- Check browser console for CORS errors

### Performance Issues

**Problem:** Slow initial page load
**Solution:**
- Enable Vercel Edge Network caching
- Optimize images (use WebP format)
- Consider code splitting for large chunks

**Problem:** High bandwidth usage
**Solution:**
- Enable image optimization
- Configure longer cache headers
- Use CDN for static assets

## Continuous Deployment

### Automatic Deployments
- **Production:** Commits to `main` branch auto-deploy to production
- **Preview:** Pull requests get preview deployments
- **Development:** Other branches get preview URLs

### Branch Protection
Configure these settings in GitHub:
1. Require pull request reviews before merging
2. Require status checks to pass (CI workflow)
3. Require branches to be up to date before merging

## Monitoring and Maintenance

### Regular Tasks
- [ ] Weekly: Check Vercel Analytics for traffic/errors
- [ ] Monthly: Review and update dependencies
- [ ] Quarterly: Run security audit (`npm audit`)
- [ ] As needed: Update content and pricing

### Backup Strategy
- Repository is backed up on GitHub
- Database should have automated backups
- Vercel maintains deployment history (rollback capability)

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Next.js Migration Guide](https://vercel.com/docs/frameworks/vite) (if upgrading)

## Security Best Practices

1. **Never commit secrets** to the repository
2. **Use environment variables** for all sensitive data
3. **Enable Vercel's security headers** (already configured in vercel.json)
4. **Keep dependencies updated** regularly
5. **Monitor for vulnerabilities** using npm audit
6. **Use HTTPS only** (enforced by Vercel)
7. **Implement rate limiting** for API endpoints
8. **Validate all user inputs** (forms, queries)

---

**Last Updated:** 2026-01-06  
**Maintainer:** Bali Pool Pros Development Team  
**Status:** ✅ Ready for Production Deployment
