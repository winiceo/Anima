/*
 * @author Daisuke Homma
 */

new function() { // block

var self = an.PathInspector;

/// fill color /////////////////////////////////////////////////////////////////

self.prototype.setFillHue = function(e) {

  var h = e.target.valueAsNumber;

  var paths = an.g.editor.getSelectedPaths();
  for(var i = 0; i < paths.length; i++) {
    paths[i].getFillColor().setHue(h);
  }

  an.g.pathInspectorView.update();
  an.g.editor.draw();

}

self.prototype.setFillSaturation = function(e) {

  var s = e.target.valueAsNumber;

  var paths = an.g.editor.getSelectedPaths();
  for(var i = 0; i < paths.length; i++) {
    paths[i].getFillColor().setSaturation(s);
  }

  an.g.pathInspectorView.update();
  an.g.editor.draw();

}

self.prototype.setFillLuminance = function(e) {

  var l = e.target.valueAsNumber;

  var paths = an.g.editor.getSelectedPaths();
  for(var i = 0; i < paths.length; i++) {
    paths[i].getFillColor().setLuminance(l);
  }

  an.g.pathInspectorView.update();
  an.g.editor.draw();

}

self.prototype.setFillAlpha = function(e) {

  var a = e.target.valueAsNumber;

  var paths = an.g.editor.getSelectedPaths();
  for(var i = 0; i < paths.length; i++) {
    paths[i].getFillColor().setAlpha(a);
  }

  an.g.pathInspectorView.update();
  an.g.editor.draw();

}

self.prototype.setFillColorFromView = function() {

  var h = this.getValue("fill_hue_slider");
  var s = this.getValue("fill_sat_slider");
  var l = this.getValue("fill_lum_slider");
  var a = this.getValue("fill_alp_slider");

  this.setFillColor(h, s, l, a);

}

self.prototype.setFillColor = function(h, s, l, a) {

  var paths = an.g.editor.getSelectedPaths();
  for(var i = 0; i < paths.length; i++) {
    paths[i].getFillColor().setHue(h);
    paths[i].getFillColor().setSaturation(s);
    paths[i].getFillColor().setLuminance(l);
    paths[i].getFillColor().setAlpha(a);
  }

  an.g.pathInspectorView.update();
  an.g.editor.draw();
}

} // block

