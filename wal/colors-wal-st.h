const char *colorname[] = {

  /* 8 normal colors */
  [0] = "#0a0312", /* black   */
  [1] = "#9C2463", /* red     */
  [2] = "#CA2E60", /* green   */
  [3] = "#A1545A", /* yellow  */
  [4] = "#E45B62", /* blue    */
  [5] = "#F4AA67", /* magenta */
  [6] = "#39508B", /* cyan    */
  [7] = "#91cdc9", /* white   */

  /* 8 bright colors */
  [8]  = "#658f8c",  /* black   */
  [9]  = "#9C2463",  /* red     */
  [10] = "#CA2E60", /* green   */
  [11] = "#A1545A", /* yellow  */
  [12] = "#E45B62", /* blue    */
  [13] = "#F4AA67", /* magenta */
  [14] = "#39508B", /* cyan    */
  [15] = "#91cdc9", /* white   */

  /* special colors */
  [256] = "#0a0312", /* background */
  [257] = "#91cdc9", /* foreground */
  [258] = "#91cdc9",     /* cursor */
};

/* Default colors (colorname index)
 * foreground, background, cursor */
 unsigned int defaultbg = 0;
 unsigned int defaultfg = 257;
 unsigned int defaultcs = 258;
 unsigned int defaultrcs= 258;
