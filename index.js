#!/usr/bin/env node

const {
  white,
  bold,
  blueBright
} = require("colorette");

const work = white(`Software Architect @ ${blueBright('Modus Create')}`)
const gde = `${blueBright('  Google Developers Expert')} ${white('in Angular')}`
const twitter = blueBright('https://twitter.com/ahsan_ayz')
const linkedIn = blueBright('https://linkedin.com/in/ahsanayaz')
const github = blueBright('https://github.com/ahsanayaz')
const slides = blueBright('https://slides.com/ahsanayaz')
const medium = blueBright('https://medium.com/@ahsan.ayaz')
const npx = white('npx ahsanayaz')

const newline = '\n'
const heading = `${white('  Muhammad Ahsan Ayaz /')} ${blueBright('ahsanayaz')}`
const working = `${white(bold('     Work:'))}  ${work}`
const linkedining = `${white(bold('  LinkedIn:'))} ${linkedIn}`
const twittering = `${white(bold('  Twitter:'))}  ${twitter}`
const githubing = `${white(bold('   GitHub:'))}  ${github}`
const slidesing = `${white(bold('   Slides:'))}  ${slides}`;
const mediuming = `${white(bold('   Medium:'))}  ${medium}`;
const carding = `${white(bold('     Card:'))}  ${npx}`

let output = `${newline} ${newline} ${heading} ${newline} ${gde} ${newline} ${newline} ${working} ${newline} ${twittering} ${newline} ${linkedining} ${newline} ${githubing} ${newline} ${slidesing} ${newline} ${mediuming} ${newline} ${newline} ${carding} ${newline} ${newline}`;

console.log(output)