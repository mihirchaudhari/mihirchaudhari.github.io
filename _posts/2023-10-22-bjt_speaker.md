---
layout: post
title: "BJT Speaker"
date: 2024-07-21 12:54:00 -0500
categories: Circuits
thumb: "/assets/img/majaa_makad.png"
---

I'm making a bjt speaker. Why? For fun. Also as a redemption to the failed speaker in
<a target="_blank" href="#">Mafia Love</a>.

## The Goal

This will be a usb (5V) powered speaker, just plug and play. I am not too worried about power consumption,
this will help simplify stuff. I do want to get decent audio with actual amplification and preferably low distortion.

## Power Unit

I would say sound has two important parts. The frequency of the wave and the amplitude. The frequency determines
pitch, and the amplitude determines volume. I actually don't need to worry about frequency because that will be
an input signal provided by another source. I do need to worry about the amplitude. In Mafia Love 5V was supposed
to be the max voltage (of course I completely botched that audio amplifier so it didn't work), and it wasn't that
loud. To remedy this, the supply voltage needs to be much larger, and this can be achieved with a voltage doubler.

A voltage doubler looks liks this

# Insert image

Now I didn't worry too much about how it works. You put in an AC signal and on the output you get a DC signal with
double the amplitude of the AC signal. In a very broad view, the capacitors get charged, and the diodes prevent
the capacitors from discharging. Every cycle you add half the voltage (1 -> 1.5 -> 1.75 -> ...) and eventually you
get double the voltage. I cascaded another voltage doubler to get even more voltage. Now this probably means I will
get much less current since this is not a power amplifier, but hopefully everything should still work well.

I originally tried to cascade them like this.

# Insert image

The problem here is you need an AC input. The output of a voltage doubler is DC, so you cannot cascade them like
this. I just searched up what it looks like online and copied it to get this:

# Insert image

The next question is how to get an AC signal from a DC signal. Now at first I thought I needed a sine wave, because
that's what I think of by default when I hear AC. The good news is, it doesn't need to be a sine wave. It just needs
to alternate between positive and negative. This can be a positive and negative square wave. So the next step
is figuring out how to do that so I can make my voltage doubler work.

I first tried doing this.

# Insert image

This didn't work. I still didn't end up figuring out why, but here was my reasoning for this. The bjts here are
configured as a digital inverter, so they should be the oppsite

## Amplifcation Unit

Work in progress