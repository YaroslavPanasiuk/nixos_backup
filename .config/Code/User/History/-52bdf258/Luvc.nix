{pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation {
  name = "sddm-theme";
  src = pkgs.fetchFromGitHub {
    owner = "YaroslavPanasiuk";
    repo = "sddm-panas";
    
  };
  installPhase = ''
    mkdir -p $out
    cp -R ./* $out/
  '';
}
