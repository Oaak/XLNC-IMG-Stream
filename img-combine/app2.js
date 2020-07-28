var c=document.getElementById("overlay");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
var imageObj4 = new Image();

console.log("-----------------")
console.log("app2")
console.log(c)



blueSide2 = "F8-logo-blue-2019.png"
redSide2 = "JetBlackLogo2.png"
blueSide3 = "JetBlackLogo2.png"
redSide3 = "F8-logo-blue-2019.png"
blueSide4 = "F8-logo-blue-2019.png"
redSide4 = "JetBlackLogo2.png"
PHBcaster = "PHB: Jake Kelton"
colorCaster = "Color: Axeman"
blueTeam = "Jet Black Clover"
redTeam = "JetBlackClover"
redScore = "1-2"
blueScore = "2-1"
title = "Lightweight Testing Grounds"
week = "Week 12"
overlay1 = "Broadcasterintermission.png"
blueSide = "JetBlackLogo2.png"
redSide = "F8-logo-blue-2019.png"
eventLogo = "RisenEsports.png"
comingUp = "COMING UP"
type = "Lightweight"

var maxRWidth = 352; // Max width for the image
var maxRHeight = 246;    // Max height for the image
var ratioR = 0;  // Used for aspect ratio

var maxBWidth = 352; // Max width for the image
var maxBHeight = 246;    // Max height for the image
var ratioB = 0;  // Used for aspect ratio

var maxLWidth = 262;
var maxLHeight = 228;
var ratioL = 0;

{
function drawTitle() {
   if (title !== null) {
      ctx.font = "90px " + fontStyle;
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(title, 305, 910);
   }
};

function drawWeek() {
   if (week !== null) {
      ctx.font = "75px " + fontStyle;
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(week, 313, 1000);
   }
};

function drawPHBcaster() {
   if (PHBcaster !== null) {
      ctx.font = "25px " + fontStyle;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(PHBcaster, 1521, 835);
   }
};

function drawColorCaster() {
   if (colorCaster !== null) {
      ctx.font = "25px " + fontStyle;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(colorCaster, 1521, 860);
   }
};

function drawRScore() {
   if (redScore !== null) {
      ctx.font = "35px " + fontStyle;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(redScore, 1513, 766);
   }
}

function drawBScore() {
   if (blueScore !== null) {
      ctx.font = "35px " + fontStyle;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(blueScore, 1513, 410);
   }
}

function drawRteam() {
   if (redTeam !== null) {
      ctx.font = "50px " + fontStyle;
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(redTeam, 120, 497);
   }
}

function drawBteam() {
   if (blueTeam !== null) {
      ctx.font = "50px " + fontStyle;
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(blueTeam, 120, 160);
   }
}

function drawTest() {
   ctx.font = "20px " + fontStyle;
   // ctx.textAlign = "center";
   ctx.fillStyle = "red";
   ctx.fillText("test", 315, 795);
   //left is 15
   //right is 315
   //bottom is 965
   //top is 795 var.sync = false
}
}
console.log(redSide.naturalWidth + " " + redSide.naturalHeight)

imageObj1.src = overlay1

imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 1920, 1080);
   drawTitle();
   drawPHBcaster();
   drawColorCaster();
   drawRScore();
   drawBScore();
   drawRteam();
   drawBteam();
   drawWeek();
   // drawTest();
   imageObj2.src = blueSide;

   imageObj2.onload = function() {
      console.log(imageObj2.naturalWidth + " " + imageObj2.naturalHeight)
            var width = imageObj2.naturalWidth   // Current image width
            var height = imageObj2.naturalHeight   // Current image height

              // Check if the current width is larger than the max
              if(width > maxBWidth){
               ratioB = maxBWidth / width;   // get ratio for scaling image
               newBWidth = maxBWidth; // Set new width
               newBHeight = height * ratioB;  // Scale height based on ratio
               height = height * ratioB;    // Reset height to match scaled image
               width = width * ratioB;    // Reset width to match scaled image
           }
   
           // Check if current height is larger than max
           if(height > maxBHeight){
               ratioB = maxBHeight / height; // get ratio for scaling image
               newBHeight = maxBHeight   // Set new height
               newBWidth = width * ratioB    // Scale width based on ratio
               width = width * ratioB;    // Reset width to match scaled image
               height = height * ratioB;    // Reset height to match scaled image
           }
           xBPlacement = (184 - (width / 2)) + 1329
           yBPlacement = ((112 + 368) / 2) - (height / 2)


         console.log(width + " " + height)
      ctx.drawImage(imageObj2, xBPlacement, yBPlacement, width, height);
      imageObj3.src = redSide;

      imageObj3.onload = function() {
         console.log(imageObj3.naturalWidth + " " + imageObj3.naturalHeight)
         var width = imageObj3.naturalWidth   // Current image width
         var height = imageObj3.naturalHeight   // Current image height

           // Check if the current width is larger than the max
           if(width > maxRWidth){
            ratioR = maxRWidth / width;   // get ratio for scaling image
            newRWidth = maxRWidth; // Set new width
            newRHeight = height * ratioR;  // Scale height based on ratio
            height = height * ratioR;    // Reset height to match scaled image
            width = width * ratioR;    // Reset width to match scaled image
        }

        // Check if current height is larger than max
        if(height > maxRHeight){
            ratioR = maxRHeight / height; // get ratio for scaling image
            newRHeight = maxRHeight   // Set new height
            newRWidth = width * ratioR    // Scale width based on ratio
            width = width * ratioR;    // Reset width to match scaled image
            height = height * ratioR;    // Reset height to match scaled image
        }
        xRPlacement = (182.5 - (width / 2)) + 1331
        yRPlacement = ((458 + 715) / 2) - (height / 2)
        console.log(width + " " + height)
         ctx.drawImage(imageObj3, xRPlacement, yRPlacement, width, height);
         imageObj4.src = eventLogo
         imageObj4.onload = function() {
            var width = imageObj4.naturalWidth 
            var height = imageObj4.naturalHeight

               if(width > maxLWidth) {
                  ratioL = maxLWidth / width;
                  newLWidth = maxLWidth;
                  newLHeight = height * ratioL
                  width = width * ratioL
                  height = height * ratioL
               }

               if(height > maxLHeight){
                  ratioL = maxLHeight / width;
                  newLHeight = maxLHeight;
                  newLWidth = width * ratioL
                  width = width * ratioL
                  height = height * ratioL
               }

               xLPlacement = (136 - (width / 2)) + 33
               yLPlacement = 808 + (119 - (height / 2))
            ctx.drawImage(imageObj4, xLPlacement, yLPlacement, width, height);
            var img = c.toDataURL("image/png");
            document.writeIn('<img src="' + img + '" width="1920" height="1080"/>');
         }
      }
   }
};								