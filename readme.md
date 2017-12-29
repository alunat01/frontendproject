## Introduction: 

My website is for a charity called 'Save the Turtles' with an aim to raise awareness on endangered turtles and for users to donate, adopt or contact the charity. 

Text Editor used: Brackets

My inspiration of the website came from: https://www.wwf.org.uk/ 

## Plans/Sketches: 

![mobilescreen1](https://user-images.githubusercontent.com/32508499/34439292-bcb5f66c-eca4-11e7-9bf2-d95469ac5047.jpg)


## PARC:

PROXIMITY: On my website, the content either have different coloured backgrounds or large pictures to group any related information together. I wanted my website to be organised and neat which is why I have designed it in a way that the visitor reads one block/row at a time.

ALIGNMENT: All content and pictures that are related to each other are placed in close proximity to ensure that a connection between the two is shown.

REPETITION: I have used a marine colour scheme which consists of multiple shades of blues and greens as well as using black, white and grey. The consistent design layout used ensures that the visitor reads the content in the way that it’s supposed to be read, as well as being aesthetically pleasant.

CONTRAST: The colours used contrast well as it produces a warm atmosphere to welcome the visitor as well as being related to the content itself with the marine colour scheme. The headers, mains and footers have different colours and sizes to the actual content to show new sections of information.

Errors I came across and solved:
-	There have been many times where I would like content to either flow horizontally and vertically – at first it was difficult as a change in one element would change the positioning of another element to change as well, however, I experimented with:

display: flex;
flex-direction: column; / flex-direction: row;

The above helped with having my content flow horizontally or vertically. 

-	Within the donation/adoption forms, there was some errors with the donation amount buttons, as all the buttons were linked. If I clicked on a button within adoption form, then my chosen option in donation form would disappear. The error found was that only one radio button option can be chosen for both donation and adoption form. However, I discovered that the reason for this was because the ‘name’ within input tags were all the same. To fix this, I called the name within donation form input tags ‘select’ and I have called the name within the adoption form input tags ‘monthly donation’. 
