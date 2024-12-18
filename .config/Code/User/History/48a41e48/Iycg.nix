{ config, pkgs, ... }:


{
  nixpkgs = {
    config = {
      allowUnfree = true;
      allowUnfreePredicate = (_: true);
    };
  };
  # Home Manager needs a bit of information about you and the paths it should
  # manage.
  home.username = "yaros";
  home.homeDirectory = "/home/yaros";

  # This value determines the Home Manager release that your configuration is
  # compatible with. This helps avoid breakage when a new Home Manager release
  # introduces backwards incompatible changes.
  #
  # You should not change this value, even if you update Home Manager. If you do
  # want to update the value, then make sure to first check the Home Manager
  # release notes.
  home.stateVersion = "23.11"; # Please read the comment before changing.

  # The home.packages option allows you to install Nix packages into your
  # environment.
  home.packages = with pkgs;[
    davinci-resolve
  ];

  # Home Manager is pretty good at managing dotfiles. The primary way to manage
  # plain files is through 'home.file'.
  home.file = {

  };

  home.sessionVariables = {
    # EDITOR = "emacs";
  };

  #wayland.windowManager.hyprland = {
  #  plugins = [
  #      inputs.hyprgrass.packages.${pkgs.system}.default
  #  ];
  #};

  gtk = {
    theme = {
      name = "Gruvbox-Dark";
      package = pkgs.gruvbox-gtk-theme;
    };
	  cursorTheme = {
		  name = "volantes_cursors";
		  package = pkgs.volantes-cursors;
	  };
	  iconTheme = {
		  name = "kora";
		  package = pkgs.kora-icon-theme;
	  };
    gtk3.extraConfig.gtk-application-prefer-dark-theme = 1;
    gtk4.extraConfig.gtk-application-prefer-dark-theme = 1;
  };

  dconf.enable = true;
  dconf.settings = {
    "org/virt-manager/virt-manager/connections" = {
      autoconnect = ["qemu:///system"];
      uris = ["qemu:///system"];
    };
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
