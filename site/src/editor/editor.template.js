export var editorTemplate = `

<div id="code-editor">
  <textarea id="source-editor" class="form-control" rows="6">
let arrowAlert = x => console.log(x);
arrowAlert('what?')
  </textarea>
  <button id="run" class="btn">Run!</button>
</div>

`;