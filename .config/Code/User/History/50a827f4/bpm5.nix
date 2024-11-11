{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = [
    pkgs.gn
    pkgs.ninja
    pkgs.clang
    pkgs.nodejs
    pkgs.python3
    pkgs.pkg-config
    pkgs.libp11
    pkgs.alsaLib
    pkgs.ffmpeg
    pkgs.dbus
    pkgs.fontconfig
    pkgs.gperf
    pkgs.yasm
  ];
}
