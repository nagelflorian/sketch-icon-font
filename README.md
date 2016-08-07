# Sketch icon-font

Grunt based workflow to create an icon-font from a Sketch file.

## Installation

Install [SketchTool](http://www.sketchapp.com/tool/) (Sketch command line tool) to be able to export slices from your Sketch file.

Install grunt and dependencies:

```bash
npm install
```

### Create icon-font from sketch file

```bash
npm run create-font
```

### Upload icon font to AWS s3 bucket

You can also optionally upload your icon font to an AWS S3 bucket to integrate it in your web-development workflow. For that you need to create a `aws-keys.json` file in the root of this project like this:

```json
{
  "AWSAccessKeyId": "AKxxxxxxxxxx",
  "AWSSecretKey": "super-secret-key"
}
```
