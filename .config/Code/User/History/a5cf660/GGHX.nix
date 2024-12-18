{pkgs ? import <nixpkgs> { } }:

pkgs.mkshell {
    nativeBuildInputs = with pkgs; [
        python311Full
    ];
}