---
title: Capture Assets
id: capture-assets
---

With an idea for your build, begin capturing assets and by cleaning up the images you collected, start removing backgrounds, cutting up bits, and setting up layers.

:::sonceri Sonc Info!
You have numerous graphics applications and 3D model options for capturing assets, making edits, and saving your work. I have always used Photoshop CC with screen captures. These instructions follow that method, but the ideas can help anyone using any tool.
:::

## Set the Background Color

If you capture images in WMV or WoWTools, your background is a single color. You can change this color through settings in the tools. The default color is blue, but if the model you want to capture has this shade in it, you may want to select another shade. Be careful of using black or shades closely matching anything in the models as these could be easily selected if using tools to detect colors for removal.

:::sonceri Color Tip!
Keep WMV and WoWTools background colors the exact same! This makes cutting out assets so much easier and faster. You can then save a ton of captures to a folder, record a Photoshop Action to mark the color, remove it, and save the images as PNGs without a background.

![Background](/img/vehicle/bkgd.jpg)
:::

## Capture Assets

When capturing assets in screenshots, use a program such as Windows Sniping Tool, Snag It, exporting to screenshot, etc for the best quality. Using PrintScreen options is not the highest resolution, just a quick option if you don't have another method. If using applications, you have tons of free and paid options available.

As mentioned before, try to use an isometric layout when capturing images for your bases. You can use any angle if you plan to carve up pieces for panels, additions, etc. Some things to watch out for are particle effects, as these can lead to problematic edits or lighting effects on armor.

:::sonceri Posing tip!
If you want to capture multiple colors of a model, select the animation, get the right angle you like, and pause! You can set this in WoWModelViewer (WMV) Animation panel and the Action menus in WoWTools and WoWHead. By pausing, you keep the exact same position for easier cutting of assets. Then you can stack the screenshots in graphics program, select or cut once, and capture asset pieces with multiple colors! 
:::

### WoWModelViewer

Make selections, select Pause. You can use the slider to shift the animation. Select each model color, taking a screenshot.

![Animations panel](/img/vehicle/animation.jpg)

### WoWTools site

Make selections, turn and set the model to a position, and press Spacebar to pause. Select each model color, taking a screenshot.

![Animations](/img/vehicle/animation-tools.jpg)

### WoWModelViewer

Select an Animation, select Pause. Select each model color, taking a screenshot.

![Animations panel](/img/vehicle/animation-wowhead.jpg)


## Cut Out Models

For models on a plain background, these methods can help you quickly cut the models free.

To remove the background, you have some options: **Select** > **Color Range...** and select colors using the eye dropper, use Lasso Tools like Polygone to select, or Erase Background Color. You may need to use a mix of these. I like Color Range and removing/adding to the selecting using the Polygonal tools.

You can cut out a model or cut sections of a model.

:::note Adobe Tools Tour
For a quick overview of Photoshop tools, see [this post](https://helpx.adobe.com/photoshop/using/tools.html#selection_tools_gallery) at Adobe.
:::

### Select Color Range

The easiest by far is Color Range:

1. Click **Select** > **Color Range...**
1. Click in the blue background with the eyedropper. The color you select will become white, indicating it will be selected (with the Selection option clicked in the preview). 
1. To add additional colors and shades, hold Shift and continue selecting with the eyedropper.
1. For **Fuzziness**, consider shifting it up to the 15-20 range if needed for the edge. WoW models will have a jagged edge in screenshots. If you see parts of the model shift from black, parts of the model are being selected.

    ![Clean](/img/vehicle/clean1.jpg)

1. Click **Ok** to see the selected sections. If it is exact, hit delect to clear the background. If you need to make additional edits, see the next sections.

### Select with Lasso Tools

You can select along the edges of models using a couple different Lasso Tools: Lasso, Polygon Lasso, and Magnetic Lasso. See [Adobe help](https://helpx.adobe.com/photoshop/using/selecting-lasso-tools.html) for detailed in on using all of these tools. The following examples use the Polygon Tool.

If you see glow effects, parts of the model selected, or funky edges, you can further edit the selection before clearing. For example, the steed has a glow effect causing issues just using Color Range. 

1. Select the Polygon Lasso Tool.
1. Hold Shift or select the ![add](/img/vehicle/select-add.jpg) Add option to add selections to a current selection, or to keep adding selections.

    ![Clean](/img/vehicle/clean2.jpg)

1. Hold Alt or select the ![subtract](/img/vehicle/select-sub.jpg) Subtract option to remove selections. If your hand is shakey, try holding Shift and use the Magic Wand tools. You want the edge to follow the model.
1. If some of your model is selected that you want to keep that content, use the Lasso Tools to unselect or removal selected content. This is extremely helpful when using **Color Range...** with WoWHead captures due to the background being shades of gray with black logos.

### Select with Wands

Another tool you can use is the Magic Wand and Quick Selection tools. 

* The Magic Wand works somewhat like the Color Selection, using thresholds to capture and select based on colors you click on.
* The [Quick Selection Tool](https://helpx.adobe.com/photoshop/using/making-quick-selections.html) automates the logic for finding and selecting an object based on the around you lasso around.

### Cut a Section of Models

Now that you can select entire models, use these tools and lessons to select only parts of the model. 

For example, we may want the armor from the Paladin mount, not the horse. We could use this armor for other mounts, people, and more! Selecting just the armor, cut and paste those selections (saving the original if you need it later). If you have multiple looks of model, you can select on each layer if the models line up. 

![Clean](/img/vehicle/clean3.jpg)

For this ship model, I captured tons of angles from external platforms of Mechagon (8du_mechagon_platforms01_2829591.wmo) and some from internal Mechagon dungeon (8du_13489.wmo) then layered them using different layouts of the content. They became walls, wings, some buildings turned into engines, caution tape was added to the wings, and some [effects](https://drive.google.com/drive/u/0/folders/19agWg3BSb-u4ilvRzTMZW5DhOgTa-XwP) for fire.

![Mecha](/img/vehicle/mecha-ship-assets.jpg)


![Mecha](/img/vehicle/mecha-ship.png)

:::sonceri Effects gallery
Need fireblasts, arcane domes, ghostly glows, different forms of magic for your creations? Check out the [effects gallery](https://drive.google.com/drive/u/0/folders/19agWg3BSb-u4ilvRzTMZW5DhOgTa-XwP) and this incredible [Effects PSD](https://drive.google.com/file/d/1q6u-MXOOr9rshs3p0Kquc5oLu58qo2pq/view?usp=sharing) put together by Maxen primarily with some extras from Sonceri.
:::