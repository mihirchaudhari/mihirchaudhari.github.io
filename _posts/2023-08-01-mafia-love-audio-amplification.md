---
layout: post
title: "Mafia Love: Audio Amplification"
date: 2023-08-01 23:21:00 -0500
categories: Mafia-Love Circuits
thumb: "/projects/mafia_love/amplifier.webp"
---

This post is an example of how to NOT make an audio amplifier.

## The Idea

In our labs we were given this terrible, cheap speaker which could barely make any sound. We had better speakers
from our intro to electrical engineering course, (at least they looked better, I don't know if they actually were,
I don't know really know much about speakers). I figured if we made an amplifier and hooked it up to these better
speakers, we could have something pretty cool.

## The Implementation

Here is the circuit diagram.

![Circuit Diagram](/projects/mafia_love/amplifier_circuit.webp)

There is a 10 Kohm slide pot(entiometer) which serves as volume control. The 120 ohm resistors serve as a 60 ohm
resistor to limit the current (we found out that reducing this resistance leads to greater volumes, but hotter
resistors and there was a maximum current the transistor could handle).

The capacitor made the amplification a little louder and removed a smidge of distortion.

I am not going to explain anything too much because you shouldn't make an audio amplifier like this anyways!

## The Failure

The transistor wasn't biased. I didn't know this because I didn't know anything about transistors. Basically you
want the transistor to be constantly at a specific operating point so it will always provide a consistent gain
based on the input current. Without biasing, the transistor isn't even on all the time. Now a transistor cannot
amplify if it isn't on, that's just very silly (if it can then please let me know).

For some reason it worked for sound effects, and when I asked one of my professors about it I was told I just got
very lucky.

## How to Prevent

Further testing would've easily proved the amplifier doesn't really work. However, it worked for sound effects, and
it would take months for music to be implemented. By that time the messed up circuit was already soldered onto the
PCB and everything (yikes).

The other way to prevent this is to have better known how transistors work, but I don't think there's any fun in
reading a textbook for such a long time just so you don't mess up. It's more fun to just try out something, see
that it doesn't work, and try to fix it yourself. I would say testing is far more important.