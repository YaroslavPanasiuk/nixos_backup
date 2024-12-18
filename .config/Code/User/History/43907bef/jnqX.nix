{ pkgs, modulesPath, ... }: {

    nixpkgs.hostplatform = "x86_64-linux";

    imports = [
        "${modulesPath}/installer/cd-dvd/installation-cd-minimal.nix"
    ];
}