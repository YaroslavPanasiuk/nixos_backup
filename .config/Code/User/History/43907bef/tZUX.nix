{ pkgs, modulesPath, ... }: {

  imports = [
    "${modulesPath}/installer/cd-dvd/installation-cd-minimal.nix"
  ];

  nixpkgs.hostPlatform = "x86_64-linux";

  boot.initrd.systemd.dbus.enable = true;
  boot.loader.systemd-boot.enable = true;
  services.dbus.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  systemd.packages = [ pkgs.libinput-gestures ];
  boot.extraModulePackages = [ pkgs.linuxPackages.v4l2loopback ];
  boot.kernelModules = [ "v4l2loopback" "binder_linux" "ashmem_linux" ];

  boot.kernelParams = [ "systemd.unified_cgroup_hierarchy=1" ];
  boot.binfmt.registrations.appimage = {
    wrapInterpreterInShell = false;
    interpreter = "${pkgs.appimage-run}/bin/appimage-run";
    recognitionType = "magic";
    offset = 0;
    mask = ''\xff\xff\xff\xff\x00\x00\x00\x00\xff\xff\xff'';
    magicOrExtension = ''\x7fELF....AI\x02'';
  };


  time.timeZone = "Europe/Kyiv";
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

  services.displayManager.sddm = {
    wayland.enable = true;
    enable = true;
    #theme = "${import ./sddm-theme.nix {inherit pkgs;}}";
  };

  security.wrappers.fusermount = {
    source = "${pkgs.fuse}/bin/fusermount";
    setuid = true;
  };

  services.xserver = {
    enable = true;
  };

  nixpkgs.config.allowUnfree = true;
  nixpkgs.config.packageOverrides = pkgs: {
    unstable = import <nixos-unstable> { };
  };

  nix.settings.experimental-features = [ "nix-command" "flakes" ];

  environment.systemPackages = with pkgs; [
	obsidian
	onlyoffice-bin
	obs-studio
  wget
  flatpak
  telegram-desktop
  appimage-run
  #snapcraft
  ventoy-full
  nixos-generators
  vlc
  home-manager
	python3Full
  python3
  apt
  nix-index
	#sublime
  qimgv
  zoom-us
	brightnessctl	
	#kdePackages.kdenlive
	xdotool
	pywal
  libinput
  anbox
  teams-for-linux
  libinput-gestures
	glib
	gvfs
  pinta
  ffmpeg
	wofi
  fuse
  haskellPackages.libfuse3
  #appimage-run
  iproute2
  libosinfo
  curl

  #hyprlandPlugins.hyprgrass

	file
  wmctrl
  scrcpy
  android-tools
  qemu
  #remmina
  davinci-resolve
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
  #spice-gtk
  #spice-protocol
  win-virtio
  virtiofsd
  poetry
  #vivaldi
  #win-spice
  #quickemu
	xfce.catfish
	xfce.exo
	libxml2
	libxslt
	fd
  #lxappearance
	zip
	imagemagick
  jq
  #wineWowPackages.waylandFull
  #winetricks
  ags
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
	#gparted
	vscode
	gnupg
  xfce.xfce4-settings
  waydroid
	gtk3
	xwayland
	gtk4
  nix-prefetch-git
  wpgtk
	gnome-multi-writer
	waybar
  swappy
  wl-clipboard
  wf-recorder
	map-cmd
	pavucontrol
	nm-tray
	killall
  blueman
  gnome-power-manager
  hyprshot
  hyprlandPlugins.hyprspace
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

  fonts.fontconfig.enable = true;
  fonts.packages = with pkgs; [
	noto-fonts
	noto-fonts-cjk-sans
	noto-fonts-emoji
	liberation_ttf
	fira-code
  vistafonts
  corefonts
	fira-code-symbols
	mplus-outline-fonts.githubRelease
	dina-font
	proggyfonts
	font-awesome
	nerd-fonts.ubuntu
  ]; 
}