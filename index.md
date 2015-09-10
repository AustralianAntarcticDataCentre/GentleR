---
title: ""
layout: default
name: "GentleR"
---

## [About](About/).....[Links](Links/).....[Weasel](Weasel/)

# Discussion material by date
- 2015-09-10
  * data.table: enhanced version of data.frame that allows blazing fast data manipulation. Some resources:
  [CRAN](https://cran.r-project.org/web/packages/data.table/index.html)
  [Matt Dowle's 2014 useR! tutorial, 71p](http://user2014.stat.ucla.edu/files/tutorial_Matt.pdf)
  [data.table Cheatsheet](http://blog.datacamp.com/data-table-cheat-sheet/)
  [Advanced tricks and tips](http://brooksandrew.github.io/simpleblog/articles/advanced-data-table/)
  * brushing points in lattice::splom (scatterplot matrix)
  Run the first exmaple from the splom help page, then add:
    trellis.focus("panel", 1, 1)
    panel.link.splom(threshold = 18) 
  Basic but easy. You'll need to edit lattice::panel.link.splom & lattice:::splom.linkPoint yourself if you want fancy.
- 2015-07-23:
  * Choosing colours to accommodate colour-blindness ([pdf](2015-07-23/dichromat.pdf), [Rmd](2015-07-23/dichromat.Rmd))
  * Pan and zoom - Yihui Xie's original post that spawned the whale application ([R-Dev link](http://tolstoy.newcastle.edu.au/R/e6/devel/09/02/0535.html))
- 2015-06-25: 
  * Graticules for R (M.Sumner [html](2015-06-25/graticule_MDSumner_2015-06-25.html))
  * Video recording of Bayes Factor Workshop held 15-Jun-2015 in Hobart [link](2015-06-25/)
- 2015-05-07: AIC/BIC model selection (see [here](https://www.youtube.com/watch?v=lEDpZmq5rBw) for an insightful seminar by Mark Brewer, and [here2](http://onlinelibrary.wiley.com/doi/10.1111/j.1751-5823.2010.00108.x/abstract) and [here3](http://onlinelibrary.wiley.com/doi/10.1002/sim.5855/abstract) for some papers that might revolutionise your thinking on the matter)
- 2015-04-16: Blue whale voyage, animation of sonobouy and call locations ([html](2015-04-09/bwvcalls.html))
- 2015-02-19: Additive model fitting and diagnostics II ([pdf](2015-02-19/gam_fitting_and_diagnostics.pdf), [RMarkdown](2015-02-19/gam_fitting_and_diagnostics.Rmd))
- 2015-01-29: Italics in plots via awful column names, eval/parse, and expressions. ([pdf](2015-01-29/italics.pdf), [RMarkdown](2015-01-29/italics.Rmd))
- 2014-11-13: Confidence intervals for non-linear least squares models (using VB growth models as an example) ([docx](2014-11-13/nls-vb.docx), [RMarkdown](2014-11-13/nls-vb.Rmd))



