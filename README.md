# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Connie Deng**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/alluring-balsam-satellite

## Required Functionality

The following **required** functionality is complete:

- [ x ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [ x ] "Start" button toggles between "Start" and "Stop" when clicked.
- [ x ] Game buttons each light up and play a sound when clicked.
- [ x ] Computer plays back sequence of clues including sound and visual cue for each button
- [ x ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [ x ] User wins the game after guessing a complete pattern
- [ x ] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ x ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ x ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ x ] More than 4 functional game buttons
- [ x ] Playback speeds up on each turn
- [ x ] Computer picks a different pattern each time the game is played
- [ x ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ x ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- https://www.w3schools.com/css/css_background_image.asp (for syntax reference)
- https://www.w3schools.com/jsref/prop_html_innerhtml.asp
- https://www.w3schools.com/js/js_random.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
- It has been a while since I have used plain HTML, CSS, and vanilla javascript. Therefore, I found myself forgetting syntaxes such as getElementById and innerHTML, which the Required Steps kindly reminded me of. For instance, when displaying the variable of strikes left that the player has, I had to look to W3schools to remind me of the innerHTML syntax. Similarly, I had to search up JavaScript's random() function, as each language uses a different syntax for its implementation of random. Following, I had to play around with its boundaries, ensuring that I was setting the right limits. Another challenge I faced was implementing the three strikes functionality. When doing so, I had to isolate the variables that would not progress if the player guessed wrong. For example, I initially placed the clueHoldTime variable inside the playClueSequence() function. However, that would speed up the clueHoldTime variable even if the player got it incorrect - which we didn't want. We wanted the game to speed up only when the player was correctly answering. Thus, I adjusted clueHoldTime only when the user got it right by placing it in the function guess(). Lastly, I experimented with how much time to shave off when speeding up the clueHoldTime. I adjusted the clueHoldTime dynamically so that it would progressively get faster by dividing the clueHoldTime by the progress variable. It occasionally was so fast that repeating button patterns weren’t visibly noticeable - which again, we don't want. To combat this, I made sure that the denominator was minimally increasing from the value 1.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
- Specific to this project, in my Browser's Console (I am using google chrome) I've been getting warnings including "[Deprecation] ::-webkit-details-marker pseudo element selector" and "[OPTIMIZELY] - ERROR 2021-03-18T00:58:44.496Z OPTIMIZELY: Optimizely object is not valid. Failing isFeatureEnabled." These demonstrate just some of the complexities of the web we use every day. The first warning pertains to the pseudo-element selector being deprecated - it not be used/maintained. If you follow that warning, Chrome gives an updated way to implement the same function here: https://chromestatus.com/feature/6730096436051968. Questions that arise are "What is a Webkit?" as well software/web development cycles. Following there is an error - we'll refer to as optimizely, is an error concerning the SDK (software development kit) Glitch uses. A question that I have is: "What is an SDK? While it's defined as a kit of tools, how is it different from an API?" This is something I'd like to further understand. These are not the only questions I have. I acknowledge our browsers encompassing the HTML, CSS, and JavaScript code is just the tip of the iceberg in the world of web development. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
- If I had a few more hours to work on this project, I would work on three main things: first, I would refactor the code, then, I would work on the UI/appearance of the game, and lastly, add additional features. The first refactoring practice I'd do is remove clutter in the script.js file. I'd move all the document methods like document.getElementById at the top of the script because they are verbose. Next, I'd separate the massive script.js and style.css files into multiple files, each taking care of a certain component of the game. For instance, I would create a separate script file that solely handles sound functions and another to handle game state functions. Secondly, I would add more styling to make the game more aesthetically pleasing by using different fonts, shadings, borders, etc. Lastly, I would like to add more features like a leader board, a more fulfilling reward for winning, and additional modes to increase difficulty. A mode I would implement is a mode where the buttons shift around while the player is guessing so that they have to carefully enter the right pattern.

## License

    Copyright [Connie Deng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
