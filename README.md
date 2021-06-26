# Gamerchic

Welcome to the code repo for Gamerchic.org, gamer resources for tabletop and MMRPG dungeon masters. Find resources, settings, homebrews, templates, and more to enliven your games and craft characters. Some templates available do require Photoshop.

This website is built using [Docusaurus 2](https://docusaurus.io/), my favorite doc tool!

## Content Dev Notes

Install requirements for Docusaurus. 

To build:

```console
yarn install
yarn upgrade
yarn start
```

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Notes to Self
docusaurus clear :  clears webpack cache in node_module and .docusaurus 
