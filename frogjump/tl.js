//Copyright (C) Webbu Kobo Tokyo Japan All Rights Reserved
setInterval(timeProg,50);function timeProg(){timer++;offsetX(canvas);offsetY(canvas);if(flg==open){if(!ctx){alert("Let's Play the game with HTML5 browser!");if(document.documentElement.lang == 'ja')alert("HTML5対応ブラウザで遊んでねっ");flg=error2;}valInit();flg=ready;}else if(flg==ready){if(btnFlg==start){drawTama();drawFrog(-1,-1);drawUma();ctx.drawImage(aimage, 0, 0, 250, 50, 80, 150, 160, 37);ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}else if(btnFlg==link){drawTama();drawFrog(-1,-1);drawUma();ctx.drawImage(aimage, 0, 0, 250, 50, 90, 285, 140, 30);ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}else{drawTama();drawFrog(-1,-1);drawUma();ctx.drawImage(simage, 0, 0, 320, 320, 0, 0, 320, 320);}$("top_info2").innerHTML = "";}else if(flg==start){if(timer>7){clearTama();valInit();drawTama();drawFrog(-1,-1);drawUma();timer=0;$("top_info1").innerHTML = "Remember the frog jumping!";if(document.documentElement.lang == 'ja')$("top_info1").innerHTML = "カエルの飛び順を憶えてネ";$("top_info2").innerHTML = "Score " + score;flg=quest;}}else if(flg==quest){if(timer>11){if(!Question()){timer=0;flg = touchW;}}}else if(flg==touchW){if(timer>10){drawTama();drawFrog(-1,-1);drawUma();$("top_info1").innerHTML = "Trace the forg!";if(document.documentElement.lang == 'ja')$("top_info1").innerHTML = "回答スタート！";$("top_info2").innerHTML = "Score " + score;flg=touch;}}else if(flg==touch){}else if(flg==clear){drawTama();drawUma();drawFrog(-1,-1);if(btnFlg == next)ctx.drawImage(aimage, 0, 0, 250, 50, 80, 162, 160, 35);ctx.drawImage(cimage, 0, 0, 320, 340, 0, 0, 320, 340);$("top_info2").innerHTML = "Score " + score;}else if(flg==next){if(timer>7){value = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];valInit();drawTama();drawFrog(-1,-1);drawUma();timer=0;$("top_info1").innerHTML = "Remember the frog jumping!";if(document.documentElement.lang == 'ja')$("top_info1").innerHTML = "カエルの飛び順を憶えてネ";$("top_info2").innerHTML = "Score " + score;flg=quest;}}else if(flg==over){if(timer>12 && timer<=20){drawTama();drawUma();drawFrog(-1,-1);}else if(timer>20){drawTama();drawUma();drawFrog(-1,-1);ctx.drawImage(ovimage, 0, 0, 320, 320, 0, 0, 320, 320);if(btnFlg == start){ctx.drawImage(aimage, 0, 0, 250, 50, 80, 150, 160, 35);}else if(btnFlg == link){ctx.drawImage(aimage, 0, 0, 250, 50, 80, 190, 160, 35);}else if(btnFlg == ready){ctx.drawImage(aimage, 0, 0, 250, 50, 80, 230, 160, 35);}else if(btnFlg == tweet){ctx.drawImage(aimage, 0, 0, 250, 50, 92, 275, social_w/2+5, social_h+8);}else if(btnFlg == face){ctx.drawImage(aimage, 0, 0, 250, 50, 97+social_w/2, 275, social_w/2+5, social_h+8);}ctx.drawImage(socialimage, 0, 0, social_w, social_h, 97, 280, social_w, social_h);}}else if(flg==error2){}}