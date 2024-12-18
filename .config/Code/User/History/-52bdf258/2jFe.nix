{pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation {
  name = "sddm-theme";
  src = pkgs.fetchFromGitHub {
    owner = "YaroslavPanasiuk";
    repo = "sddm-panas";
    rev = "50255ab0bebf16b4c991a8fd96334bcbe5762b98";
    sha256 = "1l4ip7fvg52icya7qf5qd0f1m7v00f8hxvcch8p8rljszvjr10kc";
  };
  installPhase = ''
    mkdir -p $out
    cp -R ./* $out/
  '';
}
