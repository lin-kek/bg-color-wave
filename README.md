# Dynamic Background Color Wave

## Introduction
This project showcases a creative wave effect using Anime.js. The effect is a visually appealing transition that reveals the content of a black-background webpage through a wave of color changes.

## Wave Effect Implementation
The wave effect is achieved using Anime.js, a powerful yet lightweight JavaScript animation library. Here's an overview of how it's implemented:

- **Tile Creation**: The webpage is divided into a grid of 'tiles', small div elements that collectively cover the entire page.
- **Click Event Handling**: A click event listener triggers the wave animation. Each tile changes its background color in a sequence, creating the wave effect.
- **Anime.js Animation**: Anime.js is used to animate the background color of each tile. The animation is staggered across the grid, starting from the tile where the click occurred and radiating outwards.
