{ pkgs, lib, config, modulesPath, inputs, ... }:
{
  imports = [
    "${toString modulesPath}/installer/cd-dvd/iso-image.nix"
  ];

  # EFI booting
  isoImage.makeEfiBootable = true;

  # USB booting
  isoImage.makeUsbBootable = true;
}