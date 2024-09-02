#!/usr/bin/perl -w
use POSIX;

# Simple linear track generator for SAMURAI
# By Michael Bell
# 04/2011
#
# This program will generate a linear frame of reference from the parameters listed below.
# In the given example, the frame is centered on 18N, 150E at 040000 UTC on 2008-09-19,
# moving westward at 4 m/s with a data window of 6 hours starting at 00000 UTC.
# Modify the parameters to suit your particular case as needed.

$lat_origin = 47; # Latitude of reference frame at origin time
$lon_origin = -20;  # Longitude of reference frame at origin time
$u = 1; # U storm motion (m/s)
$v = 1; # V storm motion (m/s)
$ymd = "20110522"; # YYYYMMDD of initial time
$hr = 03; # Initial hour of track
$min = 20; # Initial minute of track
$sec = 03; # Initial second of track
$duration = 1080; # Duration of track in seconds
$origintime = 15; # Time when the frame is at the lat and lon origin in seconds from initial HMS

# No need to modify the code beyond this point
$cenfile = $ymd.".cen";
open(OUT, ">$cenfile") or die "Couldn't write to $cenfile:$!\n";
$pi = acos(-1.);
for $i (1 .. $duration) {
  $sec++;
  if ($sec == 60) {
    $min++;
    $sec = 0;
    if ($min == 60) {
      $hr++;
      $min = 0
    }
  }
  if ($sec < 10) { 
    $printsec = "0".$sec; 
  } else {
    $printsec = $sec;
  }
  if ($min < 10) { 
    $printmin = "0".$min;
  } else {
    $printmin = $min;
  }
  if ($hr < 10) {
    $printhr = "0".$hr;
  } else {
    $printhr = $hr;
  }
  $timestr = $printhr.$printmin.$printsec;

  $latrad = $lat_origin * $pi/180.0;
  $fac_lat = 111.13209 - 0.56605 * cos(2.0 * $latrad)
    + 0.00012 * cos(4.0 * $latrad) - 0.000002 * cos(6.0 * $latrad);
  $fac_lon = 111.41513 * cos($latrad)
    - 0.09455 * cos(3.0 * $latrad) + 0.00012 * cos(5.0 * $latrad);
  $xc = ($u*($i-$origintime))/1000;
  $yc = ($v*($i-$origintime))/1000;
  $tclon = $lon_origin + $xc/$fac_lon;
  $tclat = $lat_origin + $yc/$fac_lat;
  
  print OUT "$timestr $tclat $tclon $v $u\n";
  
}
 
close(OUT);
print "Center file generated.\n";
