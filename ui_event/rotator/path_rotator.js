/*
 * @author Daisuke Homma
 */

new function() { // block

an.PathRotator = function() {

  an.g.PathRotator = this;

  this.initialize();

};
var self = an.PathRotator;

// inherit from an.EventState;
self.prototype = new an.EventState();

self.prototype.select = function(e) {

  this.initialize();
  this.selectSelf();

}

self.prototype.deselect = function() {

  this.initialize();
  this.deselectSelf();

};

self.prototype.initialize = function() {

  an.g.editor.resetRotation();

  this.position = null;
  this.on = false;

}

self.prototype.hitTestHandle = function(e) {

  var position = an.u.getMousePositionInCanvas(e);
  var x = position.x;
  var y = position.y;

  var hitHandle = an.g.editor.isOnHandle(x, y);
  if(hitHandle) {
    this.position = hitHandle.position;
    this.on = true;
    return true;
  }

  return false;

}

self.prototype.hitTestPath = function(e) {

  var position = an.u.getMousePositionInCanvas(e);
  var x = position.x;
  var y = position.y;

  // hit test to select path
  var hitInfo = an.g.editor.isOnPath(x, y);
  if(hitInfo) {
    var hitPath = hitInfo.path;

    if( an.g.editor.isSelectedPath(hitPath) ) {

      an.g.editor.deselectPath(hitPath);

    } else {

      an.g.editor.selectPath(hitPath);

    }

    // update the path info pane
    an.g.pathInspectorView.update();

    // reset rotation
    an.g.editor.resetRotation();

    an.g.editor.draw();

    return true;
  }

  return false;

}

self.prototype.onMouseDown = function(e) {

  // hit and continue
  if( this.hitTestHandle(e) ) { return; }

  if( this.hitTestPath(e) ) { return; }

  // otherwise deselect
  an.g.editor.deselectAll();
  an.g.editor.draw();
  an.g.pathInspectorView.update();  // update the path info pane

}

self.prototype.onMouseMove = function(e) {

  if( !this.on ) { return; }

  this.rotatePath(e);

}

self.prototype.onMouseUp = function(e) {

  if( !this.on ) { return; }

  this.on = false;

};

self.prototype.rotatePath = function(e) {

  var mouse = an.u.getMousePositionInCanvas(e);
  var handles = an.g.editor.getRotateHandles();
  var p = this.position;

  // Center
  var cx = handles.x[an.k.C];
  var cy = handles.y[an.k.C];

  // mouse
  var mx = mouse.x;
  var my = mouse.y;

  // mouse angle
  var ma = Math.atan2(my - cy, mx - cx);

/*
  an.g.editor.rotateSelectedPaths(cx, cy, ma);
*/

  // hit handle
  var hx = handles.x[p];
  var hy = handles.y[p];

  // hit handle angle
  var ha = Math.atan2(hy - cy, hx - cx);

//  console.log("p: " + p + " ma: " + ma + " ha: " + ha);

  an.g.editor.rotateSelectedPaths(cx, cy, ma - ha);

  an.g.editor.draw();

};

} // block
