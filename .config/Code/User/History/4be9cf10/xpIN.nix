{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-23.11") {} }:

pkgs.mkShellNoCC {
  packages = with pkgs; [
    jupyter-all
    python311Packages.langchain
    python311Packages.pandas
    python311Packages.jupyter-core
  ];
}