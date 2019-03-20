#### Shopify Theme Development Jolyn:

##### Theme kit.
1. duplicate sample-config.yml
2. rename copy config.yml
3. follow themekit instructions: https://shopify.github.io/themekit/
4. `yarn install` or `npm install`
5. `yarn watch` or `npm run watch` will compile assets and deploy to shopify theme
    a. you can set up multiple theme environments in the config.yml
    b. you can watch a specific environment by using `yarn watch --env dev



/Link for carousel stylesheet/

Files to be merged:

assets/bang.scss.liquid assets/owl.carousel.min.js (might need to copy into theme js file if it's got a "defer" directive

sections/... /cb_bestSellerBlock.liquid /cb_promoRow.liquid /cb_threeBlock.liquid /cb_twoBlock.liquid /cb_promoBar.liquid /hero.liquid /header.liquid

snippets/... /cb_collectionGridItem.liquid /cb_collectionThreeGridItem.liquid