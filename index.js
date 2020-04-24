#!/usr/bin/env node

const { white, bold, blueBright } = require("colorette");

const work = white(
  `Full-stack software engineer & Tech Lead @ ${blueBright("Rooted Global")}`
);
const tagline = `${blueBright("  All things Web & JS")} ${white(
  "(MEAN, MERN & LAMP tech-stack)"
)}`;
const website = blueBright("https://narainsagar.com");
const twitter = blueBright("https://twitter.com/narainsagar");
const linkedIn = blueBright("https://linkedin.com/in/narainsagar");
const github = blueBright("https://github.com/narainsagar");
const upwork = blueBright("https://upwork.com/freelancers/~01050a14629af3bda8");
const medium = blueBright("https://medium.com/@narainsagar");
const facebook = blueBright("https://fb.com/NarainSagarPage");
const npx = white("npx narainsagar");

const newline = "\n";
const heading = `${white("  Narain Menghwar /")} ${blueBright("narainsagar")}`;
const websiteing = `${white(bold("  Website:"))}  ${website}`;
const working = `${white(bold("     Work:"))}  ${work}`;
const linkedining = `${white(bold(" LinkedIn:"))} ${linkedIn}`;
const twittering = `${white(bold("  Twitter:"))}  ${twitter}`;
const githubing = `${white(bold("   GitHub:"))}  ${github}`;
const mediuming = `${white(bold("   Medium:"))}  ${medium}`;
const upworking = `${white(bold("   Upwork:"))}  ${upwork}`;
const facebooking = `${white(bold(" Facebook:"))}  ${facebook}`;
const carding = `${white(bold("     Card:"))}  ${npx}`;

const output = `${newline} ${newline} ${heading} ${newline} ${tagline} ${newline} ${newline} ${working} ${newline} ${websiteing} ${newline} ${twittering} ${newline} ${linkedining} ${newline} ${githubing} ${newline} ${mediuming} ${newline} ${facebooking} ${newline} ${upworking} ${newline} ${newline} ${carding} ${newline} ${newline}`;

console.log(output);
