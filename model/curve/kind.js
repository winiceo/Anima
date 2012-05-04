/*
 * @author Daisuke Homma
 */

new function() { // block

var self = Anima.Curve;

// determins the kind of this curve

/// case one : a dot ///////////////////////////////////////////////////////////

self.prototype.isDot = function() {

  return ( this.isVerticallyAligned() && this.isHorizontallyAligned() );

}

/// case two : a vertical line /////////////////////////////////////////////////

self.prototype.isVerticalLine = function() {

  return ( (! this.isHorizontallyAligned() ) && this.isVerticallyAligned() );

}

self.prototype.isVerticallyAligned = function() {

  // all the x-values are same?
  var xarr = [ this.cp0x, this.p1x, this.cp1x ];
  return xarr.every( function(v) { return (v == this.p0x) } );

}

/// case three : a horizontal line /////////////////////////////////////////////

self.prototype.isHorizontalLine = function() {

  return ( this.isHorizontallyAligned() && (! this.isVerticallyAligned() ) );

}

self.prototype.isHorizontallyAligned = function() {

  // all the y-values are same?
  var yarr = [ this.cp0y, this.p1y, this.cp1y ];
  return yarr.every( function(v) { return (v == this.p0y) } );

}

/// case four : a line /////////////////////////////////////////////////////////

self.prototype.isLine = function() {

  if( this.isDot() ) { return false; }

  if( (this.p0x == this.cp0x) &&
      (this.p0y == this.cp0y) &&
      (this.p1x == this.cp1x) &&
      (this.p1y == this.cp1y) ) {

    return true;

  }

  return false;

}

/// case five : a curve ////////////////////////////////////////////////////////

self.prototype.isCurve = function() {

  if( this.isDot() ) { return false; }
  if( this.isLine() ) { return false; }

  // otherwise
  return true;

}

} // block
