{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let
  freerouting = callPackage ./freerouting {};
in
mkShell {
  name = "keeb-utils";
  buildInputs = [
    nodejs
    python3
    freerouting
    zip # for export script
  ];
  shellHook = ''
    npm install
  '';
}
