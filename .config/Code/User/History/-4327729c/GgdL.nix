{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    buildInputs = [
        python = pkgs.python311;
        pandas = pkgs.python311Packages.pandas
    ];
}