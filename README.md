![parchment](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/de169f2f-9969-4d99-a56c-249a1d48565f)

![AmIResponsive](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/6929b83b-2d83-4253-873c-cddcd6e5d7f2)

# Xmas Memory Game
This is a xmas themed memory game created using html, css, and javascript.

The purpose of the game is to test the player's memory, using a traditional memory card game, while appealling to either kids or adult players that want to get into the xmas spirit; the game is designed with a xmas colour palette and xmas themed imagery.

---

## CONTENTS
- [Xmas Memory Game](#xmas-memory-game)
  - [CONTENTS](#contents)
  - [User Experience (UX)](#user-experience-ux)
    - [User Stories](#user-stories)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
  - [Features](#features)
    - [General features on each page](#general-features-on-each-page)
    - [Future Implementations](#future-implementations)
    - [Accessibility](#accessibility)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
  - [Deployment \& Local Development](#deployment--local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
  - [Testing](#testing)
  - [Credits](#credits)
    - [Code Used](#code-used)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgments](#acknowledgments)

---

## User Experience (UX)
### User Stories
As a user, I want to play a game that will test my memory in a fun and interactive way.

As a user, I want to play a game that delights me with a xmas theme, particularly in the run up to xmas, using xmas imagery and colours.

As a user, I want the game to be intuitive to play, meaning that instructions are not necessary, but can be accessed if needed.

As a user, i want the game to provide me with instant feedback by recording the number of moves I have made, and using sound effects to let me know when cards have been flipped.

As a user, I want the game to let me know when I have won using a pop up modal and sound effects.

As a user, I want to be able to restart the game at any point by clicking a button.

As a user, I want to be able to change the background image, at any point in the game, to suit my mood.


## Design
### Colour Scheme
The colour scheme includes traditional xmas colours including red, white, silver and gold.

### Typography
The christmas banner used in the header incorporates a scripted style of font which fits in well with the christmas theme.  All other text makes use of a google font (Open Sans) which is a sans-serif font that is clear and easy to read.  This is important for modal's which provide information to the user and for buttons that may need to be clicked by the user.

### Imagery
Xmas imagery is used throughout the site, with a choice of three background images consisting of a 3D wintery scene, a decorated blue xmas tree background, and a blue background with xmas baubles, sparkles and snow.  Xmas themed images are used on the memory cards, including several images of snowmen and santa claus, a reindeer, a gingerbread man, a polar bear and a penguin.

### Wireframes
Software was not used to create a wireframe, but a wireframe design was drawn out before any coding was started, as shown below.  The wireframe design was changed a little as the project progressed, to allow for the inclusion of the christmas banner in the header, and more cards in the card area, but the structure remained basically the same.

![wireframe](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/6421589e-725d-49fc-a994-1f065c6dbc3f)


## Features
### General features on each page
The game consists of only one page which includes the following features:

1. The ability to find out the game rules by clicking a 'Game Rules' button.  This brings up a modal popup that can then be closed using a close button.  The 'Game Rules' can be accessed via this button at any time.

![Game Rules Button](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/2513e3c0-6d2d-4182-b791-f7486203407f)

![Game Rules Modal](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/d74f014d-b54b-4c30-bb7a-ccf845c4908d)

2. The ability to change the background image using a set of three radio buttons (shown in screenshot above).  The 'Winter Scene' is selected by default, but the background can be changed to any of the three available background using the radio buttons at anytime.

![3d-trees](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/8aef21f3-7af5-4f6f-898c-2554815372da)

![blue_background](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/bc56d568-e41b-4807-8ce3-a008dd29ff4a)

![baubles](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/23b85e43-595a-48ec-89bc-e5f18711e14c)

3. The user can click on 1 card to reveal a xmas themed image, and then a second card t reveal another image.  If the second image matches the first image, the cards are locked facing front and the user can try to match another pair of cards.  If the second image does not match the first image the cards flip back round and the player must try again.

4. As the user clicks on cards, the number of moves (pairs of cards selected) are recorded in the scores area above the background selection area, and sound effects let the user know when a card has been flipped.

5. If the user matches all the cards, a modal popup lets the user know that they have won the game and a 'cheering' sound effect helps to congratulate them.

![celebration modal](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/42c535bc-bf0f-4d97-9924-b4f17771ab88)

6. The user can restart the game back to the beginning at anytime using the 'Restart Game' button (see screenshot above).

   
### Future Implementations
Given additional time I would like to implement the following features:
1. Add easy, medium and hard difficulty levels.  Easy level would involve matching 12 cards (6 card pairs), medium level would involve matching 18 cards (9 card pairs) and hard level would involve matching 24 cards (12 card pairs).
2. Add a sfx button to toggle sound effects on or off.
3. Add xmas music that would be toggled off by default but that could be switched on if the user wishes to hear it.
4. Use local storage to store previous scores and then use this to let the user know if they beat their previous or highest score when they win a game.
5. Add an animated snowman character that can show emotions dependent on how the player is doing (e.g. happy snowman, sad snowman etc.).
6. Add confetti using a javascript library to the celebration modal.

### Accessibility
1. All images include a text alternative so that ayone that cannot see the image can know what is displayed using a screen reader.
2. Attention was paid to the contrast between the card backs and the background images.
3. Attention was given to the colour contrast between call to action buttons and text on those buttons.
4. Attention was paid towards the contrast between text and the background colour on modals.


## Technologies Used
### Languages Used
The game was created using html5, css3 and vanilla javascript.

### Frameworks, Libraries & Programs Used
No frameworks, libraries or programs were used.


## Deployment & Local Development
### Deployment
The game was deployed to https://jem212mac.github.io/CI_Project_2_Xmas_Memory_Game/ using GitHub Actions.

### Local Development
Codeanywhere was used as the IDE for local development of the game and GitHub was used for version control.


## Testing
Details of the testing performed are included in the testing.md file.


## Credits
### Code Used
Code for the shufflecards function was taken and adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array.

### Media
The christmas banner image, three background images, twelve card front images, and one card back image were taken from https://www.vecteezy.com/free-vector.

The christmas banner image was edited and cleaned up to make it more transparent using microsoft paint.

The card flip sound and cheering sound for the celebration modal were taken from https://pixabay.com/.

### Acknowledgments
Templates for the readme.md and testing.md were based on ones created by Kera Cudmore at https://github.com/kera-cudmore/readme-examples.

The following tutorials were viewed in order to learn how to create a modal, and how to create sound effects for the card flips:

https://www.youtube.com/watch?app=desktop&v=XH5OW46yO8I

https://www.youtube.com/watch?v=VlwSz2dXK_8


