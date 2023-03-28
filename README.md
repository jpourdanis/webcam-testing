# webcam-testing

An example of how you can solve the problem of web camera recording testing with Cypress

### THE PROBLEM

When you want to automate clicks and inputs things are straight forward in the test automation world.

What's happening when you want to simulate access to camera and simulate the Web Camera recording process for your test?

It's obvious that if you want to run a test on your local machine you can use the Web Camera of the machine BUT how this test will run on CI?

We need something that simulates the camera access and produce actual stream of video.

### THE SOLUTION

On chronium based browsers you can add some arguments that will do this job for you :

- `--use-fake-ui-for-media-stream` avoids the need to grant camera/microphone permissions.
- `--use-fake-device-for-media-stream` feeds a test pattern to `getUserMedia()` instead of live camera input.

You can also use another argument to feed the camera your video :
- `--use-file-for-fake-video-capture=path/to/video`

In our case we will use the public website [https://webcamtests.com/](https://webcamtests.com/) to run it on GitHub Actions and we will get as artifacts the video and the screenshot of the test.

### RUN TESTS

1. Clone this repository
2. Run `cd webcam-testing` to command line to access the folder
3. Run `npm install`
4. Run `npx cypress open`

### RESULT

Screenshot of the Web Camera recording frame:

![Screenshot](https://github.com/jpourdanis/webcam-testing/blob/main/cypress/screenshots/webcam.cy.js/A%20sample%20to%20test%20a%20webcamera%20on%20ci%20--%20should%20take%20screenshot%20of%20web%20recording.png)

Short video with execution:

![Webcam E2E Test](webcam.cy.js.gif)

