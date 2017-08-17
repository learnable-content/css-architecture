![](headings/5.2.png)

In this section, we will implement the top four layers of the ITCSS architecture: the settings layer, the tools layer, the generic layer and the elements layer.

As we learned in the last section, our constants will go to the settings.scss file. We are going to define the base font size, base-line-height and other settings belonging to our document:

```css
$base-font-size:        12px;
$base-line-height:      18px;

// https://coolors.co/0a2342-b9d6f2-4f7cac-662020-cacfd6
$ci-darkblue:     #0A2342;
$ci-lightblue:    #B9D6F2;
$ci-midblue:      #4F7CAC;
$ci-red:          #662020;
$ci-grey:         #CACFD6;
$ci-lightblue-bg: #E9F6FF;
```

You can use the coolors.co service to create some colors that make sense.

In the tools layer, we are going to create some mixins that we will use later in the other layers. This layer is still not responsible for generating any code whatsoever:

```css
@mixin rounded-border($thickness, $radius) {
  border-radius: $radius;
  border: $thickness solid $ci-midblue;
}

@mixin sky-gradient() {
    background: #2c3e50; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #3498db); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #3498db); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
```

Notice that we're using some of the Sass variables from the top layer already. This is why the settings layer is strictly before the tools layer.

Next, generic. This time we're not taking care of supporting any specific browsers. Obviously the browser that you specify depends on your project requirements. Further to your product requirements, oftentimes it makes sense to check your analytics data to figure out which browsers you can get rid of. After all, there is nothing worse than spending a significant amount of time to support a browser that no one ever watches, or maybe 0.01% of your users watch.

```css
@import "normalize";
```

Download Normalize.css at https://necolas.github.io/normalize.css/.

We will now create our components HTML file. I will not go into the details of the file structure and the modeling and the chosen classes because you will see them in action quite soon when we will style the top layers. You can view the components HTML file in the code examples attached to this course. 

```css
<div class="main">
	<form class="form" action="javascript:void(0)">
		<fieldset class="form__module">
			<legend>
				Textfields, Textareas
			</legend>
			<div class="module__row">
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						Label
					</label>
					<input type="text"
						   class="form__textfield"
						   placeholder="Placeholder" />
				</span>
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						Label
					</label>                               
					<input type="text"
						   class="form__textfield" 
						   placeholder="Placeholder" />
				</span>                               
			</div>
			<div class="module__row">
				<span class="module-row__field--wide">
					<label class="form__label">
						Label
					</label>  
					<input type="text"
						   class="form__textfield"
						   placeholder="Placeholder" />
				</span>
			</div>  
			<div class="module__row">
				<span class="module-row__field--wide">
					<label class="form__label  mandatory-input">
						Long Label
					</label>  
					<textarea class="form__textarea  mandatory-input"
							  placeholder="Placeholder"></textarea>
				</span>
			</div>                  
		</fieldset>
		<fieldset class="form__module">
			<legend>
				Checkboxes, Radio Buttons, Dropdowns, Buttons
			</legend>
			<div class="module__row">
				<span class="module-row__field">
					<label class="form__label">Label</label>
					<input type="checkbox"
						   class="form__checkbox"
						   value="1" />
					<label class="form__checkbox-label">
						One
					</label>
				</span>
				<span class="module-row__field">
					<label class="form__label">Label</label>
					<input type="radio"
						   name="radio-group"
						   class="form__radio"
						   value="1" />
					<label class="form__radio-label">
						One
					</label>  
					<input type="radio"
						   name="radio-group"
						   class="form__radio"
						   value="2" />
					<label class="form__radio-label">
						Two
					</label>                        
				</span>
			</div>
			<div class="module__row">                
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						Label
					</label>                              
					<select name="test" 
							class="form__select"
							placeholder="Select an option">
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</select>
				</span>
			</div>
			<div class="module__row">
				<span class="module-row__field--wide">
					<button class="form__button">Press me</button>
				</span>
			</div>
		</fieldset>
	</form>
</div>
```

Jump into the elements.scss file and start styling:

```css
html {
    font-size: $base-font-size;
    line-height: $base-line-height;
}

body {
    font: 1rem "Segoe UI", Helvetica, Arial;
    background-color: $ci-grey;
    color: $ci-darkblue;
}

form {
    width: 80%;
    margin:    4rem auto;
    font-size: 1.5rem;
}

label {
    cursor: pointer;
}

fieldset {   
    font-size: 2.25rem;
    line-height: 1.5;       
}

label, input, button, textarea, select {
    font-size: 1.5rem;
}
```

This concludes all the generic styling belonging to our component library. In the next section, we're going to take care of the next two layers, namely objects and components.