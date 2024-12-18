{ pkgs, modulesPath, ... }: {
    imports = [
        "${modulesPath}/installer/cd-dvd/installation-cd-minimal.nix"
    ];

    nixpkgs.hostplatform = "x86_64-linux";
    
}