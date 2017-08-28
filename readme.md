# The Idea
Create a CSS file I can use, with classes I'd find useful, so that no time's wasted in setting up a new sideproject.

## Todo
* **come up with a name**
* <s>Gridding with Flexbox</s>
* <s>Classes for background/foreground color</s>
* Header/Body Styling
* <s>Sticky footer with Flex</s>
* Finish off docs
    * _vars.css
    * boiler.css
    * <s>box.css</s>
    * color.css
    * <s>grid.css</s>
    * text.css
* Helpful CSS classes
    * <s>Material design button</s>
    * Better looking forms
    * <s>Material/Semantic inspired 'paper'</s>

# Docs

## Gridding
The gridding system utilises Flexbox to operate. A standard, and sane (ahem, semantic-ui) grid, comprising of 12 columns is used.
Columns live inside rows, which themselves live inside of a main container. A by-product of using this main container is that by default, the footer is stickied to the bottom.
A typical setup may be:
```html
<div class="container">
    <div class="row">
        <div class="col sm6">A column that takes up 50% of the page</div>
        <div class="col sm6">Another column that takes up 50% of the page</div>
    </div>
</div>
```
### Responsive Design
The grid allows for responsive design, with `sm`, `md` and `lg` prefixes.
* `sm` is for mobiles - <768px in width
* `md` is for larger devices that are <992px in width;
* `lg` is for normal pages >=992pox in width.

### Column Spacing
As well as having columns with a default spacing of 1%, we can also add more with `spc-$N`,where `$N` is one of 12, 24, 40 and describe the amount of pixel padding on the left and the right.

### Push and Pull
Conventional push and pull isn't a part of this framework, but there does exist the option to center the columns - using flex. This can be easily achieved by adding `.cols-center` as a class to your `row` div.

## Font

## Colors

## CSS Box Model
- The Box model. Of the form `BB-PP-SS` 
    - `.mg-hz-20` yields a border on the left and right of size 20%.
    - `BB` - Box - either:
        - Padding: `pa`;
        - Margin: `mg`
    _ `PP` - Position (optional)
        - Left/Right/Top/Bottom: `[l|r|t|b]`
        - Vertical/Horizontal: `[hz|vt]`
    - `SS` - Size
        - Measured in percentages, one of `[20|40|60|80]` 

## Helpers
