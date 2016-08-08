# Sketch icon-font

Grunt based workflow to create an icon-font from a Sketch file.

![screen recording](https://cloud.githubusercontent.com/assets/7649376/17498025/031f4dc6-5dc5-11e6-8a7d-5d93476fbdde.gif)

## Installation

Install [SketchTool](http://www.sketchapp.com/tool/) (Sketch command line tool) to be able to export slices from your Sketch file. Then install grunt and some plugins using:

```bash
npm install
```

## Create icon-font from sketch file

Design your icons in the Sketch file on the 24x24 grid and create slices (svg) for each icon you want to include in your icon-font. Notice that you should keep at least a 3px padding in order to account for ascents and descents.

```bash
npm run create-font
```

## Upload icon font to S3 bucket

You can also optionally upload your icon font to an AWS S3 bucket to integrate it in your web-development workflow. For that you need to create a `aws-keys.json` file in the root of this project like this:

```json
{
  "AWSAccessKeyId": "AKxxxxxxxxxx",
  "AWSSecretKey": "super-secret-key"
}
```
