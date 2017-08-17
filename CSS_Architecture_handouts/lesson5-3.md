![](headings/5.3.png)

We will now implement the objects and the components layer of the ITCSS architecture. 

Let's start with the objects layer:

```css
.form__module {
  margin: 1rem;
  padding: 1rem;
  @include rounded-border(0.2rem, 1.5rem);

  &:hover {
      background-color: $ci-lightblue;
  }
}

.module__row {
    padding: 0.5rem 3rem;
    margin: 0 0 0.25rem 0;
}

.module-row__field {
    width: 45%;
    padding: 0;
    margin: 0 2% 0 0;
    display: inline-block;
}

.module-row__field--wide {
    @extend .module-row__field;
    width: 95%;
}
```

Now components:

```css
.form__label {
    display: inline-block;
    text-align: right;
    width: 9rem;
    margin: 0 1rem 0 0;

    &.mandatory-input:after {
        content: "*";
    }
}

.form__checkbox-label, .form__radio-label {
    margin: 0 1rem 0 0;
}

.form__input {
    margin: 0;
    padding: 0.25rem 0.75rem;
    border: 1px solid $ci-midblue;
}

.form__textfield {
    @extend .form__input;
    width: calc( 96% - 15rem );
}

.form__textarea {
    @extend .form__input;
    width: calc( 96% - 15rem );
    height: 3rem;
    margin-bottom: -0.5rem;
}

.form__checkbox {
    @extend .form__input;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
}

.form__radio {
    @extend .form__input;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
}

.form__button {
    @extend .form__input;
    color: $ci-lightblue;
    @include sky-gradient();
    padding: 1rem;
    cursor: pointer;
    @include rounded-border( 1px, 1rem );
}

.form__select {
    @extend .form__input;
    padding-left: 0.5rem;
    width: calc( 96% - 15rem );
}
```

