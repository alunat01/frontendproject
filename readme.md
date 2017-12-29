## Introduction: 

My website is for a charity called 'Save the Turtles' with an aim to raise awareness on endangered turtles and for users to donate, adopt or contact the charity. 

Text Editor used: Brackets

My inspiration came from: https://www.wwf.org.uk/ 

## Plans/Sketches: 

![mobilescreen1](https://user-images.githubusercontent.com/32508499/34439325-fa48ba00-eca4-11e7-8a22-25481355eded.jpg)

![mobilescreen2](https://user-images.githubusercontent.com/32508499/34439344-1d42eae4-eca5-11e7-87eb-e979c1fa98d8.jpg)

![desktopscreen1](https://user-images.githubusercontent.com/32508499/34439346-2040ea20-eca5-11e7-8608-8ea2680690ad.jpg)

![desktopscreen2](https://user-images.githubusercontent.com/32508499/34439348-24d8e614-eca5-11e7-9ee7-2d261feb01ad.jpg)


## Prototype

Mobile Homepage: https://preview.uxpin.com/06ad31a27f462c457f9900cbd57df3e3adda9fc6

Desktop Homepage: https://preview.uxpin.com/f6654a77973a31ce52ac54c29b15ad2529c9d722 


## PARC:

PROXIMITY: On my website, the content either have different coloured backgrounds or large pictures to group any related information together. I wanted my website to be organised and neat which is why I have designed it in a way that the visitor reads one block/row at a time.

ALIGNMENT: All content and pictures that are related to each other are placed in close proximity to ensure that a connection between the two is shown.

REPETITION: I have used a marine colour scheme which consists of multiple shades of blues and greens as well as using black, white and grey. The consistent design layout used ensures that the visitor reads the content in the way that it’s supposed to be read, as well as being aesthetically pleasant.

CONTRAST: The colours used contrast well as it produces a warm atmosphere to welcome the visitor as well as being related to the content itself with the marine colour scheme. The headers, mains and footers have different colours and sizes to the actual content to show new sections of information.

Errors I came across and solved:

-	There have been many times where I would like content to either flow horizontally and vertically – at first it was difficult as a change in one element would change the positioning of another element to change as well, however, I experimented with:

display: flex;
flex-direction: column; 
flex-direction: row;

The above helped with having my content flow horizontally or vertically. 

-	Within the donation/adoption forms, there was some errors with the donation amount buttons, as all the buttons were linked. If I clicked on a button within adoption form, then my chosen option in donation form would disappear. The error found was that only one radio button option can be chosen for both donation and adoption form. However, I discovered that the reason for this was because the ‘name’ within input tags were all the same. To fix this, I called the name within donation form input tags ‘select’ and I have called the name within the adoption form input tags ‘monthly donation’. 
