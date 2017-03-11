# ZeroClipBoard - Read Me

An ExtJS6 wrapper for ZeroClipboard. The [ZeroClipboard](http://zeroclipboard.org/) library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.

[Github](https://github.com/zeroclipboard/zeroclipboard)

## Usage
1.  Clone ZeroClipBoard repository into `${workspace.dir}/packages/local` or `${app.dir}/packages/local`
2.  Add `"ext.zeroclipboard"` to the `"requires"` array in `${app.dir}/app.json`
3.  Add `"ext.zeroclipboard.Clip"` to `requires` array in your Ext JS classes that use the `ZeroClipBoard` xtype
4. use `clipcopy` xtype while passing control argument

### Options

Refer [ZeroClipBoard docs](https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/api/ZeroClipboard.md) most of control options can be passed with xtype

### Example

Here is minimal example

````
  {
    xtype: 'clipcopy',
    text: 'Copy',
    getClip: function() { return "Text to be copied" }
  }
````


