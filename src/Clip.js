/*jslint browser: true, undef: true *//*global Ext*/
/*!
 * ext.zeroclipboard
 * An ExtJS6 wrapper for ZeroClipboard. The [ZeroClipboard](http://zeroclipboard.org/) library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2016 Idealogy Labs
 * Licensed MIT
 * v1.0.0
 */
Ext.define('zeroclipboard.Clip', {
  extend: 'Ext.Button',
  alias: 'widget.clipcopy',

  /**
   * Overrides `afterRender` function to inject ZeroClipboard into `Ext.Button`
   */
  afterRender: function(t, eOpts) {
    var _self = this;
    _self.callParent(arguments);
    if((typeof ZeroClipboard) === 'function'){
      _self.initClip();
    }else{
      console.error( 'ZeroClipboard can not be loaded. ZeroClipboard can not be initialized' );
    }
  },

  /**
   * Initializes clip around component id by initializing ZeroClipboard
   */
  initClip: function() {
    var _self = this, clip;
    clip = new ZeroClipboard( document.getElementById(this.id) );

    clip.on( "ready", function( readyEvent ) {
      console.info( "ZeroClipboard is ready for use!" );
      clip.on( "copy", function (event) {
        var clipboard = event.clipboardData;
        clipboard.setData( "text/plain", _self.getClip() );
      });
    } );
  },

  /**
   * Calls parent class on resize
   */
  onResize: function(w, h, oW, oH){
    this.callParent(arguments);
  },

  /**
   * Exposes values to be copied to clipboard
   */
  getClip: function() {
    return this.value;
  }
});
