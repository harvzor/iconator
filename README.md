Iconator
==
_Property editor for Umbraco 7._

Iconator is a custom data type that allows an editor to select a class for a custom icon from a CSS file, but in a visual way. The class name is saved into the property value which can then be used in your view. This is useful because font files can be used for icons rather than selecting an image.

This is a fork of https://github.com/marcemarc/monosnow.umbraco.uCssClassNameDropdown, partially redesigned to work seamlessly in Umbraco 7.

## Requirements

- Umbraco 7.4 or later (or use the umbraco7.0 branch)

## Known bugs

Umbraco uses icon classes of style "icon-{{class-name}}". If you name one of your icon classes the same as any of the icons in Umbraco, your icon will replace them.

## How to install

You can watch a video which shows installation and setup: https://www.youtube.com/watch?v=5AIyf7w47K0

### Using NuGet (recommended)

In Visual Studio, open up the Package Manager Console and type the following:

```install-package Umbraco.Iconator <project name>```

### Using the Umbraco package manager

Umbraco has a package manager built into it.

1. Navigate to the Developer section of Umbraco
2. Click on the packages item in the Tree
3. Search for Iconator, click on the relevent result
4. Click install

### Using the Umbraco package manually

If you prefer, you can upload a ZIP into Umbraco and it will install the package for you.

1. Head to https://our.umbraco.org/projects/backoffice-extensions/iconator/
2. Download the package
3. Navigation to the Developer section of Umbraco
4. Click on the packages item in the Tree
5. Upload the ZIP and install

### Manually

1. Download a ZIP of this repository
2. Unzip the ZIP
3. Navigate to /content/App_Plugins/
4. Copy the Iconator folder to the /App_Plugins/ folder of your Umbraco website

## How to setup

You have to manually create the data type in Umbraco yourself.

1. In the Umbraco backoffice, navigate to the Developer section
2. Start creating a new Data Type the the "Property editor" set to "Iconator"
3. Input the path to your stylesheet
4. Input a class name regex
5. (optional) Input any other fields
6. Set the name of this data type, "Icon Picker" should do
7. Save!
8. Add this new data type to a document type in the settings section
9. Donezo!

## Screenshots

Editing the data type:

![Icon Picker Data Type](https://github.com/HarveyWilliams/Iconator/blob/umbraco7.4/screenshots/IconPickerDataType.png "Icon Picker Data Type")

Using the data type in Umbraco:

![Icon Picker Dialog](https://github.com/HarveyWilliams/Iconator/blob/umbraco7.4/screenshots/IconPickerDialog.png "Icon Picker Dialog")

## Contributing

If you have any suggestions on how to make this package better, please use the issue tracker or make amendments to the code. I'll try my best to keep this repo up to date.

### On Our Umbraco

Head to https://our.umbraco.org/projects/backoffice-extensions/iconator/ and report compatibility with any Umbraco versions you have tested on.

Vote for the package if you like it. ;)

### Bugs

If you find any bugs, please use the issue tracker on GitHub to report it!

### Making changes

Feel free to contribute to this package by making changes to any of the files in the repository.

You can optionally use Gulp when making changes to the files. The Gulp file is setup to move the files from the ./content/ folder to your Umbraco installation. Just update the config.json file with a path to your Umbraco installation and run gulp. Any changes you make will be copied to your installation.
