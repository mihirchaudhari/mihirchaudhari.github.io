---
layout: post
title: "Valentine's Day Predictor"
date: 2024-02-08 2:04:00 -0500
categories: Meme
thumb: "/assets/img/misc/heart.webp"
---

Ever wondered how many choclates you will be getting on Valentine's day? Wonder no more, as my Valentine's Day Predictor can calculate how many choclates you will get at any given year! (I made this in literally an hour)

<a target="_blank" href="https://mihirchaudhari.github.io/vday">Valentine's Day Predictor</a>

# How it works

So the name and year are hashed, and then are fed through a math function which simulates some kind of
randomness.

The code is pretty simple

```
function shah362(str) {
        let mod = 362;
        let sum = 0;

        for (let i = 0; i < str.length; ++i) {
          charv = str[i].charCodeAt();
          if (charv < 60) charv = charv + 30;
          sum += Math.log(Math.exp(charv)) / (1 + Math.cos(charv)) * Math.exp(charv + i);
        }

        return sum % mod;
      }

      function ily(x) {
        let n = 10;
        let babu = 10;

        let sum = 0;

        for (let i = 0; i < n; ++i) {
          sum += (n - i) * Math.sin((i + 1) * x);
        }

        sum = sum * sum;

        return Math.ceil(sum);
      }

```

## Hashing algorithm

My code uses the SHAH362 hashing algorithm. It is unrelated to SHA algorithms, Shah is just the last name of
one of my friends. So every character of the string (which is the name + year) is fed through some random
function I made with logs, exponentials, and a trig function. This is then "modded" (take the remainder) with 362.
The pseudo-random math function, which is called ```ily```, is periodic every two pi so this modulus parameter is
fine. 

One important thing is to increase the weight of the numbers. The numbers have a much lower ASCII value than the letters, so their value needs to be increased. I just chose 30 and it worked out pretty well.

## Pseudo random function

This function is just a sum of sines at different amplitudes with different frequencies. It goes something like
```10sinx + 9sin2x + 8sin3x + ... + sin10x```. The function is then squared to prevent negative amounts of chocolate
and rounded to the nearest integer. If you plot this in desmos or whatever you choose, you can see what it looks
like.

## Have fun

I also think I misspelled predictor on the final version.

