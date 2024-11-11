static const char norm_fg[] = "#91cdc9";
static const char norm_bg[] = "#0a0312";
static const char norm_border[] = "#658f8c";

static const char sel_fg[] = "#91cdc9";
static const char sel_bg[] = "#CA2E60";
static const char sel_border[] = "#91cdc9";

static const char urg_fg[] = "#91cdc9";
static const char urg_bg[] = "#9C2463";
static const char urg_border[] = "#9C2463";

static const char *colors[][3]      = {
    /*               fg           bg         border                         */
    [SchemeNorm] = { norm_fg,     norm_bg,   norm_border }, // unfocused wins
    [SchemeSel]  = { sel_fg,      sel_bg,    sel_border },  // the focused win
    [SchemeUrg] =  { urg_fg,      urg_bg,    urg_border },
};
