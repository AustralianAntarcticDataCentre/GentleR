---
title: ""
layout: default
name: "GentleR"
---

## [About](About/).....[Links](Links/).....[Weasel](Weasel/)

# Discussion material by date
- 2016-08-11
  * Discussion on MV analyses of K-Axis OTU data (Laurence C.), mvabund vs traditional approaches.
  * Discussion of correlated covariates in regression, VIFs and "what's all the fuss about anyway" (Rowan T.).
- 2016-07-21
  * Discussion about estimating volume of electron microscope critters with missing data on key length measurements (Bruce G.)
- 2016-05-26
  * Discussion about RStudio notebooks (pre-release versions only)
- 2016-03-31
  * Discussion of the utility of package mvabund for assessing species-species-environment interactions.
- 2016-03-24
  * More model selection debate, a little on conditional inference trees, and some discussion of whale feeding biology. 
- 2016-03-17
  * Discussion of a simulation experiment to assess the efficacy of AIC/BIC in recovering interaction terms.
- 2016-03-10
  * The ASA's statement on p-values: context, process, and purpose [link](http://amstat.tandfonline.com/doi/abs/10.1080/00031305.2016.1154108). And don't forget the supplementary material that contains the individual views of the combatants.. um, I mean discussants.
- 2016-03-03
  * Discussion of fitting multivariate binomial models to species presence/absence data (Aleks Terauds).  
  * Discussion of the merits of linear and non-linear interpolation of dose-response relationships when data are insufficient to support logistic-type models (Abby Proctor).   
- 2016-02-25
  * Discussion of sampling design for FOCE related work (James Black)
  * Continuing discussion of random forests (Jim Dell)
- 2016-02-18
  * Presentation by Spoon on selecting suitable starting values for broken-stick regression in JAGS; discussion of Gelman's views on EDA, data snooping and hypothesis testing; discussion of conditional inference trees. 
- 2016-02-11
  * Discussion of image analysis wrt quantifying snow coverage.
- 2016-02-04
  * Discuss colorspace package and the choose_pallette() function - a swish GUI for viewing, manipulating and choosing HCL color palettes. Here's the [link](https://cran.r-project.org/web/packages/colorspace/index.html).
  * Discuss length-weight relationships in animals; a good review paper can be found [here](http://onlinelibrary.wiley.com/doi/10.1111/j.1439-0426.2006.00805.x/abstract).  
- 2016-01-28
  * Discuss efficiency of random forests for small n and possibilities for combining results from several univariate forests. 
- 2015-12-17
  * Review of David Warton talk "The modernisation of multivariate analysis in ecology", given at the recent IBS-AR Conference. A copy of David's talk can be found [here](http://www.biometrics.org.au/conferences/Hobart2015/talks2015/Thursday/W_1050_Thu_DavidWarton.pptx).   
- 2015-09-17
  * Need to display high-dimensional data, spatially? Check out ?stars which can be plotted in x-y using the locations argument. Here's an example using 25-d species data and liberal use of alpha to highlight a single species. [example](2015-09-17/stars.jpg)
- 2015-09-10
  * data.table: enhanced version of data.frame that allows blazing fast data manipulation. Some resources:  
  [CRAN](https://cran.r-project.org/web/packages/data.table/index.html), 
  [Matt Dowle's 2014 useR! tutorial, 71p](http://user2014.stat.ucla.edu/files/tutorial_Matt.pdf), 
  [data.table Cheatsheet](http://blog.datacamp.com/data-table-cheat-sheet/), 
  [Advanced tricks and tips](http://brooksandrew.github.io/simpleblog/articles/advanced-data-table/)
  * Brushing points in lattice::splom (scatterplot matrix)  
    Run the first example from the splom help page, then add:  
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



