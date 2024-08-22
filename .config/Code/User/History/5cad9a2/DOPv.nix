# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, pkgs, ... }:
{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
	<home-manager/nixos>
    ];

  # Bootloader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  boot.extraModprobeConfig = ''
    options snd slots=snd-hda-intel
  '';
  networking.hostName = "nixos"; # Define your hostname.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Enable networking
  networking.networkmanager.enable = true;

  # Set your time zone.
  time.timeZone = "Europe/Kyiv";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";

  i18n.extraLocaleSettings = {
    LC_ADDRESS = "uk_UA.UTF-8";
    LC_IDENTIFICATION = "uk_UA.UTF-8";
    LC_MEASUREMENT = "uk_UA.UTF-8";
    LC_MONETARY = "uk_UA.UTF-8";
    LC_NAME = "uk_UA.UTF-8";
    LC_NUMERIC = "uk_UA.UTF-8";
    LC_PAPER = "uk_UA.UTF-8";
    LC_TELEPHONE = "uk_UA.UTF-8";
    LC_TIME = "uk_UA.UTF-8";
  };

  # Enable the X11 windowing system.
  services.displayManager.sddm = {
	wayland.enable = true;
	enable = true;
	theme = "${import ./sddm-theme.nix {inherit pkgs;}}";
  };

  # Configure keymap in X11
  services.xserver = {
    layout = "us";
    xkb.variant = "";
  };
  services.xserver = {
  enable = true;
    desktopManager.gnome.enable = true;
    #desktopManager.gtk = {
    #enable = true;
    #theme = "Adwaita";
    #iconTheme = "kora";
  #};
  };
  # Enable CUPS to print documents.
  services.printing.enable = true;

  # Enable sound with pipewire.
  hardware.pulseaudio.enable = false;
  security.rtkit.enable = true;
  sound.enable = true;
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    jack.enable = true;
    # If you want to use JACK applications, uncomment this
    #jack.enable = true;

    # use the example session manager (no others are packaged yet so this is enabled by default,
    # no need to redefine it in your config for now)
    #media-session.enable = true;
  };

  # Enable touchpad support (enabled default in most desktopManager).
  # services.xserver.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.yaros = {
    isNormalUser = true;
    description = "Yaroslav Panasiuk";
    extraGroups = [ "networkmanager" "wheel" "input" "libvirtd"];
    packages = with pkgs; [
    #  thunderbird
    ];
  };

  security.sudo.configFile = "yaros ALL=(ALL) NOPASSWD: ALL";

  # Enable automatic login for the user.
  #services.xserver.displayManager.autoLogin.enable = true;
  #services.xserver.displayManager.autoLogin.user = "yaros";

  # Workaround for GNOME autologin: https://github.com/NixOS/nixpkgs/issues/103746#issuecomment-945091229
  #systemd.services."getty@tty1".enable = false;
  #systemd.services."autovt@tty1".enable = false;

  # Install firefox.
  programs.firefox.enable = true;

  # Allow unfree packages
  nixpkgs.config.allowUnfree = true;
  
  services.flatpak.enable = true;
  
  programs.git = {
    enable = true;
    userName  = "YaroslavPanasiuk";
    userEmail = "yaroslav.panasiuk@lnu.edu.ua";
  };
  
  programs.hyprland.enable = true;

  programs.dconf.enable = true;

  programs.thunar.enable = true; 
  programs.xfconf.enable = true;
  programs.thunar.plugins = with pkgs.xfce; [
	thunar-archive-plugin
	thunar-media-tags-plugin
	thunar-volman
  ];
  services.gvfs.enable = true;
  services.tumbler.enable = true;
  virtualisation = {
    libvirtd = {
      enable = true;
      qemu = {
        swtpm.enable = true;
        ovmf.enable = true;
        ovmf.packages = [ pkgs.OVMFFull.fd ];
      };
    };
    spiceUSBRedirection.enable = true;
  };
  services.spice-vdagentd.enable = true;
  
  programs.nix-ld.enable = true;
  programs.nix-ld.libraries = with pkgs; [
  	stdenv.cc.cc.lib
  	zlib
  ];
  
  #xdg.portal.enable = true;

  hardware.opengl = {
  	enable = true;
	  driSupport32Bit = true;
	  extraPackages = [pkgs.intel-compute-runtime];
  };


  # xdg.portal.extraPortals = [pkgs.xdg-desktop-portal-gtk];
  
  #programs.steam = {
  #	enable = true;
  #	remotePlay.openFirewall = true; # Open ports in the firewall for Steam Remote Play
 #	dedicatedServer.openFirewall = true; # Open ports in the firewall for Source Dedicated Server
 #	localNetworkGameTransfers.openFirewall = true; # Open ports in the firewall for Steam Local Network Game Transfers
  #};

  #services.bluetooth.enable = true;
  services.blueman.enable = true;


  services.samba = {
  enable = true;
  securityType = "user";
  openFirewall = true;
  extraConfig = ''
    workgroup = WORKGROUP
    server string = smbnix
    netbios name = smbnix
    security = user 
    #use sendfile = yes
    #max protocol = smb2
    # note: localhost is the ipv6 localhost ::1
    hosts allow = 192.168.0. 127.0.0.1 localhost
    hosts deny = 0.0.0.0/0
    guest account = nobody
    map to guest = bad user
  '';
  shares = {
    public = {
      path = "/home/yaros/share";
      browseable = "yes";
      "read only" = "no";
      "guest ok" = "yes";
      "create mask" = "0644";
      "directory mask" = "0755";
      "force user" = "username";
      "force group" = "groupname";
    };
  };
};

