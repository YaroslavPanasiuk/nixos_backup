{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    python = pkgs.python311;
    pandas = pkgs.python311Packages.pandas
}