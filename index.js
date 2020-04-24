#!/usr/bin/env node

const { white, bold, blueBright } = require("colorette");

const work = white(`Full-stack web & mobile apps development`);
const tagline = `${blueBright("  All things Web & JS")} ${white(
  "(MEAN, MERN & LAMP tech-stack)"
)}`;
const website = blueBright("https://rootedglobal.com");
const twitter = blueBright("https://twitter.com/rootedglobal");
const linkedIn = blueBright("https://linkedin.com/company/rootedglobal");
const github = blueBright("https://github.com/rootedglobal");
const upwork = blueBright("https://upwork.com/agencies/~01eb6e46dcf0ca91a2");
const medium = blueBright("https://medium.com/@rootedglobal");
const facebook = blueBright("https://fb.com/RootedGlobalOfficial");
const npx = white("npx rootedglobal");

const newline = "\n";
const heading = `${white("  Narain Menghwar |")} ${blueBright(
  "Founder & Technical Lead"
)} ${white("|")} ${blueBright(" Rooted Global")}`;
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
