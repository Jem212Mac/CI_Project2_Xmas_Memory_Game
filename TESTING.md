# Xmas Memory Game - TESTING
---

## CONTENTS

- [Xmas Memory Game - TESTING](#xmas-memory-game---testing)
  - [CONTENTS](#contents)
  - [AUTOMATED TESTING](#automated-testing)
  - [MANUAL TESTING](#manual-testing)
  - [BUGS](#bugs)

---

## AUTOMATED TESTING
### W3C HTML Validator
HTML for the project was tested using the W3C HTML Validator and no errors were found.

![html validation](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/3bf07b83-3689-4c0c-a1c9-f99c59eae0a2)

### Jigsaw CSS Validator
CSS for the project was tested using the Jigsaw CSS Validator and no errors were found.

![css validation](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/b2e84fdd-f94e-45c0-8fc0-08dee0b9dcbb)

### JSHint
Javascript for the project was tested using JSHint and no errors were found.

![js validation](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/1941a28a-289f-454b-b0cd-0b5bb605a9ec)

### Lighthouse
The performance, accessibility, best practices, and SEO of the site were tested using Lighthouse.

![Lighthouse_Report](https://github.com/Jem212Mac/CI_Project_2_Xmas_Memory_Game/assets/89839563/51123828-3b4c-4a33-bfec-9299bc479bf3)


## MANUAL TESTING
### Feature Testing
1. The game rules button was tested to ensure that it displayed the appropriate popup, that the content of the popup was as expected, and that the layout of the modal and close buttons were correct.  The background area was checked while the modal was displayed to ensure that the background was darker and that the cards and buttons in the background were not able to be selected.
2. The clicking of cards were tested to ensure that the appropriate sound effect played when cards were selected.
3. The game was tested to ensure that unmatched card pairs flipped back over to show the card back image again, and that the user could try to match a new set of cards.
4. The game was tested to ensure that matched card pairs stayed with the front image displayed and were disabled.
5. The game was tested to ensure that for every pair of cards uncovered, the no of moves incremented by 1.
6. The game was tested to ensure that when all card pairs had been matched, a celebration modal appeared, and a cheering sound effect was played.  The content of the celebration modal was checked to ensure it was correct and that the layout was correct.
7. The restart button was tested to ensure that when it was clicked the game restarted from scratch, the no. of moves reset to zero and all cards flipped back to show the card back image.
8. The background selection was tested to ensure that the winter scene was selected by default when the site was loaded and that the background image successfuly changed to the appropriaye image when a different radio button was selected.
9. Testing was performed to check that the appropriate favicon image was displayed.

### Browser Testing
All of the above features were tested with google chrome and safari.

### Device Testing
All of the above features were tested on a Samsung Galaxy Flip, an Apple iPhone, and a Lenovo Laptop.

## BUGS
### Known Bugs
It was noticed while testing that if the user clicks on the second card too quickly, the sound effect for the second card flip does not play because the first sound effect has not finished.  Not sure if I would class this as a bug, but it might be worth investigating if this could be resolved by adding a delay to stop the user from clicking the second card too quickly. This might adversely impact user experience though.

### Solved Bugs
