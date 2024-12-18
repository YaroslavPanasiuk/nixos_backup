{
  inputs.nixpkgs.url = github:NixOS/nixpkgs/nixos-unstable;

  outputs = { nixpkgs, ... }@inputs:
    {
      nixosConfigurations = {

        default = nixpkgs.lib.nixosSystem {
          specialArgs = { inherit inputs; };
          modules = [
            ./hosts/primary/configuration.nix
          ];
        };

        exampleIso = nixpkgs.lib.nixosSystem {
          specialArgs = { inherit inputs; };
          modules = [
            ./hosts/isoImage/configuration.nix
          ];
        };

      };
    };
}