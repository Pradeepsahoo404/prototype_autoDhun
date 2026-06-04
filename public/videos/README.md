# Intro video (not in Git)

Place `autodhun_intro_video.mp4` here for local dev (~113 MB; exceeds GitHub’s 100 MB limit).

**Production:** upload the file to Cloudinary (or your CDN), then set in `.env.local` / hosting env:

```
NEXT_PUBLIC_INTRO_VIDEO_URL=https://your-cdn-url/autodhun_intro_video.mp4
```
