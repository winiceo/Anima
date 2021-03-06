/*
 * @author Daisuke Homma
 */

new function() {  // block

// mouseUp state

an.CurveCreatorHoverState = function(obj) {
  this.stateObj = obj;
};
var self = an.CurveCreatorHoverState;

// inherit from an.EventState;
self.prototype = new an.EventState();

self.prototype.onMouseDown = function(e) {

  if(e.button == 2) {
    this.onRightMouseDown(e);
  } else {
    this.onLeftMouseDown(e);
  };

};

self.prototype.onLeftMouseDown = function(e) {

  var position = an.u.getMousePositionInCanvas(e);
  var x = position.x;
  var y = position.y;

  var curve = this.stateObj.getCurve();
  curve.setAnchorPointOne(x, y);
  curve.setControlPointOne(x, y);

  var nextCurve = new an.Curve();
  nextCurve.setAnchorPointZero(x, y);

  this.stateObj.setNextCurve(nextCurve);

  var path = an.g.editor.getNewPath();
  path.addEdge(nextCurve);

  this.selectNextState(this.stateObj.state.dragging);

};

self.prototype.onRightMouseDown = function(e) {

  var position = an.u.getMousePositionInCanvas(e);
  var x = position.x;
  var y = position.y;

  var curve = this.stateObj.getCurve();
  curve.setAnchorPointOne(x, y);
  curve.setControlPointOne(x, y);

  this.selectNextState(this.stateObj.state.finishing);

};

self.prototype.onMouseMove = function(e) {

  var position = an.u.getMousePositionInCanvas(e);
  var x = position.x;
  var y = position.y;

  var curve = this.stateObj.getCurve();
  curve.setAnchorPointOne(x, y);
  curve.setControlPointOne(x, y);

  an.g.editor.draw();

};

self.prototype.onDblClick = function(e) {

  var position = an.u.getMousePositionInCanvas(e);
  var x = position.x;
  var y = position.y;

  var path = an.g.editor.getNewPath();

  // double click => additional two curves...
  path.removeLastEdge();
  path.removeLastEdge();

  path.finished();
  an.g.editor.addPath(path);
  an.g.editor.setNewPath(null);

  this.selectNextState(this.stateObj.state.initial);

};

} // block
