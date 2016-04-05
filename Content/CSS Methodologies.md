*[![Feedback](/assets/feedback.gif) Got feedback?](mailto:leeb@wix.com)*

# What are CSS methodologies?

[OOCSS](http://oocss.org/), [BEM](https://en.bem.info/method/definitions/) and [SMACSS](http://smacss.com/book/) are the 3 main CSS methodologies for scalable maintainable front end code.
They protect us from spaghetti code and improve our CSS code readability.

![](/assets/clock-16.png) **This kit will take you approximately 5 hours**

<a href="#learn"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

  Writing CSS is really simple, we’ve been doing it for many years. 
  But the problem is, that as our project scales up, our CSS code becomes unwieldy and handling it becomes hard. Really hard.
  It gets harder to maintain, harder to debug and un-optimized lines of code lead to poor performance. 
  And guess what? Someone is going to use your code to do something with it. 
  They may hesitate to use it, so they'll write new classes, IDs, etc. which will lead to redundancy and (surprise!) to un-optimized code. 
  
  Smart people across the world have tried to solve these painful points by working on various solutions like pre-processors, standards, methodologies, etc. 
  In this topic we’ll spotlight some of the famous methodologies employed by many professional front end engineers. 

**OOCSS (Object Oriented CSS)**  
Probably the most famous methodology. 
First on, OOCSS may be a misleading name. It implies ideas and behaviors that simply don’t exist in CSS. 
What it is, is this: the core idea is to separate structure and skin, content and container to be able to change them at will
and create a front end framework with re-usable components.

- **[Intro to OOCSS](https://www.youtube.com/watch?v=IKFq2cSbQ4Q&feature=youtu.be&t=2m59s)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Watch until minute 8.40. Gives great introduction to the methodology and an example of how to identify repeating patterns, define them once and reuse it. 


- **[How to Implement OOCSS](http://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Focuses on concepts that help achieve the main goal of the methodology. 
  
  
**BEM (Block, Element, Modifier)**  
BEM is a naming convention that declares the relationship between your BEMs *in their name*, in order to give your CSS classes more transparency and meaning to other developers.


- **[Intro to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  This is a good intro to BEM syntax, why in spite of its ugliness it serves a purpose and most importantly - when not to use it.
  
- **[Why We Should Consider BEM](https://css-tricks.com/bem-101/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Read the ”Why should we consider BEM?” chapter in order to understand the motivation behind the methodology.


**SMACSS (Scalable and Modular Architecture for CSS)**  
SMACSS (pronounced “smacks”) is a way to examine your design process and suggests a way to fit those rigid frameworks into a flexible thought process. 
It is an attempt to document a consistent approach to site development when using CSS. 


- **[SMACSS Explained](https://www.youtube.com/watch?v=C4z_9F6nfS8#t=7m)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  An overview of the architecture by the creator of the methodology.


# Practice


- [ ] **Step 1 - OOCSS** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [Here](https://gist.github.com/xiwcx/9470018#file-organized-css-exercise-1-oocss)'s the HTML for the following example.
Write the CSS, implementing OOCSS. Solution file available [here](http://codepen.io/xiwcx/pen/BnLbm).

  ![](https://github.com/xiwcx/organizing-css/blob/master/img/exercise1-oocss.jpg)
  
  
- [ ] **Step 2 - SMACSS** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [Here](https://gist.github.com/xiwcx/9470018#file-organized-css-exercise-1-oocss)'s the HTML for the following example.
Write the CSS, implementing SMACSS. Solution file available [here](http://codepen.io/xiwcx/pen/xzrfg).

  ![](https://github.com/xiwcx/organizing-css/blob/master/img/exercise2-smacss.jpg)
  
  
- [ ] **Step 3 - BEM** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [Here](https://gist.github.com/xiwcx/9470018#file-organized-css-exercise-1-oocss)'s the HTML for the following example.
Write the CSS, implementing BEM. Solution file available [here](http://codepen.io/xiwcx/pen/JvKzp).

  ![](https://github.com/xiwcx/organizing-css/blob/master/img/exercise3-bem.jpg)
  

# Extras


- **[The Media Object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)**   
  The original example by Nicole Sullivan about how implementing the media object saved hundreds of lines of code.


- **[Organizing CSS - OOCSS, SMACSS and BEM](https://www.youtube.com/watch?v=IKFq2cSbQ4Q)**   
  Watch the full awesome overview of the three methodologies and how they tie in together.


- **[Working with BEM at Scale - Advice From Top Developers](http://www.sitepoint.com/working-bem-scale-advice-top-developers/)**   
  Often guides on the web for BEM stick to the basics. They tell you to arrange things into `block__element--modifier`, but there isn’t a lot of guidance on what to do when things get messy. Is `block__element__subelement--modifier` okay? Is there a best practice for arranging your CSS files? Should you use `@extend` to inherit parent class values or should you list those in your HTML? 
