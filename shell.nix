# Import nixpkgs under the local binding pkgs to be able to use stdenv
# and callPackage.
let
  pkgs = import <nixpkgs> {};
in
pkgs.stdenv.mkDerivation {
  name = "freerouting-nix";
  buildInputs = [ (pkgs.callPackage ./freerouting {}) ];
  }
