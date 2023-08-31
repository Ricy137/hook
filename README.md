# Introduction

   Hook is a grants project built on Allo and Celo. Its main goal is to elevate profile analysis and grant decisions by linked profiles network and associated lens data. Hook is also a progressive web app, which means it's installable and works offline.

   live demo, works both on mobile or desktop: [here](https://hook-indol.vercel.app/) or [here](https://hook-git-main-ricy137.vercel.app/)
## Linked profiles network and lens
   A key problem to be solved for grants programs is how to evaluate projects. In Allo, profile is the main representation of a project and is also the main reference for pool managers.So how would Hook help pool managers to evaluate a profile?
   Behind a specific profile is people, owners or members. They've done other projects and also created other profiles. In hook, profiles are linked based on owner and members' addresses. So while pool managers are checking a specific profile, links other profiles of the owner or members are also presented, which provide the pool managers more comprehensive information.
   Furthermore, blockchain data is public, which opens the door for cross-ecosystem collaborations. In hook, we also connect lens profiles to Allo profiles based on owner/members' addresses. Such an infusion not only unlocked a tremendous amount of data to Allo system, but also provide a new dimension of profile insights.
   
### The comprehensive process of profiles
   Hook has not only provided a linked profiles network for pool managers' reference, you can also create or manage your owned profiles in Hook. Connect with Hook with your wallet, then you will see the profile entry, where you can create and mange your profiles.
   And though we've preset few fields for you when create profiles, you can also add your customized fiels by the customized items button.

## PWAs

   While the project is built on top of many the latest frontend techs, such as UnoCSS, jotaii,e.t... The most oustanding techs used is PWAs.
   
   Web apps have amazing reachability, they can be visited by anyone, anywhere, on any devices. And you can share, visit, save a web app just by a url. However, compared to native apps, web apps are lacking of capability and reliability.
   
   Luckily, with PWA, Hook is able to mimic the native apps experience. It's installable, can be accessed from home screen and works offline. In other words, due to the application of PWA, Hook has better accessibility and reliability than classic web apps, which allows it to provide a better user experience, especially for mobile users.

   <img width="562" alt="Screen Shot 2023-08-30 at 00 21 25" src="https://github.com/Ricy137/hook/assets/97211928/e20809d4-7534-4651-957e-7974f5e87352">

   
# How to deploy
1. First you need to create a `.env` file and add a `VITE_WEB3STORAGE_TOKEN` environmental variable, the variable is used for uploading ipfs and this is how to get the token : https://web3.storage/docs/intro/#quickstart
2. Then install the dependencies by your package manager `npm install` `yarn install` `pnpm install` are all workable
3. Run the dev environment by `npm dev` `yarn dev` or `pnpm dev`

## TheGraph
Hook is using the graph to retrieve related blockchain data. I redeployed thegraph from [allo-v2-graph](https://github.com/allo-protocol/allo-v2-graph) to Celo Alfajores network. You can play with it [here](https://api.thegraph.com/subgraphs/name/ricy137/hook/graphql?query=) or [here](https://thegraph.com/hosted-service/subgraph/ricy137/hook)
    
## Issues currently still left
1. Due to some cache issues, you may need to refresh manually to see the profile you just created. (We provided a refresh button in PWAs)
2. Name presented in profile detail is from metadata. So change profile name won't change the name field presented in the profile detail page(but the name do change in the profile overview/card, since the name data for profile overview/card is from profile's name instead of metadata), you need to change the metadata.

