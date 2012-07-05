/*
 * @author Daisuke Homma
 */

new function() { // block

an.PathInspector = function() {

  this.currentPathOps = null;

  this.createEventObjects();
  this.setPathOps( an.g.CurveModifier );

  an.g.PathInspector = this;

}
var self = an.PathInspector;

self.prototype.createEventObjects = function() {

  new an.PathMover();
  new an.PathResizer();
  new an.PathRotator();
  new an.PointRemover();
  new an.CurveModifier();
  new an.PathConnector();

}

} // block

