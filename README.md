# zxrkcr's site
Git repo for my personal website.
I have seen many cool among friends as well as wonderful personal websites across sites like nekoweb and neocities thought it looked really cool and amazing.

## Why! / Goals
I want a personal space that I can share with friends, experiment with, and potentially blog post.

## Features
- The main features currently at the time of writing are a commenting widget which is held on a google form.
- /music -- displays tracks connected to my lasfm account and allows users to listen in.
- linked my socials for visitors to follow
- the site is hosted on a Raspberri Pi (originally was going to self host my songs but i got too many)

## Directory layout
`src/css`
simply just where all the styles / looks of the site comes to fruition

`src/favicon`
storing some images used to plug my socials and favicon

`src/js`
holds all the files for most of the interactive portions of the website. 

- `src/js/getMusic.js`
fetches data from my cloudflare worker which fetches data from my lastfm using my API key, built using [lastfm-cf-worker](https://github.com/monoxideboi/lastfm-cf-worker/)

- `src/js/glow.js`
This file uses Color Thief library to grab colors from the album images and apply them to the CSS. The goal is to make it pop on hover and have a nice snake trail border glow effect based on the cover art.

- `src/js/quotes.js`
stores and shows rotating quotes on random into a marquee

`src/TuneTuneTuneSahur`
just a pool of images for my favourite music which is used to redirect to spotify