{
  description = "Home Manager configuration of yaros";

  inputs = {
    # Specify the source of Home Manager and Nixpkgs.
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    hyprland.url = "github:hyprwm/Hyprland";
  };

  outputs = { nixpkgs, home-manager, hyprland, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      homeConfigurations."yaros" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;

        # Specify your home configuration modules here, for example,
        # the path to your home.nix.
        modules = [ 
          {
            wayland.windowManager.hyprland = {
              enable = true;
              # set the flake package
              package = inputs.hyprland.packages.${pkgs.stdenv.hostPlatform.system}.hyprland;
            };
          }
          ./home.nix 
          ];

        # Optionally use extraSpecialArgs
        # to pass through arguments to home.nix
      };
    };
}