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


## Site Diagram 

[Site Diagram.docx](https://github.com/alunat01/frontendproject/files/1593519/Site.Diagram.docx)


## PARC:

PROXIMITY: On my website, the content either have different coloured backgrounds or large pictures to group any related information together. I wanted my website to be organised and neat which is why I have designed it in a way that the visitor reads one block/row at a time.

ALIGNMENT: All content and pictures that are related to each other are placed in close proximity to ensure that a connection between the two is shown.

REPETITION: I have used a marine colour scheme which consists of multiple shades of blues and greens as well as using black, white and grey. The consistent design layout used ensures that the visitor reads the content in the way that it’s supposed to be read, as well as being aesthetically pleasant.

CONTRAST: The colours used contrast well as it produces a warm atmosphere to welcome the visitor as well as being related to the content itself with the marine colour scheme. The headers, mains and footers have different colours and sizes to the actual content to show new sections of information.

## Errors I came across and solved:

1. There have been many times where I would like content to either flow horizontally and vertically – at first it was difficult as a change in one element would change the positioning of another element to change as well, however, I experimented with:

display: flex;

flex-direction: column;

flex-direction: row;

The above code helped with having my content flow horizontally or vertically. 

2. Within the donation/adoption forms, there was some errors with the donation amount buttons, as all the buttons were linked. If I clicked on a button within adoption form, then my chosen option in donation form would disappear. The error found was that only one radio button option can be chosen for both donation and adoption form. However, I discovered that the reason for this was because the ‘name’ within input tags were all the same. To fix this, I called the name within donation form input tags ‘select’ and I have called the name within the adoption form input tags ‘monthly donation’. 


## User Testing

I have created a form using Microsoft Forms and have asked 16 questions. 

Form questions: https://forms.office.com/Pages/ResponsePage.aspx?id=48B4T1DS3027HBXTFFaXzC3sbWseeG1NlkQ9l9-UnTJUOU82TUVSOEJYTlVKSzdPTTczUFdUS1pCRS4u

Form Responses: [Website Survery Responses.docx](https://github.com/alunat01/frontendproject/files/1593911/Website.Survery.Responses.docx)

## References

### References for information used in content

#### index.html

https://www.wwf.org.uk/

Dr Seuss Quote: https://www.goodreads.com/quotes/109750-and-the-turtles-of-course-all-the-turtles-are-free-as

http://www.tortugueroinfo.com/usa/sea_turtles_tortuguero.htm


#### turtles.html

https://www.natgeokids.com/uk/discover/animals/sea-life/turtle-facts/

http://www.rsmas.miami.edu/outreach/explore-and-discover/sea-turtles/history/

https://www.livescience.com/52361-turtle-facts.html

https://conserveturtles.org/information-sea-turtles-species-world/

https://www.youtube.com/embed/t-KmQ6pGxg4?rel=0



### References for pictures

1. Turtle Banner: http://wildlifefriendly.org/sea-turtle-friendly/

2. Footer social media icons: 
    Facebook: https://en.facebookbrand.com/assets
    Twitter: https://about.twitter.com/en_us/company/brand-resources.html
    Instagram: https://en.instagram-brand.com/assets
    Snapchat: https://www.snap.com/en-GB/brand-guidelines/
    
3. Video Background: https://www.youtube.com/watch?v=4S3HazxSi2Y

4. Turtle Cartoon Animation: https://www.pinterest.com/pin/385620786816998115/
    

#### index.html

1. 4 Pictures AFTER Dr Seuss quote (under class rowhome): 

    Picture 1: http://animalstime.com/green-sea-turtle-facts-green-sea-turtle-habitat-diet/
    
    Picture 2: https://www.natgeokids.com/uk/discover/animals/sea-life/turtle-facts/
    
    Picture 3: https://www.natgeokids.com/uk/discover/animals/sea-life/green-sea-turtle-facts/
    
    Picture 4: https://www.natgeokids.com/uk/discover/animals/sea-life/loggerhead-turtle-facts/


2. Ninja Turtles: http://jonvilma.com/teenage-mutant-ninja-turtles.html# 

3. 4 pictures from 'Meet the team' are personal pictures

4. 2 pictures in 'Take Action' section: 
    Picture 1: http://www.images-hd.download/images-of-a-turtle/
    
    Picture 2: https://www.andbeyond.com/stories/leave-a-legacy/turtle-whisperers/
    
5. Desktop ONLY - Our Story picture: https://www.frontier.ac.uk/projects/132/Guatemala-Sea-Turtle-Conservation- 
(Under tab Extras)
    
#### turtles.html

1. Picture in 'History of Turtles': http://www.care2.com/causes/how-the-worlds-largest-cruise-line-can-stand-up-for-sea-turtles.html

2. 12 image picture gallery:
    
    Picture 1: http://animalstime.com/green-sea-turtle-facts-green-sea-turtle-habitat-diet/
    
    Picture 2: http://www.nmfs.noaa.gov/pr/species/turtles/kempsridley.html
    
    Picture 3: http://www.telegraph.co.uk/news/earth/wildlife/8238622/Turtles-cross-ocean-navigation-tracked.html
    
    Picture 4 and Picture 12:  https://www.natgeokids.com/uk/discover/animals/sea-life/turtle-facts/
    
    Picture 5: 
    http://www.care2.com/causes/how-the-worlds-largest-cruise-line-can-stand-up-for-sea-turtles.html
    
    Picture 6, Picture 7 and Picture 8: http://www.natgeokids.com/za/discover/animals/sea-life/green-sea-turtle-facts/
    
    Picture 9, Picture 10 and Picture 11:
    https://www.natgeokids.com/uk/discover/animals/sea-life/loggerhead-turtle-facts/    
    
3. Youtube Video: https://www.youtube.com/watch?v=t-KmQ6pGxg4&feature=youtu.be

4. Pictures in 3D Cube Gallery: Personal pictures from travels

5. Desktop ONLY - Turtle Banner above 'Our Pictures': https://www.exceptionalstays.com/mexico/punta-mita/ocean-activities/sea-turtles


#### involve.html

1. Desktop ONLY - Bonus Gifts: 

    Picture 1: http://www.argos.co.uk/product/5299861

    Picture 2: https://www.imms.org/gift-shop-adopt.php

    Picture 3: https://www.amazon.co.uk/Gift-Republic-Adopt-Sea-Turtle/dp/B001HJBHAK
    
    
### References for coding that helped me:

1. Video Header Background: https://www.youtube.com/watch?v=Xy3GlrddZFI

2. Navigation Menu: Lab 04

    https://www.w3schools.com/css/css3_transitions.asp

3. Turtle Animation: Lab 07

4. Back to Top button: Smooth Scrolling example in Pure CSS by Dave Everitt

5. Slanted Menu: http://generatedcontent.org/post/26407228072/split-feature


#### index.html

1. Blockquotes - q tags: https://www.w3schools.com/tags/tag_q.asp

2. Card Style Image Gallery: Lab 07

3. Responsive Image Gallery: https://www.w3schools.com/css/css_image_gallery.asp

4. Google Maps API: Lab 08 
Google Maps API was used to show the current location of where the staff and volunteers are working with the Tortuguero National Park. 


#### turtles.html

1. Simple Image Gallery: https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp

2. 3D Photo cube Gallery: https://codepen.io/loriprift/pen/OWzBZZ

#### involve.html

1. JavaScript used in donation form for user name input to show on page: Lab 3.1

2. Radio Buttons that looks like buttons: https://stackoverflow.com/questions/16242980/making-radio-buttons-look-like-buttons-instead

    https://codepen.io/adamstuartclark/pen/pbYVYR
    
    
## Extra notes

[Extra Notes.docx](https://github.com/alunat01/frontendproject/files/1593928/Extra.Notes.docx)