services.samba-wsdd = {
  enable = true;
  openFirewall = true;
};

networking.firewall.enable = true;
networking.firewall.allowPing = true;


  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
	obsidian
	jetbrains.pycharm-community
	onlyoffice-bin
	obs-studio
 #  vim # Do not forget to add an editor to edit configuration.nix! The Nano editor is also installed by default.
  	wget
  	flatpak
  	telegram-desktop
  	appimage-run
  	snapcraft
  	vlc
  	home-manager
	python3Full
  	python3
  	apt
  	nix-index
	sublime
  	qimgv
	brightnessctl	
	kdePackages.kdenlive
	xdotool
	pywal
	glib
	gvfs
	wofi
  iproute2
  libosinfo
  curl
	file
  samba
  qemu
  remmina
  #davinci-resolve
  libvirt
  virt-manager  # Optional, for managing VMs with a GUI
  OVMF 
  (pkgs.writeShellScriptBin "qemu-system-x86_64-uefi" ''
        qemu-system-x86_64 \
        -bios ${pkgs.OVMF.fd}/FV/OVMF.fd \
        "$@"
  '')
  virt-viewer
  spice
  spice-gtk
  spice-protocol
  win-virtio
  win-spice
  quickemu
	xfce.catfish
	xfce.exo
	libxml2
	libxslt
	fd
  lxappearance
	zip
	imagemagick
	ghostscript
	libsForQt5.qt5.qtquickcontrols2
	libsForQt5.qt5.qtgraphicaleffects
	bc
	xorg.xkill
	xorg.xauth
	pinentry-gtk2
	gnum4
	parted
	pandoc
	gettext
	python311Packages.lxml	
	python312Packages.lxml
	gparted
	vscode
	gnupg
	gtk3
	xwayland
	gtk4
  wpgtk
	gnome-multi-writer
	waybar
	map-cmd
	pavucontrol
	nm-tray
	killall
  blueman
  gnome.gnome-power-manager
  hyprshot
  xorg.xrdb
  networkmanagerapplet
	gammastep
	lxqt.lxqt-policykit
	geoclue2  
	(waybar.overrideAttrs(oldAttrs: {mesonFlags = oldAttrs.mesonFlags ++ ["-Dexperimental=true"];}))
  dunst
  ] ++ [
  	libnotify
  	swww
	  rofi-wayland
  	kitty
  ];
  
  nix.settings.experimental-features = [ "nix-command" "flakes" ];

  fonts.fontconfig.enable = true;
  fonts.packages = with pkgs; [
	noto-fonts
	noto-fonts-cjk
	noto-fonts-emoji
	liberation_ttf
	fira-code
	fira-code-symbols
	mplus-outline-fonts.githubRelease
	dina-font
	proggyfonts
	font-awesome
	nerdfonts
  ]; 

  environment.gnome.excludePackages = (with pkgs; [
    gnome-photos
    gnome-tour
  ]) ++ (with pkgs.gnome; [
    cheese # webcam tool
    gnome-music
    gnome-terminal
#    gedit # text editor
    epiphany # web browser
    geary # email reader
    evince # document viewer
    gnome-characters
    totem # video player
    tali # poker game
    iagno # go game
    hitori # sudoku game
    atomix # puzzle game
    nautilus
]);

  # Some programs need SUID wrappers, can be configured further or are started in user sessions.
   programs.mtr.enable = true;
   programs.gnupg.agent = {
     enable = true;
     enableSSHSupport = true;
   };

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "unstable"; # Did you read the comment?

}
