let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs { };
  poetry2nix = import sources.poetry2nix { inherit pkgs; };
  myPythonApp = poetry2nix.mkPoetryApplication { projectDir = ./.; };
in
custatbot