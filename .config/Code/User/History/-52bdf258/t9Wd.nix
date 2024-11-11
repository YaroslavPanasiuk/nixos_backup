{pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation {
  name = "sddm-theme";
  src = pkgs.fetchFromGitHub {
    owner = "YaroslavPanasiuk";
    repo = "sddm-panas";
    rev = "d87fdba245a64616c171b0b9b24fd238fb4df4d0";
    sha256 = "158ihpzlk5d6jyk6fljm50v8g2fdx215ng2vm81lw11d7msl10y6";
  };
  installPhase = ''
    mkdir -p $out
    cp -R ./* $out/
  '';
}
