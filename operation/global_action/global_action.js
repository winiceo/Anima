/*
 * @author Daisuke Homma
 */

// Global Actions

new function() {  // block

an.GlobalAction = function() {

  an.g.GlobalAction = this;

};
self = an.GlobalAction;

self.prototype.selectAll = function() {

  an.g.editor.selectAll();
  an.g.editor.draw();

}

self.prototype.clear = function() {

  an.g.editor.deleteAll();
  an.g.editor.draw();

}

self.prototype.deleteSelected = function() {

  an.g.editor.deleteSelected();
  an.g.editor.draw();

}

self.prototype.cut = function() {

  an.g.editor.cut();
  an.g.editor.draw();

}

self.prototype.copy = function() {

  an.g.editor.copy();
  an.g.editor.draw();

}

self.prototype.paste = function() {

  an.g.editor.paste();
  an.g.editor.draw();

}

self.prototype.undo = function() {
  an.g.undoManager.undo();
  an.g.editor.draw();
}

self.prototype.redo = function() {
  an.g.undoManager.redo();
  an.g.editor.draw();
}

self.prototype.save = function() {

  localStorage.setItem("an.save", an.g.Exporter.export() );

}

self.prototype.restore = function() {

  var dat = localStorage.getItem("an.save");
  // localStorage.clear();

  if(dat == null) return;

  var obj = JSON.parse(dat);

  an.g.Importer.import(obj);

  an.g.editor.draw();
  an.g.TrackView.updateView();

}

} // block end

