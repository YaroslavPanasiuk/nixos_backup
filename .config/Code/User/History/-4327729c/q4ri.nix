{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    buildInputs = [
        pkgs.python311
        pkgs.python311Packages.pandas
        python311Packages.python-telegram-bot
        
    ];
}