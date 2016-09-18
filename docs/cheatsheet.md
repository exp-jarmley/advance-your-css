# Advance Your CSS cheatsheet

## Writing guide / best practices

### 1. Ordering rulesets
For more information, see [ITCSS on xfive](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

Use the ITCSS principal (Inverted Triangle CSS). Like an inverted triangle the broadest rules are written first and then they progrssively get more specific. Like this:

1. LESS mixins/variables that aren't output
1. Normalize rules (styles to make browser default styles for basic elements the same across all browser )
2. Styles for basic tags (like headings and paragraphs)
3. Styles for reusable components
4. Page layout styles

### 2. How we write a ruleset

For more information see the CSS writing guide on the uitk wiki

- All selectors should be on a new line
- All prop/value pairs should be on a new line
- For multiple value rules (like multiple box shadows), each value has its own line:

```
p,
h1 {
	font-size: 1em;
	box-shadow:
		0 0 .1rem red,
		0 .1rem .1rem blue;
}
```
- Avoid being overdeclaritive ie: try to use as few selectors as possible to get to target an element eg, for `.post-header`:

```
<article class="post">
	<h1 class="post-header">Heading</h1>
</article>
```

```
// Bad
article.post h1.post-header {...}

// Good
.post-header {...}

```

## Some simple CSS selectors

For a full list, visit the [css selector cheat sheet](http://www.cheetyr.com/css-selectors)

```
// By class
.hotelname {}

// By ID
/#hotelname {}

// By tag
h1 {}
```

## Resources

[css selector cheat sheet](http://www.cheetyr.com/css-selectors)
Lookup some simple CSS selectors

[caniuse](http://caniuse.com)
Find what CSS properties are supported in various browsers

[lesstester](http://lesstester.com/)
Try out LESS in your browser

[MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
Mozilla Developer Network CSS resource. Super useful for finding out about properties and CSS best practice

[LESSCSS site](http://lesscss.org/)
Docs site for LESS

