---
title: "Time to Steal Artifacts"
subtitle: "Technology Student Association Video Game Design Competition"
thumb: "/projects/tsa/tsa_title.webp"
copyright: false
date: "2021-08-01 00:00:00 -0500"
layout: project
---

This was made for the 2021-2022 TSA competition. It runs on a desktop or laptop. The theme for this year's
competition was an arcade game related to a museum. TSA (the abbreviation for the game) has you playing as
a thief trying to steal artifacts from the museum!

<p><a target="_blank" href="https://tsavideogame.github.io">https://tsavideogame.github.io</a></p>

For this project I made a game engine and entity component system (ECS) from scratch in C.

<p><a target="_blank" href="https://github.com/MisterMjir/jin">jin (Game Engine)</a></p>
<p><a target="_blank" href="https://github.com/MisterMjir/jEL">jEL (ECS)</a></p>

I'm calling it a game engine, but it's more of a framework which glues together libraries and provides a common
API for graphics, input, audio, and possibly other functions I forgot about.

Originally the game was going to be a native application, but the competition required an online port so
emscripten was used to port the game to the web. Thanks to the modularity of the game engine, it was fairly
easy to make a port.

The graphics use OpenGL, and it gave pretty cool lighting effects.

The audio uses OpenAL.

Creating a window and handling inputs uses native platform APIs.

A speedrun channel covered this game. <a target="_blank" href="https://youtu.be/YeUYLapE49s">YouTube</a>