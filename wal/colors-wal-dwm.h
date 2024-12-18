static const char norm_fg[] = "#cfd7e8";
static const char norm_bg[] = "#0e1524";
static const char norm_border[] = "#9096a2";

static const char sel_fg[] = "#cfd7e8";
static const char sel_bg[] = "#4874BB";
static const char sel_border[] = "#cfd7e8";

static const char urg_fg[] = "#cfd7e8";
static const char urg_bg[] = "#4A73B2";
static const char urg_border[] = "#4A73B2";

static const char *colors[][3]      = {
    /*               fg           bg         border                         */
    [SchemeNorm] = { norm_fg,     norm_bg,   norm_border }, // unfocused wins
    [SchemeSel]  = { sel_fg,      sel_bg,    sel_border },  // the focused win
    [SchemeUrg] =  { urg_fg,      urg_bg,    urg_border },
};
