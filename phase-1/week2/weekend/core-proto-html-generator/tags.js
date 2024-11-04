function Template() {
  this.accumulatedTags = [];
}

Template.prototype.tags = [
  "html",
  "head",
  "title",
  "body",
  "div",
  "h1",
  "p",
  "span",
  "ul",
  "li",
  "b",
];
Template.prototype.tags.forEach((tag) => {
  Template.prototype[tag] = function (content, ...rest) {
    if (!this.accumulatedTags) {
      this.accumulatedTags = [];
    }
    if (!arguments.length) {
      this.accumulatedTags.push(tag);
      return this;
    } else {
      content += rest.join("");
      this.result = `<${tag}>${content}</${tag}>`;
      while (this.accumulatedTags && this.accumulatedTags.length) {
        this.result = this[this.accumulatedTags.pop()](this.result);
      }
    }

    return this.result;
  };
  Template.prototype[tag].prototype = Template.prototype;
});

const tmpl = new Template();

const boldText = tmpl.b;
console.log(boldText.prototype); // "<b>bold</b>"
const block = tmpl.div;
console.log(tmpl.div.p("dsad"));
/* console.log(block().p("paragraph")); // "<div><p>paragraph</p></div>" */

/* const h1InDiv = tmpl.div().h1;
console.log(h1InDiv('Awesome')); // "<div><h1>Awesome</h1></div>"
console.log(h1InDiv.span('That is awesome!')); // "<div><h1><span>That is awesome!</span></h1></div>" */
