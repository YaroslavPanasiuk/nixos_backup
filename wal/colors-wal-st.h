const char *colorname[] = {

  /* 8 normal colors */
  [0] = "#0e1524", /* black   */
  [1] = "#4A73B2", /* red     */
  [2] = "#4874BB", /* green   */
  [3] = "#917085", /* yellow  */
  [4] = "#6285BA", /* blue    */
  [5] = "#6992CA", /* magenta */
  [6] = "#98AEDA", /* cyan    */
  [7] = "#cfd7e8", /* white   */

  /* 8 bright colors */
  [8]  = "#9096a2",  /* black   */
  [9]  = "#4A73B2",  /* red     */
  [10] = "#4874BB", /* green   */
  [11] = "#917085", /* yellow  */
  [12] = "#6285BA", /* blue    */
  [13] = "#6992CA", /* magenta */
  [14] = "#98AEDA", /* cyan    */
  [15] = "#cfd7e8", /* white   */

  /* special colors */
  [256] = "#0e1524", /* background */
  [257] = "#cfd7e8", /* foreground */
  [258] = "#cfd7e8",     /* cursor */
};

/* Default colors (colorname index)
 * foreground, background, cursor */
 unsigned int defaultbg = 0;
 unsigned int defaultfg = 257;
 unsigned int defaultcs = 258;
 unsigned int defaultrcs= 258;
