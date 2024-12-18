{ pkgs, inputs, ... }:

{
  programs.firefox = {
    enable = true;
    profiles.default = {

      search.force = true;

      bookmarks = [
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "gmail";
          url = "https://mail.google.com/mail/u/1/#inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
        {
          name = "";
          tags = [ "mail" ];
          keyword = "proton";
          url = "https://mail.proton.me/u/0/inbox";
        }
      ];

      settings = {
        "dom.security.https_only_mode" = true;
        "browser.download.panel.shown" = true;
        "identity.fxaccounts.enabled" = false;
        "signon.rememberSignons" = false;
      };

      userChrome = ''                         
        /* some css */                        
      '';                                      

      extensions = with inputs.firefox-addons.packages."x86_64-linux"; [
        bitwarden
        ublock-origin
        sponsorblock
        darkreader
        tridactyl
        youtube-shorts-block
      ];

    };
  };

}