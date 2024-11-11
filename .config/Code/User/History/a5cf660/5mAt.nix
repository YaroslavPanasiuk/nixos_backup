{pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
    nativeBuildInputs = with pkgs; [
        pkgs.poetry
        (pkgs.poetry2nix.mkPoetryEnv {
            python = pkgs.python311;  # Choose the Python version
            poetryLock = ./poetry.lock;
        })
    ];
}