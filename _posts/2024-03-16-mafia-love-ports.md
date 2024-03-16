---
layout: post
title: "Mafia Love ports"
date: 2024-03-16 3:05:00 -0500
categories: Mafia-Love
thumb: "/projects/mafia_love/mafia_love_title.webp"
---
Considering how there is physically only one physical system that can play Mafia Love, it's very hard for others to
play the game. I decided to quickly make a port of it so everyone can play!

I made this in one evening and one morning, so it may not be perfect. I used my game engine, anjin, to make the
Windows port. I tried to make a web port but there are some problems with it, including a glitch on level two and
the audio not working at all. If I ever come back to this I might debug it, but there is a low chance of that
happening, but at least the Windows port works pretty good!

# How to play

<a target="_blank" href="https://mihirchaudhari.github.io/mafia_love/">Web port</a>

<a target="_blank" href="https://github.com/mihirchaudhari/mafia_love/releases">Page to download windows port</a>

The controls are WASD for moving, left and right arrow keys for looking, shift for pausing, and the up arrow key
for shooting and advancing through the cutscenes.

Additionally you can enter spanish mode by pressing the down arrow on the title screen.

Enjoy!

# How porting worked
Most of the game's code is untouched. The real code changes were with the hardware interfacing.

The one pure software code change was the state system. anjin's state system and Mafia Love's are slightly
different, but it was fairly easy to chop up the Mafia Love loop functions and convert them into update and draw
functions.

The graphics actually were actually not bad to implement as well. All I had to do was create a new framebuffer,
which was basically dynamically creating an OpenGL texture and then I just drew that using anjin's GFX module.
Most of the code worked as is.

The sound was pretty bad to implement. I just rewrote the entire code. One good thing is the 6 bit audio is
preserved, although it is played as mono 8-bit audio. I could've converted the values to become 8 bit but it sounds
fine the way it is, if you're using the Windows port and can actually hear the sound that is. I ended up
basically copying the sound module from anjin. The regular one also has some problems on the web, but that is a
problem for another day.