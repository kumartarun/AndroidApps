//Copyright (C) Webbu Kobo Tokyo Japan All Rights Reserved
canvas.ontouchstart = function(e){if(e.touches.length>0){for(var i=0;i<e.touches.length;i++){var t = e.touches[i];if(flg==-2)startButtonXY(t.clientX-offsetXY[0], t.clientY-offsetXY[1]);if(flg==2)flg=1;if(flg==6)flg=5;if(flg==1 || flg==5)touchPanelXY(t.clientX-offsetXY[0], t.clientY-offsetXY[1]);if(i==0 && flg==4)touchButtonXY(t.clientX-offsetXY[0], t.clientY-offsetXY[1]);}}e.preventDefault();};canvas.onmousedown = function(e){if(flg==-2)startButtonXY(e.clientX-offsetXY[0], e.clientY-offsetXY[1]);if(flg==2)flg=1;if(flg==6)flg=5;if(flg==1 || flg==5)touchPanelXY(e.clientX-offsetXY[0], e.clientY-offsetXY[1]);if(flg==4)touchButtonXY(e.clientX-offsetXY[0], e.clientY-offsetXY[1]);};canvas.ontouchmove = function(e){if(e.touches.length>0){for(var i=0;i<e.touches.length;i++){var t = e.touches[i];if(flg==-2)startButtonXY(t.clientX-offsetXY[0], t.clientY-offsetXY[1]);if(flg==2 || flg==6)touchPanelXY(t.clientX-offsetXY[0], t.clientY-offsetXY[1]);if(i==0 && flg==4)touchButtonXY(t.clientX-offsetXY[0], t.clientY-offsetXY[1]);}}e.preventDefault();};canvas.onmousemove = function(e){if(flg==-2)startButtonXY(e.clientX-offsetXY[0], e.clientY-offsetXY[1]);if(flg==2 || flg==6)touchPanelXY(e.clientX-offsetXY[0], e.clientY-offsetXY[1]);if(flg==4)touchButtonXY(e.clientX-offsetXY[0], e.clientY-offsetXY[1]);};canvas.ontouchend = function(){if(flg==1 || flg==2 || flg==5 ||  flg==6)endPanelXY();if(flg==-2 || flg==4)endButtonXY();e.preventDefault();};canvas.onmouseup = function(){if(flg==1 || flg==2 || flg==5 ||  flg==6)endPanelXY();if(flg==-2 || flg==4)endButtonXY();};window.ontouchmove = function(e){e.preventDefault();};