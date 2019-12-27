# Image-Cube:

## What is it?
Image-Cube is a custom web component that holds a thumbnail image.  When you hover over the image, it will roll over like a cube
to another face that has text describing the image.  Once your mouse is not hovering over the image it will roll back to the image.
There is an image of it below.

![Alt text](/image-cube.png?raw=true "Image-Cube")

[Click here for Demo](https://mmgrant73.github.io/)

### How to use it?
It is quite easy to use it on your webpage. Just follow the below steps:
1. Include the link to the script file that holds the this custom web component (img-cube.js) near the bottom of 
   the body section of your webpage.  See below
   
```
    <script src="./imagecube.js"></script>
``` 

3)  Then use the custom element tags on your webpage.

```
    <img-cube src="http://lorempixel.com/192/96/sports/2" title="Test" detail="Guy Riding a bike"></img-cube>
```

That is all you have to do to use this custom element.  There is an example HTML page (imacube.html) that shows how to use it.


```
    <!DOCTYPE html>
    <html>
      <head>
        <title>Dropdown with Web Components</title>
      </head>
      <body>

        <h1>This is a test of the img-cube component</h1>

        <img-cube src="http://lorempixel.com/192/96/sports/2" title="Test" detail="Guy Riding a bike"></img-cube>

        <script src="./imgcube.js"></script>

      </body>
    </html>
```	


### There are only three attributes that you need to set.

1. src - Is the link to the image that you are using
2. title - Will be the title of the text face of the cube
3. detail - The text that will be shown below the title on the text face of the cube.


Note: The style for this control was taken from codepen.  It was designed by Joshua Hibbert.  He deserves credit for the design. 
I just turn his design into a web component.
