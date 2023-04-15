<h1 align="center">
The Software Engineer Showcaser
</h1>

<h4 align="center">A modern but simple app that enables software engineers to showcase their skills and experience. Uses <code>vite-plugin-ssr</code></h4> 
<br>
<div align="center">

![Build and Deploy to Github Pages](https://github.com/arabyalhomsi/the-software-engineer-showcaser/actions/workflows/deploy-github-pages.yml/badge.svg)

</div>
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">Quick Guide</a> •
  <a href="#how-to-use">Folder Structure</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/arabyalhomsi/the-software-engineer-showcaser/main/public/assets/images/screenshot.png)

## Key Features

- Prints to a normal pdf CV using any browser and platform (`ctrl+p`, `cmd+p`, `Android`, `iPhone`).
- Easily adjustable through the resume.json file.
- Modular structure so you can add new section or modify existing section with basic knowledge of React.
- Completely prerendered and statically generated (SSG): You can host it on Github Pages for free.
- Loads in 0.2s on PC and 0.9s on mobile (slow 3G connection).
- Responsive on all devices.
- SEO ready.

## Quick Guide

This guide does not need any react experience.

- Clone the respository and pull it.
- Run `npm install` and `npm run dev`.
- Modify the resume.json to your needs.
- In `renderer/_default.page.server.tsx`, personalize the data and the SEO tags.
- In `public/assets/images`, you can change the screenshot.png and profile-photo.jpeg.
- Edit the `branches` to `main` or the name of the branch you want to deploy in `.github/workflows/deploy-github-pages.yml`
- Follow the [Quick Start Github pages](https://docs.github.com/en/pages/quickstart) to get your site online.
- Add this Github Action [Deploy To Github Pages](https://github.com/marketplace/actions/deploy-to-github-pages) to your repository.
- You should be successful! Don't hesitate to post an issue if you struggle.

## Folder structure

```
    ├── components            # General and stateless reusable components.
    ├── layouts               # Includes the main ShowcaseLayout.tsx that is responsible for floating A4 page.
    ├── pages                 # The different pages of the web app.
    │   ├── index                  # A main page that redirects to /resume. This was left here for the possibility of adding different pages to the site.
    │   ├── resume                 # The main folder where the resume is built.
    │   |   ├── components              # Stateful components that form the section of the resume.

    ├── public                # Static content (e.g. images and icons)
    ├── renderer              # vite-plugin-ssr files (check the official doc)
    │   ├── css                    # Where global css and tailwind css goes
    ├── services                   # Tools and utilities
        │   ├── ContentLoader             # A set of helpers that extract data from resume.json and enforce typing.
```

## Credits

- [Vite Plugin SSR](https://vite-plugin-ssr.com/) and [React](https://react.dev/)
- Heavily inspired by <a href="https://gitlab.com/nfriend/nuxt-resume">Nathan Friend's Nuxt Resume</a>
- CV template inspired by <a href="https://github.com/dnl-blkv/mcdowell-cv">McDowell CV</a>
- Icons by [Bootstrap Icons](https://icons.getbootstrap.com/)

## License

All info in resume.json belongs to Arabi Alhumsi and may not used in anyway without my permission. All the other files follow the [MIT license](https://github.com/arabyalhomsi/the-software-engineer-showcaser/blob/main/license)
