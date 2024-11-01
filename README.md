# GeoGebra for Figma

[GeoGebra for Figma - Figma Plugin Page](https://www.figma.com/community/plugin/1163446140410056847/geogebra-for-figma)

Effortlessly craft function graphs by simply entering formulas into a user-friendly form.

## Overview

GeoGebra for Figma is a Figma plugin that enables users to create and edit graphs directly within Figma, utilizing GeoGebra's functionality. Users can quickly generate function graphs and export them directly into their Figma projects.

1. [GeoGebra for Figma](#geogebra-for-figma)
   1. [Overview](#overview)
   2. [Key Features](#key-features)
   3. [Installation (for General Users)](#installation-for-general-users)
   4. [Development Setup (for Contributors)](#development-setup-for-contributors)
      1. [1. Clone Repositories](#1-clone-repositories)
      2. [2. Set Up the UI](#2-set-up-the-ui)
      3. [3. Configure the Main Thread](#3-configure-the-main-thread)
      4. [4. Launch the Figma Plugin](#4-launch-the-figma-plugin)

## Key Features

-   **Graph Exporting**: Simply enter formulas into an easy-to-use form to instantly export the corresponding function graphs.
-   **Live Preview**: As you enter formulas, see your graph shape take form in real-time.
-   **Graph Editing**: Already exported a graph? You can select it and reopen the plugin to make further edits.
-   **Mode Switching**: Switch smoothly between edit mode and full-screen view for a seamless working experience.
-   **Graph Insertion**: If a Frame or Group object is selected, export your graph directly into it.

This plugin replicates GeoGebra's features, providing a familiar and intuitive experience. For more detailed guidelines, please see the [GeoGebra Documentation](https://www.geogebra.org).

> **Note**: The app automatically switches to full-screen mode before exporting a graph. We recommend reviewing your graph in full-screen mode as previews may slightly differ between edit and full-screen views.

## Installation (for General Users)

To install GeoGebra for Figma:

1. Go to [GeoGebra for Figma - Figma Plugin Page](https://www.figma.com/community/plugin/1163446140410056847/geogebra-for-figma).
2. Click **Install** to add it to Figma.

Once installed, you can access the plugin from the **Plugins** menu within your Figma project.

## Development Setup (for Contributors)

If you’re interested in contributing to this project, here’s how to set up the development environment.

### 1. Clone Repositories

Clone the following repositories:

```bash
# UI repository
git clone https://github.com/karutt/geogebra-for-figma.git

# Main thread repository
git clone https://github.com/karutt/geogebra-for-figma-main-thread.git
```

### 2. Set Up the UI

In the UI repository (`geogebra-for-figma`), run:

```bash
npm install
npm run dev
```

If successful, you can view the UI at `localhost:3000`.

### 3. Configure the Main Thread

In the main thread repository (`geogebra-for-figma-main-thread`), run:

```bash
npm install
npm run dev
```

To set up for local development, temporarily uncomment and comment out the following lines in `./src/canvas.ts`:

```ts
  // figma.showUI(`<script>window.location.href = "http://localhost:3000/";</script>`, {
  figma.showUI(`<script>window.location.href = "https://geogebra-for-figma.vercel.app/";</script>`, {
```

### 4. Launch the Figma Plugin

1. Open Figma, go to **Plugins > Development > Import plugin from manifest**.
2. Select `geogebra-for-figma-main-thread/dist/manifest.json` to import the plugin.
3. "Geogebra For Figma (Development)" will now appear in the **Plugins** menu. Click it to launch the plugin.
