
## Freddev PLP Infinite Scroll

**PLP Infinite Scroll** for Magento 2 automatically loads product catalog without reloading the page. Your customers will be pleasantly surprised with supportive navigation and high performance of your web store.

## Highlight Features

- Automatically products list just one page.

- Visitors can see all in just one page

- Reduce the request load to the server, increase website speed

- Increase professional animation effects for Magento website.

## How to use PLP Infinite Scroll extension
Before you continue, ensure you meet the following requirements:

  * You have installed magento2
  
### Install PLP Infinite Scroll extension

### Step 1 : Download Magento 2 Infinitescroll Extension

#### Install via app/code 
Extract the extension from freddev_plpinfinitescroll.tar.gz

Create Dir vendor Freddev in app/code/

Put the PdpCustomText in Freddev directory, and run the next commands:
```
php bin/magento module:enable Freddev_PlpInfiniteScroll
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:clean
```

### Step 2: User guide
  #### Key features of Magento 2 Infinite scroll Extension:
  * Ajax scroll without interruption.
  * Freely scroll down & See what page of the catalog they're on.
  * Automatically loading pages.
  * Show Loading Button.
  * Possibility to give/ share links to a certain positions.
  * Easy to customize.
  * Increase the conversion rate at your store.
  * Easy to Change Button and Loading Text.

  ### 2.1. General configuration

  `Login to Magento admin > Stores > Configuration > FMAH EXTENSIONS > PLP Infinite Scroll > Enable > Choose Yes to enable the module.`
  
   In `Stores > Configuration > FREDDEV EXTENSIONS > PLP Infinite Scroll` we set: 
   * **Delay (ms)**: Delay time for the scroll down, default 600.
   * **Content**: Select for the elements that surrounds the items you will be loading more of (For Ex. = .classname/#id).
   * **Pagination**: Select class, id for paging loaded more.
   * **Next**: Select class, id for the link to to the next page.
   * **Item**: Select for the class name that you want to config all items you will load more.
   Run the following command:
   
   ```
   php bin/magento cache:clean
   ```
  
