# Wilhelm
An Instagram bot that likes an image and posts a random comment.

## How to set it up
1. Download the file
2. Navigate to the enclosing folder with the terminal
3. Run `npm install robotjs`
4. You're all set! Open Instagram on your browser, navigate to any hashtag (or user), and click on a post.

![Instagram page](https://i.ibb.co/18Pr0k3/Screen-Shot-2020-10-06-at-6-45-19-PM.png)

5. Now, run the script! Simply type `node wilhelminsta.js` and switch to your Chrome tab.

### KEEP IN MIND
- This project was initially intended for my computer alone. Some of the values need tweaking.
- All times are measured in milliseconds.
- This script CONTROLS YOUR COMPUTER. At times, you will not be able to move your mouse. To stop the script, press `Ctrl + C` on the terminal

### Tweakable values
- `COMMENTS`: A list of comments the bot can pick to comment on a post. You can change this on your version or send a pull request to add them directly to this repository. (Use a backslash before including a " if you choose to add your own comments.)
- `CHARS_PER_MINUTE`: Characters per minute (typing speed)
- `WAIT_BETWEEN_POSTS`: How long to randomly wait between posts, where the value on the left is the minimum and the value on the right is the maximum. **Do keep in mind that colorscanning also takes some time, so it will take more time between posts than you initially set.**
- `INITIAL_WAIT_TIME`: Initial time to wait. Consider keeping it above 2000 so that you have plenty of time to switch to your Instagram tab.
- `SHOULD_COMMENT`: Should the bot comment and like or just like?
- `SWITCH_ON_RATELIMIT`: Should switch to just liking if it gets rate limited?

- `NEXTPOST`: Coordinates of the "Next Post" button. These don't move, so they're used as astatic coordinates.
- `SCHEIGHT` and `SCWIDTH`: Define the screenshot which is colorscanned to find the Post button.


*You **will** get rate limited when using this bot. When you see "Could not post comment", consider switching SHOULD_COMMENT to false.*
