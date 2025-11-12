# ✅ Deployment Checklist

## Pre-Deployment

- [ ] Run `npm run build` successfully
- [ ] Verify build output in `build/` folder
- [ ] Check build verification passed (automatic after build)
- [ ] Test locally with `npm run serve`
- [ ] Open DevTools Network tab and verify < 10 requests
- [ ] Check all pages load correctly
- [ ] Verify service worker registered
- [ ] Test navigation between pages
- [ ] Check mobile responsiveness

## Network Verification

Open DevTools → Network tab and verify:

- [ ] Initial load: 6-8 requests
- [ ] No requests to fonts.googleapis.com
- [ ] No requests to images.unsplash.com  
- [ ] No requests to external CDNs
- [ ] All JS files are minified
- [ ] All CSS files are minified
- [ ] Gzip compression active (check response headers)
- [ ] Cache-Control headers present

## Performance Checks

- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Total bundle size < 1MB
- [ ] Service worker caching works

## Deployment Steps

### Netlify
```bash
# Option 1: CLI
npm run build
netlify deploy --prod

# Option 2: Git push (auto-deploy)
git add .
git commit -m "Production optimizations"
git push origin main
```

### Vercel
```bash
npm run build
vercel --prod
```

### Other Platforms
1. Build: `npm run build`
2. Upload `build/` folder
3. Configure:
   - Enable gzip compression
   - Set cache headers
   - Configure SPA routing

## Post-Deployment

- [ ] Visit production URL
- [ ] Open DevTools Network tab
- [ ] Verify < 10 requests on first load
- [ ] Reload page and verify cached assets
- [ ] Test all routes/pages
- [ ] Check mobile version
- [ ] Verify forms work
- [ ] Test contact/quote functionality
- [ ] Check service worker in Application tab
- [ ] Verify cache storage

## Server Configuration

Ensure your server has:

### Cache Headers
```
Cache-Control: public, max-age=31536000, immutable
```
For: `*.js`, `*.css`, `*.woff2`, `*.webp`

### Gzip Compression
```
Content-Encoding: gzip
```
For: `*.js`, `*.css`, `*.html`, `*.svg`

### SPA Routing
All routes should serve `index.html`

## Monitoring

After deployment, monitor:

- [ ] Page load times
- [ ] Network requests count
- [ ] Transfer sizes
- [ ] Error rates
- [ ] User experience metrics

## Rollback Plan

If issues occur:

1. Keep previous build backup
2. Have rollback command ready
3. Monitor error logs
4. Test thoroughly before full rollback

## Success Criteria

✅ Network requests < 10 on initial load
✅ Transfer size < 1MB
✅ All pages load correctly
✅ Service worker active
✅ Cache working properly
✅ No console errors
✅ Mobile responsive
✅ Forms functional

## 🎉 Ready to Deploy!

Once all items are checked, your app is production-ready!
