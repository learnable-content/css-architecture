![](headings/5.4.png)

In this section, we're going to utilize our component library by creating checkout form. Let's create a new html file and call it *checkout.html*:

```html
<div class="main">
	<form class="form" action="javascript:void(0)">
		<fieldset class="form__module">
			<legend>
				Registration information
			</legend>
			<div class="module__row">
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						Name
					</label>
					<input type="text"
						   class="form__textfield"
						   placeholder="Your name" />
				</span>
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						Email
					</label>                               
					<input type="text"
						   class="form__textfield" 
						   placeholder="Your email" />
				</span>                               
			</div>
			<div class="module__row">
				<span class="module-row__field--wide">
					<label class="form__label">
						Address
					</label>  
					<input type="text"
						   class="form__textfield"
						   placeholder="Street, house no." />
				</span>
			</div>  
			<div class="module__row">
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						Zip code
					</label>
					<input type="text"
						   class="form__textfield"
						   placeholder="Zip" />
				</span>
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						City
					</label>                               
					<input type="text"
						   class="form__textfield" 
						   placeholder="City" />
				</span>                               
			</div>
			<div class="module__row">                
				<span class="module-row__field">
					<label class="form__label  mandatory-input">
						Country
					</label>                              
					<select name="test" 
							class="form__select"
							placeholder="Choose your country">
						<option value="1">Austria</option>
						<option value="2">Australia</option>
					</select>
				</span>
			</div>
			<div class="module__row">
				<span class="module-row__field--wide">
					<label class="form__label  mandatory-input">
						Remarks
					</label>  
					<textarea class="form__textarea  mandatory-input"
							  placeholder="Remarks, shipping instructions"></textarea>
				</span>
			</div>                  



			<div class="module__row">
				<span class="module-row__field--wide">
					<label class="form__label">Terms and conditions</label>
					<input type="checkbox"
						   class="form__checkbox"
						   value="1" />
					<label class="form__checkbox-label">
						I have read and accepted the terms and conditions
					</label>
				</span>
			</div>
			<div class="module__row">
				<span class="module-row__field--wide">
					<label class="form__label"></label>
					<button class="form__button--important">Buy Now</button>
				</span>
			</div>
		</fieldset>
	</form>
</div>
```

Now trumps:

```css
.buy-now-button {
    background: #ffa500;
    color: $ci-red;
    font-size: 2rem;
    font-weight: 800;
}
```

We discovered how to use the ITCSS architecture in practice and the block element modifier syntax. We also had some cases where we had to take some decisions on naming some classes properly.

