Iconator
==
_Property editor for Umbraco 7._

Iconator is a custom data type that allows an editor to select a class for a custom icon from a CSS file, but in a visual way. The class name is saved into the property value which can then be used in your view. This is useful because font files can be used for icons rather than selecting an image.

This is a fork of https://github.com/rhythmagency/rhythm.umbraco7.font-awesome-icon-picker except it allows you to use any icons from a custom CSS file. The UI has also been updated to seamlessly integrate with Umbraco 7.

## How to install

### Using NuGet

In Visual Studio, open up the Package Manager Console and type the following:

```install-package Umbraco.Iconator <project name>```

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
